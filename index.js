// Email validation with regex
function validEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

// Full name validation
function validFullName(name) {
  return /^[a-zA-Z]{2,}(?:\s[a-zA-Z]+){0,2}$/.test(name);
}
// Get file extension
function fileType(event) {
  const file = event.target.files[0];
  return file ? file.name.split(".").pop().toLowerCase() : null;
}

// Check if the uploaded file is an image
function isImage(event) {
  const typeOfFile = fileType(event);
  const typeList = ["png", "jpeg", "jpg", "webp", "gif", "heif"];
  return typeOfFile ? typeList.includes(typeOfFile) : false;
}

// Get file size
function fileSize(event, type = "kb") {
  const file = event.target.files[0];
  if (!file) return null;

  const size = file.size;
  switch (type) {
    case "kb":
      return Math.round(size / 1024);
    case "mb":
      return Math.round(size / (1024 * 1024));
    case "gb":
      return Math.round(size / (1024 * 1024 * 1024));
    default:
      return Math.round(size / 1024);
  }
}

// Generate a random ID
function dataId(length = 8) {
  const chars =
    "QAWqaSEDsfvRFTGY1454e2d5rsesdfdsffaretryLffg36gregeP4Z8B9X7dskMDSFDEGfew8s0f3N5V6tgHUJIKfdfdOyhujikolpzmcMCnvbx";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

// Generate a dummy email
function dummyEmail() {
  const chars = "aqwesxzcdrfvbgthnyjumkilop";
  const emailDomains = [
    ".com",
    ".co.in",
    ".net",
    ".org",
    ".edu",
    ".gov",
    ".co.uk",
    ".io",
    ".info",
    ".biz",
  ];

  let header = "";
  let after = "";
  for (let i = 0; i < 6; i++) {
    header += chars[Math.floor(Math.random() * chars.length)];
  }
  for (let i = 0; i < 3; i++) {
    after += chars[Math.floor(Math.random() * chars.length)];
  }

  return `${header}@${after}${
    emailDomains[Math.floor(Math.random() * emailDomains.length)]
  }`;
}

// Generate a random hex color
function randomColour() {
  const code = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += code[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Check if file has a specific extension
function isFile(event, type) {
  return fileType(event) === type.toLowerCase();
}

// Generate a numeric OTP
function otp(length = 6) {
  let myotp = "";
  for (let i = 0; i < length; i++) {
    myotp += Math.floor(Math.random() * 10);
  }
  return myotp.toString(); // Return as string to preserve leading zeros
}

const functions = {
  validEmail,
  validFullName,
  fileType,
  isImage,
  fileSize,
  dataId,
  dummyEmail,
  randomColour,
  isFile,
  otp,
};

// ESM export
export default functions;

// CJS export
if (typeof module !== "undefined") {
  module.exports = functions;
}
