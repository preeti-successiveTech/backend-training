import { faker } from "@faker-js/faker";
import { Orders } from "../models/orders";
import { connectDB } from "../config/db";

const data = async () => {
  try {
    await connectDB();
    await Orders.deleteMany({});
    for (let i = 1; i <= 20; i++) {
      const orderId = i;
      const customerName = faker.person.fullName();
      const orderDate = faker.date.past();
      const status = faker.helpers.arrayElement([
        "Pending",
        "Shipped",
        "Delivered",
      ]);
      const itemCount = faker.number.int({ min: 1, max: 5 });

      const items = Array.from({ length: itemCount }, () => ({
        productName: faker.commerce.productName(),
        quantity: faker.number.int({ min: 1, max: 10 }),
        price: parseFloat(faker.commerce.price()),
      }));
      const totalAmount = items.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );

      const data = new Orders({
        orderId,
        customerName,
        orderDate,
        status,
        items,
        totalAmount,
      });
      await data.save();
    }
    console.log("Successfully inserted 20 mock orders.");
    process.exit(0);
  } catch (err) {
    console.error(" Error seeding orders:", err);
    process.exit(1);
  }
};
data();
