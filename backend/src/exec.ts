import { createConnection, getRepository } from "typeorm";
import dbConfig from "./db-config";
import Customer from "./entities/customer";

createConnection(dbConfig)
  .then(async (connection) => {
    console.log("Postgres Connected");
    try {
      const repository = getRepository(Customer);

      // const newCustomer = new Customer('Neo');
      // newCustomer.age = 30;
      // const savedCustomer = await customerRepository.save(newCustomer);
      // console.log('Saved: ', savedCustomer)

      // const allCustomers = await customerRepository.find();
      // console.log("Select: ", allCustomers);
  
      // const a = await repository.createQueryBuilder('customer').where('name = :name', {name: "Neo"}).getMany();
      // const a = await repository.delete({id: 1})
      
      
      // console.log(a);
    } catch (error) {
      console.log("Fail: ", error)
    } finally {
      await connection.close();
      console.log("Connection Closed");
    }
  })
  .catch((error) => {
    console.error("Postgres Connection Failed", error);
  });
