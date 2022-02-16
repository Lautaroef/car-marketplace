// const multer = require('multer');
// const fileStorageEngine = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, '../src/carImages/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '--' + file.originalname);
//   },
// });

// const upload = multer({
//   storage: fileStorageEngine,
//   limits: { fileSize: 1024 * 1024 * 5 },
//   // fileFilter: fileFilter,
// });
