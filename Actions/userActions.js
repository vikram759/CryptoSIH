// "use server"

// import mongoose from 'mongoose';
// import { Transaction } from '../../models/Transaction'; // Adjust based on your actual model

// // MongoDB connection setup (use your connection string)
// const connectDB = async () => {
//     if (mongoose.connections[0].readyState) {
//         return;
//     }
//     await mongoose.connect(process.env.MONGODB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
// };

// // API Handler to fetch filtered transactions
// export default async function handler(req, res) {
//     const { query } = req;

//     await connectDB(); // Connect to MongoDB

//     try {
//         // Building dynamic query based on filter parameters
//         let filter = {};

//         // If a time range is provided, add it to the filter
//         if (query.startDate && query.endDate) {
//             filter.time = {
//                 $gte: new Date(query.startDate),
//                 $lte: new Date(query.endDate),
//             };
//         }

//         // If a sender ID is provided, add it to the filter
//         if (query.senderId) {
//             filter.senderId = query.senderId;
//         }

//         // If a receiver ID is provided, add it to the filter
//         if (query.receiverId) {
//             filter.receiverId = query.receiverId;
//         }

//         // If an amount range is provided, add it to the filter
//         if (query.minAmount && query.maxAmount) {
//             filter.amount = {
//                 $gte: parseFloat(query.minAmount),
//                 $lte: parseFloat(query.maxAmount),
//             };
//         }

//         // Fetching the filtered data from MongoDB
//         const transactions = await Transaction.find(filter);

//         // Return the filtered transactions
//         res.status(200).json(transactions);
//     } catch (err) {
//         res.status(500).json({ message: 'Error fetching transactions', error: err });
//     }
// }
