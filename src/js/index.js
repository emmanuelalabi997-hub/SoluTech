const sun = document.querySelectorAll(".sun");
const mainSpot = document.querySelectorAll(".mainSpot");
const Border = document.querySelectorAll(".Border");
const body = document.getElementById("body");
const navBar = document.getElementById("navBar");
const bars = document.getElementById("bars");
const sideBar = document.getElementById("sideBar");
const submitButton = document.querySelector(".submit");
const fullName = document.getElementById("FullName");
const date = document.getElementById("Date");
const time = document.getElementById("Time");
const service = document.getElementById("Service");
const deviceType = document.getElementById("DeviceType");
const bookingDetail = document.getElementById("booking_details");
const typeDevice = document.getElementById("device_type");
const repairIssue = document.getElementById("repair_issue");
const estimateBtn = document.getElementById("EstimateBtn");
const estimateInput = document.getElementById("EstimatedPrice");

// 1. Your clean price database directory
const priceDatabase = {
    //IPHONE DEVICES
"iPhone 17": {
    "Screen Replacement": "180,000 NGN",
    "Glass Only Repair": "70,000 NGN",
    "Back Glass Replacement": "60,000 NGN",
    "Battery Replacement": "35,000 NGN",
    "Charging Port Repair": "25,000 NGN",
    "Wireless Charging Repair": "25,000 NGN",
    "Rear Camera Repair": "80,000 NGN",
    "Front Camera/FaceID Repair": "60,000 NGN",
    "Loudspeaker Repair": "20,000 NGN",
    "Microphone Repair": "20,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "20,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "30,000 NGN",
    "Motherboard Micro-Soldering": "95,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "70,000 NGN",
    "Network/Carrier Unlocking": "40,000 NGN"
},
"iPhone 17 Plus": {
    "Screen Replacement": "195,000 NGN",
    "Glass Only Repair": "75,000 NGN",
    "Back Glass Replacement": "65,000 NGN",
    "Battery Replacement": "38,000 NGN",
    "Charging Port Repair": "25,000 NGN",
    "Wireless Charging Repair": "25,000 NGN",
    "Rear Camera Repair": "85,000 NGN",
    "Front Camera/FaceID Repair": "60,000 NGN",
    "Loudspeaker Repair": "20,000 NGN",
    "Microphone Repair": "20,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "20,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "30,000 NGN",
    "Motherboard Micro-Soldering": "95,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "70,000 NGN",
    "Network/Carrier Unlocking": "40,000 NGN"
},
"iPhone 17 Pro": {
    "Screen Replacement": "220,000 NGN",
    "Glass Only Repair": "85,000 NGN",
    "Back Glass Replacement": "75,000 NGN",
    "Battery Replacement": "40,000 NGN",
    "Charging Port Repair": "25,000 NGN",
    "Wireless Charging Repair": "30,000 NGN",
    "Rear Camera Repair": "95,000 NGN",
    "Front Camera/FaceID Repair": "70,000 NGN",
    "Loudspeaker Repair": "20,000 NGN",
    "Microphone Repair": "20,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "25,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "35,000 NGN",
    "Motherboard Micro-Soldering": "110,000 NGN",
    "Software/Bootloop Flashing": "20,000 NGN",
    "Data Recovery": "80,000 NGN",
    "Network/Carrier Unlocking": "50,000 NGN"
},
"iPhone 17 Pro Max": {
    "Screen Replacement": "250,000 NGN",
    "Glass Only Repair": "95,000 NGN",
    "Back Glass Replacement": "85,000 NGN",
    "Battery Replacement": "45,000 NGN",
    "Charging Port Repair": "30,000 NGN",
    "Wireless Charging Repair": "35,000 NGN",
    "Rear Camera Repair": "110,000 NGN",
    "Front Camera/FaceID Repair": "75,000 NGN",
    "Loudspeaker Repair": "25,000 NGN",
    "Microphone Repair": "25,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "30,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "40,000 NGN",
    "Motherboard Micro-Soldering": "120,000 NGN",
    "Software/Bootloop Flashing": "20,000 NGN",
    "Data Recovery": "80,000 NGN",
    "Network/Carrier Unlocking": "50,000 NGN"
},
"iPhone 16": {
    "Screen Replacement": "160,000 NGN",
    "Glass Only Repair": "65,000 NGN",
    "Back Glass Replacement": "55,000 NGN",
    "Battery Replacement": "30,000 NGN",
    "Charging Port Repair": "25,000 NGN",
    "Wireless Charging Repair": "25,000 NGN",
    "Rear Camera Repair": "75,000 NGN",
    "Front Camera/FaceID Repair": "55,000 NGN",
    "Loudspeaker Repair": "20,000 NGN",
    "Microphone Repair": "20,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "20,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "30,000 NGN",
    "Motherboard Micro-Soldering": "90,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "70,000 NGN",
    "Network/Carrier Unlocking": "40,000 NGN"
},
"iPhone 16 Pro": {
    "Screen Replacement": "200,000 NGN",
    "Glass Only Repair": "80,000 NGN",
    "Back Glass Replacement": "70,000 NGN",
    "Battery Replacement": "35,000 NGN",
    "Charging Port Repair": "25,000 NGN",
    "Wireless Charging Repair": "30,000 NGN",
    "Rear Camera Repair": "90,000 NGN",
    "Front Camera/FaceID Repair": "65,000 NGN",
    "Loudspeaker Repair": "20,000 NGN",
    "Microphone Repair": "20,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "25,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "35,000 NGN",
    "Motherboard Micro-Soldering": "100,000 NGN",
    "Software/Bootloop Flashing": "20,000 NGN",
    "Data Recovery": "80,000 NGN",
    "Network/Carrier Unlocking": "45,000 NGN"
},
"iPhone 16 Pro Max": {
    "Screen Replacement": "230,000 NGN",
    "Glass Only Repair": "90,000 NGN",
    "Back Glass Replacement": "80,000 NGN",
    "Battery Replacement": "40,000 NGN",
    "Charging Port Repair": "30,000 NGN",
    "Wireless Charging Repair": "35,000 NGN",
    "Rear Camera Repair": "100,000 NGN",
    "Front Camera/FaceID Repair": "70,000 NGN",
    "Loudspeaker Repair": "25,000 NGN",
    "Microphone Repair": "25,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "30,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "40,000 NGN",
    "Motherboard Micro-Soldering": "110,000 NGN",
    "Software/Bootloop Flashing": "20,000 NGN",
    "Data Recovery": "80,000 NGN",
    "Network/Carrier Unlocking": "45,000 NGN"
},
"iPhone 16 Plus": {
    "Screen Replacement": "170,000 NGN",
    "Glass Only Repair": "70,000 NGN",
    "Back Glass Replacement": "60,000 NGN",
    "Battery Replacement": "32,000 NGN",
    "Charging Port Repair": "25,000 NGN",
    "Wireless Charging Repair": "25,000 NGN",
    "Rear Camera Repair": "80,000 NGN",
    "Front Camera/FaceID Repair": "55,000 NGN",
    "Loudspeaker Repair": "20,000 NGN",
    "Microphone Repair": "20,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "20,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "30,000 NGN",
    "Motherboard Micro-Soldering": "90,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "70,000 NGN",
    "Network/Carrier Unlocking": "40,000 NGN"
},
"iPhone 15": {
    "Screen Replacement": "140,000 NGN",
    "Glass Only Repair": "60,000 NGN",
    "Back Glass Replacement": "50,000 NGN",
    "Battery Replacement": "28,000 NGN",
    "Charging Port Repair": "20,000 NGN",
    "Wireless Charging Repair": "20,000 NGN",
    "Rear Camera Repair": "70,000 NGN",
    "Front Camera/FaceID Repair": "50,000 NGN",
    "Loudspeaker Repair": "15,000 NGN",
    "Microphone Repair": "15,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "20,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "25,000 NGN",
    "Motherboard Micro-Soldering": "80,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "60,000 NGN",
    "Network/Carrier Unlocking": "35,000 NGN"
},
"iPhone 15 Plus": {
    "Screen Replacement": "150,000 NGN",
    "Glass Only Repair": "65,000 NGN",
    "Back Glass Replacement": "55,000 NGN",
    "Battery Replacement": "30,000 NGN",
    "Charging Port Repair": "20,000 NGN",
    "Wireless Charging Repair": "20,000 NGN",
    "Rear Camera Repair": "75,000 NGN",
    "Front Camera/FaceID Repair": "50,000 NGN",
    "Loudspeaker Repair": "15,000 NGN",
    "Microphone Repair": "15,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "20,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "25,000 NGN",
    "Motherboard Micro-Soldering": "85,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "60,000 NGN",
    "Network/Carrier Unlocking": "35,000 NGN"
},
"iPhone 15 Pro": {
    "Screen Replacement": "180,000 NGN",
    "Glass Only Repair": "75,000 NGN",
    "Back Glass Replacement": "65,000 NGN",
    "Battery Replacement": "32,000 NGN",
    "Charging Port Repair": "25,000 NGN",
    "Wireless Charging Repair": "25,000 NGN",
    "Rear Camera Repair": "85,000 NGN",
    "Front Camera/FaceID Repair": "60,000 NGN",
    "Loudspeaker Repair": "20,000 NGN",
    "Microphone Repair": "20,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "25,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "30,000 NGN",
    "Motherboard Micro-Soldering": "95,000 NGN",
    "Software/Bootloop Flashing": "20,000 NGN",
    "Data Recovery": "75,000 NGN",
    "Network/Carrier Unlocking": "40,000 NGN"
},
"iPhone 15 Pro Max": {
    "Screen Replacement": "210,000 NGN",
    "Glass Only Repair": "85,000 NGN",
    "Back Glass Replacement": "75,000 NGN",
    "Battery Replacement": "35,000 NGN",
    "Charging Port Repair": "25,000 NGN",
    "Wireless Charging Repair": "30,000 NGN",
    "Rear Camera Repair": "95,000 NGN",
    "Front Camera/FaceID Repair": "65,000 NGN",
    "Loudspeaker Repair": "20,000 NGN",
    "Microphone Repair": "20,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "25,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "35,000 NGN",
    "Motherboard Micro-Soldering": "100,000 NGN",
    "Software/Bootloop Flashing": "20,000 NGN",
    "Data Recovery": "75,000 NGN",
    "Network/Carrier Unlocking": "40,000 NGN"
},
"iPhone 14": {
    "Screen Replacement": "110,000 NGN",
    "Glass Only Repair": "50,000 NGN",
    "Back Glass Replacement": "40,000 NGN",
    "Battery Replacement": "25,000 NGN",
    "Charging Port Repair": "20,000 NGN",
    "Wireless Charging Repair": "20,000 NGN",
    "Rear Camera Repair": "60,000 NGN",
    "Front Camera/FaceID Repair": "45,000 NGN",
    "Loudspeaker Repair": "15,000 NGN",
    "Microphone Repair": "15,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "15,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "25,000 NGN",
    "Motherboard Micro-Soldering": "75,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "60,000 NGN",
    "Network/Carrier Unlocking": "30,000 NGN"
},
"iPhone 14 Plus": {
    "Screen Replacement": "120,000 NGN",
    "Glass Only Repair": "55,000 NGN",
    "Back Glass Replacement": "45,000 NGN",
    "Battery Replacement": "26,000 NGN",
    "Charging Port Repair": "20,000 NGN",
    "Wireless Charging Repair": "20,000 NGN",
    "Rear Camera Repair": "65,000 NGN",
    "Front Camera/FaceID Repair": "45,000 NGN",
    "Loudspeaker Repair": "15,000 NGN",
    "Microphone Repair": "15,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "15,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "25,000 NGN",
    "Motherboard Micro-Soldering": "75,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "60,000 NGN",
    "Network/Carrier Unlocking": "30,000 NGN"
},
"iPhone 14 Pro": {
    "Screen Replacement": "140,000 NGN",
    "Glass Only Repair": "65,000 NGN",
    "Back Glass Replacement": "55,000 NGN",
    "Battery Replacement": "28,000 NGN",
    "Charging Port Repair": "20,000 NGN",
    "Wireless Charging Repair": "25,000 NGN",
    "Rear Camera Repair": "75,000 NGN",
    "Front Camera/FaceID Repair": "50,000 NGN",
    "Loudspeaker Repair": "15,000 NGN",
    "Microphone Repair": "15,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "20,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "30,000 NGN",
    "Motherboard Micro-Soldering": "85,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "65,000 NGN",
    "Network/Carrier Unlocking": "35,000 NGN"
},
"iPhone 14 Pro Max": {
    "Screen Replacement": "160,000 NGN",
    "Glass Only Repair": "75,000 NGN",
    "Back Glass Replacement": "65,000 NGN",
    "Battery Replacement": "30,000 NGN",
    "Charging Port Repair": "25,000 NGN",
    "Wireless Charging Repair": "25,000 NGN",
    "Rear Camera Repair": "85,000 NGN",
    "Front Camera/FaceID Repair": "55,000 NGN",
    "Loudspeaker Repair": "20,000 NGN",
    "Microphone Repair": "20,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "20,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "30,000 NGN",
    "Motherboard Micro-Soldering": "90,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "65,000 NGN",
    "Network/Carrier Unlocking": "35,000 NGN"
},
"iPhone 13 Mini": {
    "Screen Replacement": "85,000 NGN",
    "Glass Only Repair": "40,000 NGN",
    "Back Glass Replacement": "35,000 NGN",
    "Battery Replacement": "22,000 NGN",
    "Charging Port Repair": "15,000 NGN",
    "Wireless Charging Repair": "15,000 NGN",
    "Rear Camera Repair": "50,000 NGN",
    "Front Camera/FaceID Repair": "40,000 NGN",
    "Loudspeaker Repair": "12,000 NGN",
    "Microphone Repair": "12,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "15,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "20,000 NGN",
    "Motherboard Micro-Soldering": "65,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "50,000 NGN",
    "Network/Carrier Unlocking": "25,000 NGN"
},
"iPhone 13": {
    "Screen Replacement": "95,000 NGN",
    "Glass Only Repair": "45,000 NGN",
    "Back Glass Replacement": "35,000 NGN",
    "Battery Replacement": "24,000 NGN",
    "Charging Port Repair": "15,000 NGN",
    "Wireless Charging Repair": "15,000 NGN",
    "Rear Camera Repair": "55,000 NGN",
    "Front Camera/FaceID Repair": "40,000 NGN",
    "Loudspeaker Repair": "12,000 NGN",
    "Microphone Repair": "12,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "15,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "20,000 NGN",
    "Motherboard Micro-Soldering": "70,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "50,000 NGN",
    "Network/Carrier Unlocking": "25,000 NGN"
},
"iPhone 13 Pro": {
    "Screen Replacement": "125,000 NGN",
    "Glass Only Repair": "55,000 NGN",
    "Back Glass Replacement": "45,000 NGN",
    "Battery Replacement": "25,000 NGN",
    "Charging Port Repair": "20,000 NGN",
    "Wireless Charging Repair": "20,000 NGN",
    "Rear Camera Repair": "70,000 NGN",
    "Front Camera/FaceID Repair": "45,000 NGN",
    "Loudspeaker Repair": "15,000 NGN",
    "Microphone Repair": "15,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "15,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "25,000 NGN",
    "Motherboard Micro-Soldering": "80,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "55,000 NGN",
    "Network/Carrier Unlocking": "30,000 NGN"
},
"iPhone 13 Pro Max": {
    "Screen Replacement": "135,000 NGN",
    "Glass Only Repair": "60,000 NGN",
    "Back Glass Replacement": "50,000 NGN",
    "Battery Replacement": "26,000 NGN",
    "Charging Port Repair": "20,000 NGN",
    "Wireless Charging Repair": "20,000 NGN",
    "Rear Camera Repair": "75,000 NGN",
    "Front Camera/FaceID Repair": "45,000 NGN",
    "Loudspeaker Repair": "15,000 NGN",
    "Microphone Repair": "15,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "15,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "25,000 NGN",
    "Motherboard Micro-Soldering": "80,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "55,000 NGN",
    "Network/Carrier Unlocking": "30,000 NGN"
},
"iPhone 12 Mini": {
    "Screen Replacement": "65,000 NGN",
    "Glass Only Repair": "35,000 NGN",
    "Back Glass Replacement": "25,000 NGN",
    "Battery Replacement": "18,000 NGN",
    "Charging Port Repair": "12,000 NGN",
    "Wireless Charging Repair": "12,000 NGN",
    "Rear Camera Repair": "40,000 NGN",
    "Front Camera/FaceID Repair": "35,000 NGN",
    "Loudspeaker Repair": "10,000 NGN",
    "Microphone Repair": "10,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "50,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "40,000 NGN",
    "Network/Carrier Unlocking": "20,000 NGN"
},
"iPhone 12": {
    "Screen Replacement": "70,000 NGN",
    "Glass Only Repair": "35,000 NGN",
    "Back Glass Replacement": "25,000 NGN",
    "Battery Replacement": "18,000 NGN",
    "Charging Port Repair": "12,000 NGN",
    "Wireless Charging Repair": "12,000 NGN",
    "Rear Camera Repair": "45,000 NGN",
    "Front Camera/FaceID Repair": "35,000 NGN",
    "Loudspeaker Repair": "10,000 NGN",
    "Microphone Repair": "10,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "55,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "40,000 NGN",
    "Network/Carrier Unlocking": "20,000 NGN"
},
"iPhone 12 Pro": {
    "Screen Replacement": "85,000 NGN",
    "Glass Only Repair": "40,000 NGN",
    "Back Glass Replacement": "30,000 NGN",
    "Battery Replacement": "20,000 NGN",
    "Charging Port Repair": "15,000 NGN",
    "Wireless Charging Repair": "15,000 NGN",
    "Rear Camera Repair": "55,000 NGN",
    "Front Camera/FaceID Repair": "40,000 NGN",
    "Loudspeaker Repair": "12,000 NGN",
    "Microphone Repair": "12,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "15,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "20,000 NGN",
    "Motherboard Micro-Soldering": "65,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "45,000 NGN",
    "Network/Carrier Unlocking": "25,000 NGN"
},
"iPhone 12 Pro Max": {
    "Screen Replacement": "95,000 NGN",
    "Glass Only Repair": "45,000 NGN",
    "Back Glass Replacement": "35,000 NGN",
    "Battery Replacement": "22,000 NGN",
    "Charging Port Repair": "15,000 NGN",
    "Wireless Charging Repair": "15,000 NGN",
    "Rear Camera Repair": "60,000 NGN",
    "Front Camera/FaceID Repair": "40,000 NGN",
    "Loudspeaker Repair": "12,000 NGN",
    "Microphone Repair": "12,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "15,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "20,000 NGN",
    "Motherboard Micro-Soldering": "70,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "45,000 NGN",
    "Network/Carrier Unlocking": "25,000 NGN"
},
"iPhone 11": {
    "Screen Replacement": "45,000 NGN", // LCD panel, much cheaper than OLED 12/13 series
    "Glass Only Repair": "25,000 NGN",
    "Back Glass Replacement": "20,000 NGN",
    "Battery Replacement": "15,000 NGN",
    "Charging Port Repair": "10,000 NGN",
    "Wireless Charging Repair": "10,000 NGN",
    "Rear Camera Repair": "30,000 NGN",
    "Front Camera/FaceID Repair": "30,000 NGN",
    "Loudspeaker Repair": "8,000 NGN",
    "Microphone Repair": "8,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "45,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "35,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"iPhone 11 Pro": {
    "Screen Replacement": "60,000 NGN",
    "Glass Only Repair": "30,000 NGN",
    "Back Glass Replacement": "25,000 NGN",
    "Battery Replacement": "16,000 NGN",
    "Charging Port Repair": "12,000 NGN",
    "Wireless Charging Repair": "12,000 NGN",
    "Rear Camera Repair": "40,000 NGN",
    "Front Camera/FaceID Repair": "35,000 NGN",
    "Loudspeaker Repair": "10,000 NGN",
    "Microphone Repair": "10,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "50,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "40,000 NGN",
    "Network/Carrier Unlocking": "20,000 NGN"
},
"iPhone 11 Pro Max": {
    "Screen Replacement": "70,000 NGN",
    "Glass Only Repair": "35,000 NGN",
    "Back Glass Replacement": "25,000 NGN",
    "Battery Replacement": "18,000 NGN",
    "Charging Port Repair": "12,000 NGN",
    "Wireless Charging Repair": "12,000 NGN",
    "Rear Camera Repair": "45,000 NGN",
    "Front Camera/FaceID Repair": "35,000 NGN",
    "Loudspeaker Repair": "10,000 NGN",
    "Microphone Repair": "10,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "55,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "40,000 NGN",
    "Network/Carrier Unlocking": "20,000 NGN"
},
"iPhone X": {
    "Screen Replacement": "35,000 NGN",
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "15,000 NGN",
    "Battery Replacement": "12,000 NGN",
    "Charging Port Repair": "8,000 NGN",
    "Wireless Charging Repair": "10,000 NGN",
    "Rear Camera Repair": "20,000 NGN",
    "Front Camera/FaceID Repair": "20,000 NGN",
    "Loudspeaker Repair": "6,000 NGN",
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "8,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "10,000 NGN",
    "Motherboard Micro-Soldering": "30,000 NGN",
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"iPhone XR": {
    "Screen Replacement": "30,000 NGN",
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "15,000 NGN",
    "Battery Replacement": "12,000 NGN",
    "Charging Port Repair": "8,000 NGN",
    "Wireless Charging Repair": "10,000 NGN",
    "Rear Camera Repair": "18,000 NGN",
    "Front Camera/FaceID Repair": "20,000 NGN",
    "Loudspeaker Repair": "6,000 NGN",
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "8,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "10,000 NGN",
    "Motherboard Micro-Soldering": "30,000 NGN",
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"iPhone XS": {
    "Screen Replacement": "38,000 NGN",
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "15,000 NGN",
    "Battery Replacement": "13,000 NGN",
    "Charging Port Repair": "9,000 NGN",
    "Wireless Charging Repair": "10,000 NGN",
    "Rear Camera Repair": "22,000 NGN",
    "Front Camera/FaceID Repair": "22,000 NGN",
    "Loudspeaker Repair": "7,000 NGN",
    "Microphone Repair": "7,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "8,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "12,000 NGN",
    "Motherboard Micro-Soldering": "35,000 NGN",
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"iPhone XS Max": {
    "Screen Replacement": "45,000 NGN",
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "18,000 NGN",
    "Battery Replacement": "14,000 NGN",
    "Charging Port Repair": "10,000 NGN",
    "Wireless Charging Repair": "12,000 NGN",
    "Rear Camera Repair": "25,000 NGN",
    "Front Camera/FaceID Repair": "25,000 NGN",
    "Loudspeaker Repair": "8,000 NGN",
    "Microphone Repair": "8,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "12,000 NGN",
    "Motherboard Micro-Soldering": "35,000 NGN",
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "30,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"iPhone 8": {
    "Screen Replacement": "20,000 NGN",
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "12,000 NGN",
    "Battery Replacement": "9,500 NGN",
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "8,000 NGN",
    "Rear Camera Repair": "12,000 NGN",
    "Front Camera/FaceID Repair": "Contact for Quote", // Uses Touch ID
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "10,000 NGN",
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "20,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"iPhone 8 Plus": {
    "Screen Replacement": "24,000 NGN",
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "12,000 NGN",
    "Battery Replacement": "10,000 NGN",
    "Charging Port Repair": "7,000 NGN",
    "Wireless Charging Repair": "8,000 NGN",
    "Rear Camera Repair": "15,000 NGN",
    "Front Camera/FaceID Repair": "Contact for Quote",
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "7,000 NGN",
    "Fingerprint/Home Button Repair": "10,000 NGN",
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "22,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"iPhone 7": {
    "Screen Replacement": "16,000 NGN",
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "10,000 NGN",
    "Battery Replacement": "8,000 NGN",
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "10,000 NGN",
    "Front Camera/FaceID Repair": "Contact for Quote",
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN",
    "Water Damage Recovery": "7,000 NGN",
    "Motherboard Micro-Soldering": "18,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"iPhone 7 Plus": {
    "Screen Replacement": "18,000 NGN",
    "Glass Only Repair": "9,000 NGN",
    "Back Glass Replacement": "12,000 NGN",
    "Battery Replacement": "8,500 NGN",
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "14,000 NGN",
    "Front Camera/FaceID Repair": "Contact for Quote",
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN",
    "Water Damage Recovery": "7,000 NGN",
    "Motherboard Micro-Soldering": "18,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"iPhone 6s": {
    "Screen Replacement": "13,000 NGN",
    "Glass Only Repair": "6,000 NGN",
    "Back Glass Replacement": "8,000 NGN",
    "Battery Replacement": "7,000 NGN",
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "8,000 NGN",
    "Front Camera/FaceID Repair": "Contact for Quote",
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "5,000 NGN",
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN",
    "Water Damage Recovery": "6,000 NGN",
    "Motherboard Micro-Soldering": "15,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"iPhone 6s Plus": {
    "Screen Replacement": "15,000 NGN",
    "Glass Only Repair": "7,000 NGN",
    "Back Glass Replacement": "9,000 NGN",
    "Battery Replacement": "7,500 NGN",
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "9,000 NGN",
    "Front Camera/FaceID Repair": "Contact for Quote",
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "5,000 NGN",
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN",
    "Water Damage Recovery": "6,000 NGN",
    "Motherboard Micro-Soldering": "15,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"iPhone 6": {
    "Screen Replacement": "11,000 NGN",
    "Glass Only Repair": "5,000 NGN",
    "Back Glass Replacement": "7,000 NGN",
    "Battery Replacement": "6,000 NGN",
    "Charging Port Repair": "4,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "6,000 NGN",
    "Front Camera/FaceID Repair": "Contact for Quote",
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,500 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN",
    "Water Damage Recovery": "5,000 NGN",
    "Motherboard Micro-Soldering": "12,000 NGN",
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "4,000 NGN"
},
"iPhone 6 Plus": {
    "Screen Replacement": "13,000 NGN",
    "Glass Only Repair": "6,000 NGN",
    "Back Glass Replacement": "8,000 NGN",
    "Battery Replacement": "6,500 NGN",
    "Charging Port Repair": "4,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "7,000 NGN",
    "Front Camera/FaceID Repair": "Contact for Quote",
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,500 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN",
    "Water Damage Recovery": "5,000 NGN",
    "Motherboard Micro-Soldering": "12,000 NGN",
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "4,000 NGN"
},
//SAMSUNG DEVICES
//S series
"Galaxy S26": {
    "Screen Replacement": "120,000 NGN",
    "Glass Only Repair": "50,000 NGN",
    "Back Glass Replacement": "40,000 NGN",
    "Battery Replacement": "25,000 NGN",
    "Charging Port Repair": "20,000 NGN",
    "Wireless Charging Repair": "25,000 NGN",
    "Rear Camera Repair": "65,000 NGN",
    "Front Camera/FaceID Repair": "45,000 NGN", // Front Camera/Face Recognition
    "Loudspeaker Repair": "15,000 NGN",
    "Microphone Repair": "15,000 NGN",
    "Headphone Jack Repair": "Contact for Quote", // No physical jack
    "Power/Volume Button Repair": "15,000 NGN",
    "Fingerprint/Home Button Repair": "35,000 NGN", // Ultrasonic Under-display Fingerprint Sensor
    "Water Damage Recovery": "30,000 NGN",
    "Motherboard Micro-Soldering": "85,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "65,000 NGN",
    "Network/Carrier Unlocking": "35,000 NGN"
},
"Galaxy S26+": {
    "Screen Replacement": "140,000 NGN",
    "Glass Only Repair": "55,000 NGN",
    "Back Glass Replacement": "45,000 NGN",
    "Battery Replacement": "28,000 NGN",
    "Charging Port Repair": "20,000 NGN",
    "Wireless Charging Repair": "25,000 NGN",
    "Rear Camera Repair": "70,000 NGN",
    "Front Camera/FaceID Repair": "45,000 NGN",
    "Loudspeaker Repair": "15,000 NGN",
    "Microphone Repair": "15,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "15,000 NGN",
    "Fingerprint/Home Button Repair": "35,000 NGN",
    "Water Damage Recovery": "30,000 NGN",
    "Motherboard Micro-Soldering": "90,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "65,000 NGN",
    "Network/Carrier Unlocking": "35,000 NGN"
},
"Galaxy S26 Ultra": {
    "Screen Replacement": "185,000 NGN", // Privacy Display panel
    "Glass Only Repair": "75,000 NGN",
    "Back Glass Replacement": "55,000 NGN",
    "Battery Replacement": "32,000 NGN",
    "Charging Port Repair": "25,000 NGN",
    "Wireless Charging Repair": "30,000 NGN",
    "Rear Camera Repair": "95,000 NGN", // 200MP + Periscope setup
    "Front Camera/FaceID Repair": "55,000 NGN",
    "Loudspeaker Repair": "20,000 NGN",
    "Microphone Repair": "20,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "20,000 NGN",
    "Fingerprint/Home Button Repair": "40,000 NGN",
    "Water Damage Recovery": "35,000 NGN",
    "Motherboard Micro-Soldering": "110,000 NGN",
    "Software/Bootloop Flashing": "20,000 NGN",
    "Data Recovery": "75,000 NGN",
    "Network/Carrier Unlocking": "40,000 NGN"
},
"Galaxy S25": {
    "Screen Replacement": "105,000 NGN",
    "Glass Only Repair": "45,000 NGN",
    "Back Glass Replacement": "35,000 NGN",
    "Battery Replacement": "22,000 NGN",
    "Charging Port Repair": "15,000 NGN",
    "Wireless Charging Repair": "20,000 NGN",
    "Rear Camera Repair": "55,000 NGN",
    "Front Camera/FaceID Repair": "40,000 NGN",
    "Loudspeaker Repair": "12,000 NGN",
    "Microphone Repair": "12,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "30,000 NGN",
    "Water Damage Recovery": "25,000 NGN",
    "Motherboard Micro-Soldering": "75,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "60,000 NGN",
    "Network/Carrier Unlocking": "30,000 NGN"
},
"Galaxy S25+": {
    "Screen Replacement": "125,000 NGN",
    "Glass Only Repair": "50,000 NGN",
    "Back Glass Replacement": "40,000 NGN",
    "Battery Replacement": "25,000 NGN",
    "Charging Port Repair": "15,000 NGN",
    "Wireless Charging Repair": "20,000 NGN",
    "Rear Camera Repair": "60,000 NGN",
    "Front Camera/FaceID Repair": "40,000 NGN",
    "Loudspeaker Repair": "12,000 NGN",
    "Microphone Repair": "12,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "30,000 NGN",
    "Water Damage Recovery": "25,000 NGN",
    "Motherboard Micro-Soldering": "80,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "60,000 NGN",
    "Network/Carrier Unlocking": "30,000 NGN"
},
"Galaxy S25 Ultra": {
    "Screen Replacement": "165,000 NGN",
    "Glass Only Repair": "65,000 NGN",
    "Back Glass Replacement": "45,000 NGN",
    "Battery Replacement": "28,000 NGN",
    "Charging Port Repair": "20,000 NGN",
    "Wireless Charging Repair": "25,000 NGN",
    "Rear Camera Repair": "85,000 NGN",
    "Front Camera/FaceID Repair": "45,000 NGN",
    "Loudspeaker Repair": "15,000 NGN",
    "Microphone Repair": "15,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "15,000 NGN",
    "Fingerprint/Home Button Repair": "35,000 NGN",
    "Water Damage Recovery": "30,000 NGN",
    "Motherboard Micro-Soldering": "95,000 NGN",
    "Software/Bootloop Flashing": "20,000 NGN",
    "Data Recovery": "70,000 NGN",
    "Network/Carrier Unlocking": "35,000 NGN"
},
"Galaxy S24": {
    "Screen Replacement": "90,000 NGN",
    "Glass Only Repair": "40,000 NGN",
    "Back Glass Replacement": "30,000 NGN",
    "Battery Replacement": "18,000 NGN",
    "Charging Port Repair": "12,000 NGN",
    "Wireless Charging Repair": "15,000 NGN",
    "Rear Camera Repair": "45,000 NGN",
    "Front Camera/FaceID Repair": "35,000 NGN",
    "Loudspeaker Repair": "10,000 NGN",
    "Microphone Repair": "10,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "25,000 NGN",
    "Water Damage Recovery": "20,000 NGN",
    "Motherboard Micro-Soldering": "65,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "50,000 NGN",
    "Network/Carrier Unlocking": "25,000 NGN"
},
"Galaxy S24+": {
    "Screen Replacement": "110,000 NGN",
    "Glass Only Repair": "45,000 NGN",
    "Back Glass Replacement": "35,000 NGN",
    "Battery Replacement": "20,000 NGN",
    "Charging Port Repair": "12,000 NGN",
    "Wireless Charging Repair": "15,000 NGN",
    "Rear Camera Repair": "50,000 NGN",
    "Front Camera/FaceID Repair": "35,000 NGN",
    "Loudspeaker Repair": "10,000 NGN",
    "Microphone Repair": "10,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "25,000 NGN",
    "Water Damage Recovery": "20,000 NGN",
    "Motherboard Micro-Soldering": "70,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "50,000 NGN",
    "Network/Carrier Unlocking": "25,000 NGN"
},
"Galaxy S24 Ultra": {
    "Screen Replacement": "145,000 NGN",
    "Glass Only Repair": "55,000 NGN",
    "Back Glass Replacement": "40,000 NGN",
    "Battery Replacement": "24,000 NGN",
    "Charging Port Repair": "15,000 NGN",
    "Wireless Charging Repair": "20,000 NGN",
    "Rear Camera Repair": "75,000 NGN",
    "Front Camera/FaceID Repair": "40,000 NGN",
    "Loudspeaker Repair": "12,000 NGN",
    "Microphone Repair": "12,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "15,000 NGN",
    "Fingerprint/Home Button Repair": "30,000 NGN",
    "Water Damage Recovery": "25,000 NGN",
    "Motherboard Micro-Soldering": "85,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "60,000 NGN",
    "Network/Carrier Unlocking": "30,000 NGN"
},
"Galaxy S23": {
    "Screen Replacement": "80,000 NGN",
    "Glass Only Repair": "35,000 NGN",
    "Back Glass Replacement": "25,000 NGN",
    "Battery Replacement": "16,000 NGN",
    "Charging Port Repair": "10,000 NGN",
    "Wireless Charging Repair": "12,000 NGN",
    "Rear Camera Repair": "40,000 NGN",
    "Front Camera/FaceID Repair": "30,000 NGN",
    "Loudspeaker Repair": "8,000 NGN",
    "Microphone Repair": "8,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "22,000 NGN",
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "55,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "45,000 NGN",
    "Network/Carrier Unlocking": "20,000 NGN"
},
"Galaxy S23+": {
    "Screen Replacement": "95,000 NGN",
    "Glass Only Repair": "40,000 NGN",
    "Back Glass Replacement": "30,000 NGN",
    "Battery Replacement": "18,000 NGN",
    "Charging Port Repair": "10,000 NGN",
    "Wireless Charging Repair": "12,000 NGN",
    "Rear Camera Repair": "45,000 NGN",
    "Front Camera/FaceID Repair": "30,000 NGN",
    "Loudspeaker Repair": "8,000 NGN",
    "Microphone Repair": "8,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "22,000 NGN",
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "60,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "45,000 NGN",
    "Network/Carrier Unlocking": "20,000 NGN"
},
"Galaxy S23 Ultra": {
    "Screen Replacement": "130,000 NGN",
    "Glass Only Repair": "50,000 NGN",
    "Back Glass Replacement": "35,000 NGN",
    "Battery Replacement": "20,000 NGN",
    "Charging Port Repair": "12,000 NGN",
    "Wireless Charging Repair": "15,000 NGN",
    "Rear Camera Repair": "65,000 NGN",
    "Front Camera/FaceID Repair": "35,000 NGN",
    "Loudspeaker Repair": "10,000 NGN",
    "Microphone Repair": "10,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "25,000 NGN",
    "Water Damage Recovery": "20,000 NGN",
    "Motherboard Micro-Soldering": "75,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "50,000 NGN",
    "Network/Carrier Unlocking": "25,000 NGN"
},
"Galaxy S22": {
    "Screen Replacement": "70,000 NGN",
    "Glass Only Repair": "30,000 NGN",
    "Back Glass Replacement": "20,000 NGN",
    "Battery Replacement": "14,000 NGN",
    "Charging Port Repair": "10,000 NGN",
    "Wireless Charging Repair": "10,000 NGN",
    "Rear Camera Repair": "35,000 NGN",
    "Front Camera/FaceID Repair": "25,000 NGN",
    "Loudspeaker Repair": "7,000 NGN",
    "Microphone Repair": "7,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN",
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "45,000 NGN",
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "40,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Galaxy S22+": {
    "Screen Replacement": "80,000 NGN",
    "Glass Only Repair": "35,000 NGN",
    "Back Glass Replacement": "25,000 NGN",
    "Battery Replacement": "15,000 NGN",
    "Charging Port Repair": "10,000 NGN",
    "Wireless Charging Repair": "10,000 NGN",
    "Rear Camera Repair": "40,000 NGN",
    "Front Camera/FaceID Repair": "25,000 NGN",
    "Loudspeaker Repair": "7,000 NGN",
    "Microphone Repair": "7,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN",
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "50,000 NGN",
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "40,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Galaxy S22 Ultra": {
    "Screen Replacement": "110,000 NGN",
    "Glass Only Repair": "45,000 NGN",
    "Back Glass Replacement": "30,000 NGN",
    "Battery Replacement": "16,000 NGN",
    "Charging Port Repair": "12,000 NGN",
    "Wireless Charging Repair": "12,000 NGN",
    "Rear Camera Repair": "55,000 NGN",
    "Front Camera/FaceID Repair": "30,000 NGN",
    "Loudspeaker Repair": "8,000 NGN",
    "Microphone Repair": "8,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "22,000 NGN",
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "65,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "45,000 NGN",
    "Network/Carrier Unlocking": "20,000 NGN"
},
"Galaxy S21": {
    "Screen Replacement": "60,000 NGN", // Plastic back panel helps lower dynamic repair risk, but AMOLED panel is premium
    "Glass Only Repair": "25,000 NGN",
    "Back Glass Replacement": "15,000 NGN", // Polycarbonate (plastic) "Glasstic" back
    "Battery Replacement": "12,000 NGN",
    "Charging Port Repair": "8,000 NGN",
    "Wireless Charging Repair": "10,000 NGN",
    "Rear Camera Repair": "30,000 NGN",
    "Front Camera/FaceID Repair": "20,000 NGN",
    "Loudspeaker Repair": "6,000 NGN",
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "8,000 NGN",
    "Fingerprint/Home Button Repair": "15,000 NGN",
    "Water Damage Recovery": "12,000 NGN",
    "Motherboard Micro-Soldering": "35,000 NGN",
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "35,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Galaxy S21+": {
    "Screen Replacement": "70,000 NGN",
    "Glass Only Repair": "30,000 NGN",
    "Back Glass Replacement": "20,000 NGN", // Uses actual Gorilla Glass Victus
    "Battery Replacement": "13,000 NGN",
    "Charging Port Repair": "8,000 NGN",
    "Wireless Charging Repair": "10,000 NGN",
    "Rear Camera Repair": "35,000 NGN",
    "Front Camera/FaceID Repair": "20,000 NGN",
    "Loudspeaker Repair": "6,000 NGN",
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "8,000 NGN",
    "Fingerprint/Home Button Repair": "15,000 NGN",
    "Water Damage Recovery": "12,000 NGN",
    "Motherboard Micro-Soldering": "40,000 NGN",
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "35,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Galaxy S21 Ultra": {
    "Screen Replacement": "95,000 NGN", // Curved Dynamic AMOLED panel
    "Glass Only Repair": "40,000 NGN",
    "Back Glass Replacement": "25,000 NGN",
    "Battery Replacement": "15,000 NGN",
    "Charging Port Repair": "10,000 NGN",
    "Wireless Charging Repair": "12,000 NGN",
    "Rear Camera Repair": "45,000 NGN", // 108MP + Dual Telephoto setup
    "Front Camera/FaceID Repair": "25,000 NGN",
    "Loudspeaker Repair": "7,000 NGN",
    "Microphone Repair": "7,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN",
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "50,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "40,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Galaxy S20": {
    "Screen Replacement": "50,000 NGN",
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "12,000 NGN",
    "Battery Replacement": "10,000 NGN",
    "Charging Port Repair": "7,000 NGN",
    "Wireless Charging Repair": "8,000 NGN",
    "Rear Camera Repair": "25,000 NGN",
    "Front Camera/FaceID Repair": "15,000 NGN",
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "12,000 NGN",
    "Water Damage Recovery": "10,000 NGN",
    "Motherboard Micro-Soldering": "30,000 NGN",
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "30,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Galaxy S20+": {
    "Screen Replacement": "58,000 NGN",
    "Glass Only Repair": "25,000 NGN",
    "Back Glass Replacement": "15,000 NGN",
    "Battery Replacement": "11,000 NGN",
    "Charging Port Repair": "7,000 NGN",
    "Wireless Charging Repair": "8,000 NGN",
    "Rear Camera Repair": "28,000 NGN",
    "Front Camera/FaceID Repair": "15,000 NGN",
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "12,000 NGN",
    "Water Damage Recovery": "10,000 NGN",
    "Motherboard Micro-Soldering": "35,000 NGN",
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "30,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Galaxy S20 Ultra": {
    "Screen Replacement": "75,000 NGN",
    "Glass Only Repair": "30,000 NGN",
    "Back Glass Replacement": "18,000 NGN",
    "Battery Replacement": "12,000 NGN",
    "Charging Port Repair": "8,000 NGN",
    "Wireless Charging Repair": "10,000 NGN",
    "Rear Camera Repair": "38,000 NGN",
    "Front Camera/FaceID Repair": "20,000 NGN",
    "Loudspeaker Repair": "6,000 NGN",
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "8,000 NGN",
    "Fingerprint/Home Button Repair": "15,000 NGN",
    "Water Damage Recovery": "12,000 NGN",
    "Motherboard Micro-Soldering": "40,000 NGN",
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "35,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Galaxy S10e": {
    "Screen Replacement": "35,000 NGN",
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "10,000 NGN",
    "Battery Replacement": "8,000 NGN",
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "6,000 NGN",
    "Rear Camera Repair": "15,000 NGN",
    "Front Camera/FaceID Repair": "10,000 NGN",
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,500 NGN",
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "10,000 NGN",
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "25,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Galaxy S10": {
    "Screen Replacement": "42,000 NGN",
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "10,000 NGN",
    "Battery Replacement": "8,000 NGN",
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "7,000 NGN",
    "Rear Camera Repair": "18,000 NGN",
    "Front Camera/FaceID Repair": "12,000 NGN",
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,500 NGN",
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "12,000 NGN",
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "25,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Galaxy S10+": {
    "Screen Replacement": "48,000 NGN",
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "12,000 NGN",
    "Battery Replacement": "9,000 NGN",
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "7,000 NGN",
    "Rear Camera Repair": "20,000 NGN",
    "Front Camera/FaceID Repair": "12,000 NGN",
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,500 NGN",
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "12,000 NGN",
    "Water Damage Recovery": "10,000 NGN",
    "Motherboard Micro-Soldering": "30,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Galaxy S10 5G": {
    "Screen Replacement": "55,000 NGN", // Larger 6.7-inch curved panel
    "Glass Only Repair": "22,000 NGN",
    "Back Glass Replacement": "15,000 NGN",
    "Battery Replacement": "10,000 NGN",
    "Charging Port Repair": "7,000 NGN",
    "Wireless Charging Repair": "8,000 NGN",
    "Rear Camera Repair": "25,000 NGN", // Quad setup with TOF sensor
    "Front Camera/FaceID Repair": "15,000 NGN",
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "5,000 NGN",
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "15,000 NGN",
    "Water Damage Recovery": "10,000 NGN",
    "Motherboard Micro-Soldering": "30,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "30,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Galaxy S10 Lite": {
    "Screen Replacement": "38,000 NGN", // Flat Super AMOLED Plus panel
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "10,000 NGN", // Plastic ("Glasstic") back panel
    "Battery Replacement": "9,000 NGN",
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "18,000 NGN",
    "Front Camera/FaceID Repair": "12,000 NGN",
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "Contact for Quote", // Missing physical 3.5mm jack unlike main S10 models
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "15,000 NGN", // Optical under-display sensor
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "25,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Galaxy S9": {
    "Screen Replacement": "28,000 NGN",
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "8,000 NGN",
    "Battery Replacement": "7,000 NGN",
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "5,000 NGN",
    "Rear Camera Repair": "12,000 NGN",
    "Front Camera/FaceID Repair": "10,000 NGN",
    "Loudspeaker Repair": "3,500 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN",
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "20,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Galaxy S9+": {
    "Screen Replacement": "32,000 NGN",
    "Glass Only Repair": "14,000 NGN",
    "Back Glass Replacement": "8,000 NGN",
    "Battery Replacement": "7,500 NGN",
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "5,000 NGN",
    "Rear Camera Repair": "15,000 NGN",
    "Front Camera/FaceID Repair": "10,000 NGN",
    "Loudspeaker Repair": "3,500 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN",
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "22,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Galaxy S8": {
    "Screen Replacement": "24,000 NGN",
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "7,000 NGN",
    "Battery Replacement": "6,500 NGN",
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "5,000 NGN",
    "Rear Camera Repair": "10,000 NGN",
    "Front Camera/FaceID Repair": "8,000 NGN",
    "Loudspeaker Repair": "3,500 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN",
    "Water Damage Recovery": "7,000 NGN",
    "Motherboard Micro-Soldering": "18,000 NGN",
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Galaxy S8+": {
    "Screen Replacement": "26,000 NGN",
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "7,000 NGN",
    "Battery Replacement": "7,000 NGN",
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "5,000 NGN",
    "Rear Camera Repair": "12,000 NGN",
    "Front Camera/FaceID Repair": "8,000 NGN",
    "Loudspeaker Repair": "3,500 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN",
    "Water Damage Recovery": "7,000 NGN",
    "Motherboard Micro-Soldering": "18,000 NGN",
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Galaxy S8 Active": {
    "Screen Replacement": "30,000 NGN", // Flat shattered-resistant screen panel, slightly scarcer part
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "Contact for Quote", // Tough plastic/rubberized textured back armor instead of glass
    "Battery Replacement": "8,000 NGN", // Larger 4,000 mAh cell
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "6,000 NGN",
    "Rear Camera Repair": "12,000 NGN",
    "Front Camera/FaceID Repair": "8,000 NGN",
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN",
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "20,000 NGN",
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
// Z series
"Galaxy Z Flip 7": {
    "Screen Replacement": "170,000 NGN", // Main foldable inner display panel
    "Glass Only Repair": "Contact for Quote", // Extreme complexity on foldable UTG (Ultra Thin Glass)
    "Cover Screen Replacement": "45,000 NGN", // Outer display panel
    "Back Glass Replacement": "35,000 NGN",
    "Battery Replacement": "25,000 NGN", // Dual-cell battery system setup
    "Charging Port Repair": "20,000 NGN",
    "Wireless Charging Repair": "20,000 NGN",
    "Rear Camera Repair": "60,000 NGN",
    "Front Camera/FaceID Repair": "40,000 NGN",
    "Loudspeaker Repair": "15,000 NGN",
    "Microphone Repair": "15,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "15,000 NGN",
    "Fingerprint/Home Button Repair": "30,000 NGN", // Side-mounted capacitive sensor
    "Hinge Mechanism Repair/Realignment": "65,000 NGN", // Specific to foldables
    "Water Damage Recovery": "35,000 NGN",
    "Motherboard Micro-Soldering": "95,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "70,000 NGN",
    "Network/Carrier Unlocking": "35,000 NGN"
},
"Galaxy Z Flip 6": {
    "Screen Replacement": "155,000 NGN",
    "Glass Only Repair": "Contact for Quote",
    "Cover Screen Replacement": "40,000 NGN",
    "Back Glass Replacement": "30,000 NGN",
    "Battery Replacement": "22,000 NGN",
    "Charging Port Repair": "15,000 NGN",
    "Wireless Charging Repair": "18,000 NGN",
    "Rear Camera Repair": "55,000 NGN",
    "Front Camera/FaceID Repair": "35,000 NGN",
    "Loudspeaker Repair": "12,000 NGN",
    "Microphone Repair": "12,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "25,000 NGN",
    "Hinge Mechanism Repair/Realignment": "55,000 NGN",
    "Water Damage Recovery": "30,000 NGN",
    "Motherboard Micro-Soldering": "85,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "65,000 NGN",
    "Network/Carrier Unlocking": "30,000 NGN"
},
"Galaxy Z Flip 5": {
    "Screen Replacement": "140,000 NGN",
    "Glass Only Repair": "Contact for Quote",
    "Cover Screen Replacement": "38,000 NGN",
    "Back Glass Replacement": "25,000 NGN",
    "Battery Replacement": "20,000 NGN",
    "Charging Port Repair": "15,000 NGN",
    "Wireless Charging Repair": "15,000 NGN",
    "Rear Camera Repair": "45,000 NGN",
    "Front Camera/FaceID Repair": "30,000 NGN",
    "Loudspeaker Repair": "10,000 NGN",
    "Microphone Repair": "10,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "22,000 NGN",
    "Hinge Mechanism Repair/Realignment": "50,000 NGN",
    "Water Damage Recovery": "25,000 NGN",
    "Motherboard Micro-Soldering": "75,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "55,000 NGN",
    "Network/Carrier Unlocking": "25,000 NGN"
},
"Galaxy Z Flip 4": {
    "Screen Replacement": "120,000 NGN",
    "Glass Only Repair": "Contact for Quote",
    "Cover Screen Replacement": "25,000 NGN", // Smaller cover display than Flip 5/6/7
    "Back Glass Replacement": "20,000 NGN",
    "Battery Replacement": "18,000 NGN",
    "Charging Port Repair": "12,000 NGN",
    "Wireless Charging Repair": "15,000 NGN",
    "Rear Camera Repair": "40,000 NGN",
    "Front Camera/FaceID Repair": "25,000 NGN",
    "Loudspeaker Repair": "10,000 NGN",
    "Microphone Repair": "10,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "20,000 NGN",
    "Hinge Mechanism Repair/Realignment": "45,000 NGN",
    "Water Damage Recovery": "25,000 NGN",
    "Motherboard Micro-Soldering": "65,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "50,000 NGN",
    "Network/Carrier Unlocking": "20,000 NGN"
},
"Galaxy Z Flip 3": {
    "Screen Replacement": "105,000 NGN",
    "Glass Only Repair": "Contact for Quote",
    "Cover Screen Replacement": "22,000 NGN",
    "Back Glass Replacement": "18,000 NGN",
    "Battery Replacement": "16,000 NGN",
    "Charging Port Repair": "12,000 NGN",
    "Wireless Charging Repair": "12,000 NGN",
    "Rear Camera Repair": "35,000 NGN",
    "Front Camera/FaceID Repair": "25,000 NGN",
    "Loudspeaker Repair": "8,000 NGN",
    "Microphone Repair": "8,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN",
    "Hinge Mechanism Repair/Realignment": "40,000 NGN",
    "Water Damage Recovery": "20,000 NGN",
    "Motherboard Micro-Soldering": "55,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "45,000 NGN",
    "Network/Carrier Unlocking": "20,000 NGN"
},
"Galaxy Z Fold 7": {
    "Screen Replacement": "250,000 NGN", // Massive inner folding panel
    "Glass Only Repair": "Contact for Quote",
    "Cover Screen Replacement": "60,000 NGN", // Outer display panel
    "Back Glass Replacement": "45,000 NGN",
    "Battery Replacement": "35,000 NGN", // Dual-cell battery replacement
    "Charging Port Repair": "25,000 NGN",
    "Wireless Charging Repair": "25,000 NGN",
    "Rear Camera Repair": "85,000 NGN", // Premium multi-sensor array
    "Front Camera/FaceID Repair": "50,000 NGN", // Under-display inner camera + cover camera
    "Loudspeaker Repair": "20,000 NGN",
    "Microphone Repair": "20,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "20,000 NGN",
    "Fingerprint/Home Button Repair": "35,000 NGN", // Side-mounted capacitive sensor
    "Hinge Mechanism Repair/Realignment": "85,000 NGN", // Large form-factor hinge setup
    "Water Damage Recovery": "40,000 NGN",
    "Motherboard Micro-Soldering": "120,000 NGN",
    "Software/Bootloop Flashing": "20,000 NGN",
    "Data Recovery": "80,000 NGN",
    "Network/Carrier Unlocking": "40,000 NGN"
},
"Galaxy Z Fold 6": {
    "Screen Replacement": "230,000 NGN",
    "Glass Only Repair": "Contact for Quote",
    "Cover Screen Replacement": "55,000 NGN",
    "Back Glass Replacement": "40,000 NGN",
    "Battery Replacement": "30,000 NGN",
    "Charging Port Repair": "20,000 NGN",
    "Wireless Charging Repair": "22,000 NGN",
    "Rear Camera Repair": "75,000 NGN",
    "Front Camera/FaceID Repair": "45,000 NGN",
    "Loudspeaker Repair": "18,000 NGN",
    "Microphone Repair": "18,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "15,000 NGN",
    "Fingerprint/Home Button Repair": "30,000 NGN",
    "Hinge Mechanism Repair/Realignment": "75,000 NGN",
    "Water Damage Recovery": "35,000 NGN",
    "Motherboard Micro-Soldering": "110,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "75,000 NGN",
    "Network/Carrier Unlocking": "35,000 NGN"
},
"Galaxy Z Fold 5": {
    "Screen Replacement": "210,000 NGN",
    "Glass Only Repair": "Contact for Quote",
    "Cover Screen Replacement": "50,000 NGN",
    "Back Glass Replacement": "35,000 NGN",
    "Battery Replacement": "28,000 NGN",
    "Charging Port Repair": "20,000 NGN",
    "Wireless Charging Repair": "20,000 NGN",
    "Rear Camera Repair": "65,000 NGN",
    "Front Camera/FaceID Repair": "40,000 NGN",
    "Loudspeaker Repair": "15,000 NGN",
    "Microphone Repair": "15,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "15,000 NGN",
    "Fingerprint/Home Button Repair": "25,000 NGN",
    "Hinge Mechanism Repair/Realignment": "65,000 NGN",
    "Water Damage Recovery": "30,000 NGN",
    "Motherboard Micro-Soldering": "95,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "70,000 NGN",
    "Network/Carrier Unlocking": "30,000 NGN"
},
"Galaxy Z Fold 4": {
    "Screen Replacement": "185,000 NGN",
    "Glass Only Repair": "Contact for Quote",
    "Cover Screen Replacement": "45,000 NGN",
    "Back Glass Replacement": "30,000 NGN",
    "Battery Replacement": "25,000 NGN",
    "Charging Port Repair": "15,000 NGN",
    "Wireless Charging Repair": "18,000 NGN",
    "Rear Camera Repair": "55,000 NGN",
    "Front Camera/FaceID Repair": "35,000 NGN",
    "Loudspeaker Repair": "12,000 NGN",
    "Microphone Repair": "12,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "22,000 NGN",
    "Hinge Mechanism Repair/Realignment": "55,000 NGN",
    "Water Damage Recovery": "25,000 NGN",
    "Motherboard Micro-Soldering": "85,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "60,000 NGN",
    "Network/Carrier Unlocking": "25,000 NGN"
},
"Galaxy Z Fold 3": {
    "Screen Replacement": "160,000 NGN",
    "Glass Only Repair": "Contact for Quote",
    "Cover Screen Replacement": "40,000 NGN",
    "Back Glass Replacement": "25,000 NGN",
    "Battery Replacement": "22,000 NGN",
    "Charging Port Repair": "15,000 NGN",
    "Wireless Charging Repair": "15,000 NGN",
    "Rear Camera Repair": "45,000 NGN",
    "Front Camera/FaceID Repair": "35,000 NGN",
    "Loudspeaker Repair": "12,000 NGN",
    "Microphone Repair": "12,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "20,000 NGN",
    "Hinge Mechanism Repair/Realignment": "50,000 NGN",
    "Water Damage Recovery": "25,000 NGN",
    "Motherboard Micro-Soldering": "75,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "55,000 NGN",
    "Network/Carrier Unlocking": "25,000 NGN"
},
//A series
"Galaxy A06": {
    "Screen Replacement": "28,000 NGN", // PLS LCD panel
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "7,000 NGN", // Plastic textured back panel
    "Battery Replacement": "10,000 NGN", // 5000mAh standard budget battery
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "14,000 NGN",
    "Front Camera/FaceID Repair": "8,000 NGN",
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Has dedicated 3.5mm jack
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN", // Side-mounted capacitive sensor
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "20,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Galaxy A06 (4G)": {
    "Screen Replacement": "28,000 NGN", // PLS LCD panel
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "7,000 NGN", // Plastic textured back panel
    "Battery Replacement": "10,000 NGN", // 5000mAh standard budget battery
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "14,000 NGN",
    "Front Camera/FaceID Repair": "8,000 NGN",
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Has dedicated 3.5mm jack
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN", // Side-mounted capacitive sensor
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "20,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Galaxy A06 5G": {
    "Screen Replacement": "32,000 NGN", // 90Hz PLS LCD panel, slightly higher part cost
    "Glass Only Repair": "14,000 NGN",
    "Back Glass Replacement": "7,000 NGN", // Plastic back panel
    "Battery Replacement": "10,000 NGN", // 5000mAh standard budget battery
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "15,000 NGN",
    "Front Camera/FaceID Repair": "8,000 NGN",
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Has dedicated 3.5mm jack
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN", // Side-mounted capacitive sensor
    "Water Damage Recovery": "10,000 NGN", // Slightly higher due to 5G board complexity / IP54 seal
    "Motherboard Micro-Soldering": "25,000 NGN", // Dimensity 6300 platform architecture
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Galaxy A05": {
    "Screen Replacement": "25,000 NGN",
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "6,000 NGN",
    "Battery Replacement": "9,000 NGN",
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "12,000 NGN",
    "Front Camera/FaceID Repair": "8,000 NGN",
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "18,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Galaxy A05s": {
    "Screen Replacement": "25,000 NGN",
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "6,000 NGN",
    "Battery Replacement": "9,000 NGN",
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "12,000 NGN",
    "Front Camera/FaceID Repair": "8,000 NGN",
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN",
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "18,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Galaxy A04": {
    "Screen Replacement": "22,000 NGN",
    "Glass Only Repair": "9,000 NGN",
    "Back Glass Replacement": "5,000 NGN",
    "Battery Replacement": "8,500 NGN",
    "Charging Port Repair": "4,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "10,000 NGN",
    "Front Camera/FaceID Repair": "7,000 NGN",
    "Loudspeaker Repair": "3,500 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,500 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "7,000 NGN",
    "Motherboard Micro-Soldering": "15,000 NGN",
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Galaxy A04s": {
    "Screen Replacement": "22,000 NGN",
    "Glass Only Repair": "9,000 NGN",
    "Back Glass Replacement": "5,000 NGN",
    "Battery Replacement": "8,500 NGN",
    "Charging Port Repair": "4,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "10,000 NGN",
    "Front Camera/FaceID Repair": "7,000 NGN",
    "Loudspeaker Repair": "3,500 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,500 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN",
    "Water Damage Recovery": "7,000 NGN",
    "Motherboard Micro-Soldering": "15,000 NGN",
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Galaxy A04e": {
    "Screen Replacement": "22,000 NGN",
    "Glass Only Repair": "9,000 NGN",
    "Back Glass Replacement": "5,000 NGN",
    "Battery Replacement": "8,500 NGN",
    "Charging Port Repair": "4,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "10,000 NGN",
    "Front Camera/FaceID Repair": "7,000 NGN",
    "Loudspeaker Repair": "3,500 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,500 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "7,000 NGN",
    "Motherboard Micro-Soldering": "15,000 NGN",
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Galaxy A03": {
    "Screen Replacement": "18,000 NGN",
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "5,000 NGN",
    "Battery Replacement": "8,000 NGN",
    "Charging Port Repair": "4,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "8,000 NGN",
    "Front Camera/FaceID Repair": "6,000 NGN",
    "Loudspeaker Repair": "3,000 NGN",
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "3,500 NGN",
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "6,000 NGN",
    "Motherboard Micro-Soldering": "12,000 NGN",
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "4,000 NGN"
},
"Galaxy A03s": {
    "Screen Replacement": "18,000 NGN",
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "5,000 NGN",
    "Battery Replacement": "8,000 NGN",
    "Charging Port Repair": "4,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "8,000 NGN",
    "Front Camera/FaceID Repair": "6,000 NGN",
    "Loudspeaker Repair": "3,000 NGN",
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "3,500 NGN",
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN",
    "Water Damage Recovery": "6,000 NGN",
    "Motherboard Micro-Soldering": "12,000 NGN",
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "4,000 NGN"
},
"Galaxy A03 Core": {
    "Screen Replacement": "18,000 NGN",
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "5,000 NGN",
    "Battery Replacement": "8,000 NGN",
    "Charging Port Repair": "4,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "8,000 NGN",
    "Front Camera/FaceID Repair": "6,000 NGN",
    "Loudspeaker Repair": "3,000 NGN",
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "3,500 NGN",
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "Contact for Quote",
    "Water Damage Recovery": "6,000 NGN",
    "Motherboard Micro-Soldering": "12,000 NGN",
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "4,000 NGN"
},
"Galaxy A56 5G": {
    "Screen Replacement": "85,000 NGN", // Premium 120Hz Super AMOLED panel with Gorilla Glass Victus+
    "Glass Only Repair": "35,000 NGN",
    "Back Glass Replacement": "18,000 NGN", // Gorilla Glass Victus+ rear panel
    "Battery Replacement": "15,000 NGN", // 5000mAh cell with 45W charging hardware
    "Charging Port Repair": "10,000 NGN",
    "Wireless Charging Repair": "Contact for Quote", // No native wireless charging
    "Rear Camera Repair": "35,000 NGN", // 50MP OIS primary sensor setup
    "Front Camera/FaceID Repair": "15,000 NGN",
    "Loudspeaker Repair": "7,000 NGN",
    "Microphone Repair": "7,000 NGN",
    "Headphone Jack Repair": "Contact for Quote", // No 3.5mm jack
    "Power/Volume Button Repair": "8,000 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN", // Under-display optical fingerprint sensor
    "Water Damage Recovery": "15,000 NGN", // IP67 structural seal
    "Motherboard Micro-Soldering": "45,000 NGN", // Exynos 1580 platform architecture
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "35,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Galaxy A55 5G": {
    "Screen Replacement": "75,000 NGN", // 120Hz Super AMOLED panel
    "Glass Only Repair": "30,000 NGN",
    "Back Glass Replacement": "15,000 NGN", // Gorilla Glass rear panel
    "Battery Replacement": "12,000 NGN", // 5000mAh cell
    "Charging Port Repair": "8,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "30,000 NGN",
    "Front Camera/FaceID Repair": "14,000 NGN",
    "Loudspeaker Repair": "6,000 NGN",
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "7,000 NGN",
    "Fingerprint/Home Button Repair": "15,000 NGN", // Under-display optical sensor
    "Water Damage Recovery": "12,000 NGN", // IP67 dust/water resistance structure
    "Motherboard Micro-Soldering": "40,000 NGN", // Exynos 1480 platform
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "30,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Galaxy A54 5G": {
    "Screen Replacement": "65,000 NGN", // 120Hz Super AMOLED panel
    "Glass Only Repair": "25,000 NGN",
    "Back Glass Replacement": "12,000 NGN", // Gorilla Glass 5 rear panel
    "Battery Replacement": "10,000 NGN", // 5000mAh cell
    "Charging Port Repair": "8,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "25,000 NGN",
    "Front Camera/FaceID Repair": "12,000 NGN",
    "Loudspeaker Repair": "6,000 NGN",
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "Contact for Quote",
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "15,000 NGN", // Under-display optical sensor
    "Water Damage Recovery": "12,000 NGN", // IP67 dust/water resistance structure
    "Motherboard Micro-Soldering": "35,000 NGN", // Exynos 1380 platform
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Galaxy A51": {
    "Screen Replacement": "42,000 NGN", // 60Hz Super AMOLED panel
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "7,000 NGN", // "Glasstic" glossy plastic back
    "Battery Replacement": "8,000 NGN", // 4000mAh battery cell
    "Charging Port Repair": "5,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "18,000 NGN",
    "Front Camera/FaceID Repair": "9,000 NGN",
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "10,000 NGN", // Early under-display optical sensor
    "Water Damage Recovery": "8,000 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "25,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Galaxy A53 5G": {
    "Screen Replacement": "55,000 NGN", // 120Hz Super AMOLED display
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "8,000 NGN", // Plastic matte panel
    "Battery Replacement": "9,500 NGN", // 5000mAh standard cell
    "Charging Port Repair": "7,000 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "22,000 NGN",
    "Front Camera/FaceID Repair": "10,000 NGN",
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "Contact for Quote", // Lacks dedicated 3.5mm jack
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "12,000 NGN", // Under-display optical sensor
    "Water Damage Recovery": "10,000 NGN", // IP67 structural seal
    "Motherboard Micro-Soldering": "30,000 NGN", // Exynos 1280 platform
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Galaxy A52 (4G)": {
    "Screen Replacement": "48,000 NGN", // 90Hz Super AMOLED display
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "8,000 NGN", // Plastic rear panel
    "Battery Replacement": "8,500 NGN", // 4500mAh battery cell
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "20,000 NGN",
    "Front Camera/FaceID Repair": "10,000 NGN",
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "4,500 NGN", // 3.5mm headphone jack
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "12,000 NGN", // Under-display optical sensor
    "Water Damage Recovery": "10,000 NGN", // IP67 structural protection
    "Motherboard Micro-Soldering": "25,000 NGN", // Snapdragon 720G platform
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Galaxy A52 5G": {
    "Screen Replacement": "52,000 NGN", // 120Hz Super AMOLED panel (higher refresh rate part cost)
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "8,000 NGN",
    "Battery Replacement": "8,500 NGN", 
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "20,000 NGN",
    "Front Camera/FaceID Repair": "10,000 NGN",
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "4,500 NGN",
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "12,000 NGN",
    "Water Damage Recovery": "10,000 NGN",
    "Motherboard Micro-Soldering": "28,000 NGN", // Snapdragon 750G 5G architecture
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Galaxy A52s 5G": {
    "Screen Replacement": "54,000 NGN", // 120Hz Premium Super AMOLED panel
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "8,000 NGN",
    "Battery Replacement": "8,500 NGN",
    "Charging Port Repair": "6,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "22,000 NGN",
    "Front Camera/FaceID Repair": "10,000 NGN",
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "4,500 NGN",
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "12,000 NGN",
    "Water Damage Recovery": "10,000 NGN",
    "Motherboard Micro-Soldering": "30,000 NGN", // Snapdragon 778G 5G architecture
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Galaxy A50": {
    "Screen Replacement": "38,000 NGN", // 60Hz Super AMOLED panel
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "6,000 NGN", // "Glasstic" plastic rear panel
    "Battery Replacement": "7,500 NGN", // 4000mAh battery cell
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "15,000 NGN",
    "Front Camera/FaceID Repair": "8,000 NGN",
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Features 3.5mm headphone jack
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "10,000 NGN", // Under-display optical sensor
    "Water Damage Recovery": "7,000 NGN", // Lacks IP rating
    "Motherboard Micro-Soldering": "22,000 NGN", // Exynos 9610 platform
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Galaxy A50s": {
    "Screen Replacement": "38,000 NGN", // 60Hz Super AMOLED panel
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "6,000 NGN", // Geometric "Prism" plastic panel
    "Battery Replacement": "7,500 NGN", // 4000mAh battery cell
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "18,000 NGN", // Upgraded 48MP main sensor module
    "Front Camera/FaceID Repair": "9,000 NGN", // Upgraded 32MP selfie module
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Features 3.5mm headphone jack
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "10,000 NGN", // Under-display optical sensor
    "Water Damage Recovery": "7,000 NGN", // Lacks IP rating
    "Motherboard Micro-Soldering": "22,000 NGN", // Exynos 9611 platform
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Galaxy A36": {
    "Screen Replacement": "72,000 NGN", // 6.7" 120Hz Super AMOLED panel
    "Glass Only Repair": "24,000 NGN",
    "Back Glass Replacement": "14,000 NGN", // Corning Gorilla Glass Victus+ back panel
    "Battery Replacement": "14,000 NGN", // 5000mAh cell with 45W charging support
    "Charging Port Repair": "8,500 NGN", // Upgraded 45W USB Type-C port
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "28,000 NGN", // 50MP triple-camera module with OIS
    "Front Camera/FaceID Repair": "12,000 NGN", // 12MP selfie module
    "Loudspeaker Repair": "6,500 NGN", // Stereo speaker system
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "N/A", // Headphone jack removed on this model
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "16,500 NGN", // Under-display optical sensor
    "Water Damage Recovery": "12,000 NGN", // IP67 dust/water resistance rated
    "Motherboard Micro-Soldering": "42,000 NGN", // Snapdragon 6 Gen 3 platform
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Galaxy A35 5G": {
    "Screen Replacement": "58,000 NGN", // 6.6" 120Hz Super AMOLED panel
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "12,000 NGN", // Gorilla Glass rear panel
    "Battery Replacement": "12,000 NGN", // 5000mAh battery cell
    "Charging Port Repair": "7,500 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "25,000 NGN", // 50MP triple-camera setup with OIS
    "Front Camera/FaceID Repair": "10,000 NGN", // 13MP punch-hole selfie module
    "Loudspeaker Repair": "6,000 NGN", // Stereo speaker system
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "N/A", // Headphone jack removed on this model
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "15,000 NGN", // Under-display optical sensor
    "Water Damage Recovery": "12,000 NGN", // IP67 dust/water resistance structural seal
    "Motherboard Micro-Soldering": "35,000 NGN", // Exynos 1380 platform
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Galaxy A34 5G": {
    "Screen Replacement": "52,000 NGN", // 6.6" 120Hz Super AMOLED panel
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "8,000 NGN", // "Glasstic" plastic rear panel
    "Battery Replacement": "10,000 NGN", // 5000mAh battery cell
    "Charging Port Repair": "7,000 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "22,000 NGN", // 48MP triple-camera setup with OIS
    "Front Camera/FaceID Repair": "10,000 NGN", // 13MP tear-drop notch selfie module
    "Loudspeaker Repair": "5,500 NGN", // Stereo speaker system
    "Microphone Repair": "5,500 NGN",
    "Headphone Jack Repair": "N/A", // Headphone jack removed on this model
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "14,000 NGN", // Under-display optical sensor
    "Water Damage Recovery": "10,000 NGN", // IP67 dust/water resistance structural seal
    "Motherboard Micro-Soldering": "30,000 NGN", // MediaTek Dimensity 1080 platform
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "7,000 NGN"
},
"Galaxy A36": {
    "Screen Replacement": "72,000 NGN", // 6.7" 120Hz Super AMOLED panel
    "Glass Only Repair": "24,000 NGN",
    "Back Glass Replacement": "14,000 NGN", // Corning Gorilla Glass Victus+ back panel
    "Battery Replacement": "14,000 NGN", // 5000mAh cell with 45W charging support
    "Charging Port Repair": "8,500 NGN", // Upgraded 45W USB Type-C port
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "28,000 NGN", // 50MP triple-camera module with OIS
    "Front Camera/FaceID Repair": "12,000 NGN", // 12MP selfie module
    "Loudspeaker Repair": "6,500 NGN", // Stereo speaker system
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "N/A", // Headphone jack removed on this model
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "16,500 NGN", // Under-display optical sensor
    "Water Damage Recovery": "12,000 NGN", // IP67 dust/water resistance rated
    "Motherboard Micro-Soldering": "42,000 NGN", // Snapdragon 6 Gen 3 platform
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Galaxy A33 5G": {
    "Screen Replacement": "46,000 NGN", // 6.4" 90Hz Super AMOLED display
    "Glass Only Repair": "16,000 NGN",
    "Back Glass Replacement": "7,000 NGN", // Matte plastic rear panel
    "Battery Replacement": "9,500 NGN", // 5000mAh standard battery cell
    "Charging Port Repair": "6,500 NGN", // 25W charging rail system
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "20,000 NGN", // 48MP quad-camera module with OIS
    "Front Camera/FaceID Repair": "9,000 NGN", // 13MP selfie module
    "Loudspeaker Repair": "5,000 NGN", // Stereo speaker setup
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "N/A", // Headphone jack removed on this model
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "13,000 NGN", // Under-display optical sensor
    "Water Damage Recovery": "10,000 NGN", // IP67 structural dust/water seal
    "Motherboard Micro-Soldering": "28,000 NGN", // Exynos 1280 5G architecture
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "7,000 NGN"
},
"Galaxy A31": {
    "Screen Replacement": "36,000 NGN", // 60Hz Super AMOLED panel
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "6,000 NGN", // "Glasstic" glossy plastic back panel
    "Battery Replacement": "7,500 NGN", // 5000mAh battery cell
    "Charging Port Repair": "5,000 NGN", // 15W charging rail system
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "15,000 NGN", // 48MP quad-camera setup
    "Front Camera/FaceID Repair": "8,000 NGN", // 20MP selfie module
    "Loudspeaker Repair": "4,000 NGN", // Mono speaker system
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Features dedicated 3.5mm jack
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "10,000 NGN", // Under-display optical sensor
    "Water Damage Recovery": "7,000 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "22,000 NGN", // MediaTek Helio P65 platform
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Galaxy A32 (4G)": {
    "Screen Replacement": "40,000 NGN", // 90Hz Super AMOLED panel
    "Glass Only Repair": "14,000 NGN",
    "Back Glass Replacement": "6,000 NGN", // "Glasstic" plastic rear panel
    "Battery Replacement": "8,000 NGN", // 5000mAh standard battery cell
    "Charging Port Repair": "5,500 NGN", // 15W charging rail system
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "18,000 NGN", // 64MP primary sensor array
    "Front Camera/FaceID Repair": "8,500 NGN", // 20MP selfie module
    "Loudspeaker Repair": "4,500 NGN", // Mono speaker system
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Features dedicated 3.5mm jack
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "11,000 NGN", // Under-display optical sensor
    "Water Damage Recovery": "7,000 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "24,000 NGN", // MediaTek Helio G80 platform
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Galaxy A32 5G": {
    "Screen Replacement": "36,000 NGN", // 60Hz TFT LCD panel (lower component cost than AMOLED)
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "6,000 NGN", // Glossy plastic rear panel
    "Battery Replacement": "8,000 NGN", // 5000mAh standard battery cell
    "Charging Port Repair": "5,500 NGN", // 15W charging rail system
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "16,000 NGN", // 48MP primary sensor array
    "Front Camera/FaceID Repair": "8,000 NGN", // 13MP teardrop notch selfie module
    "Loudspeaker Repair": "4,500 NGN", // Mono speaker system
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Features dedicated 3.5mm jack
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "9,000 NGN", // Side-mounted power button sensor
    "Water Damage Recovery": "7,000 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "24,000 NGN", // MediaTek Dimensity 720 platform
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Galaxy A30": {
    "Screen Replacement": "34,000 NGN", // 60Hz Super AMOLED panel
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "5,500 NGN", // Glossy plastic back cover
    "Battery Replacement": "7,000 NGN", // 4000mAh battery cell
    "Charging Port Repair": "5,000 NGN", // 15W charging rail system
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "14,000 NGN", // 16MP main dual-sensor setup
    "Front Camera/FaceID Repair": "7,500 NGN", // 16MP selfie module
    "Loudspeaker Repair": "4,000 NGN", // Mono speaker system
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Features dedicated 3.5mm jack
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "8,500 NGN", // Rear-mounted hardware sensor
    "Water Damage Recovery": "7,000 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "20,000 NGN", // Exynos 7904 platform
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Galaxy A30s": {
    "Screen Replacement": "34,000 NGN", // 60Hz Super AMOLED panel
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "5,500 NGN", // Geometric "Prism" pattern plastic back cover
    "Battery Replacement": "7,000 NGN", // 4000mAh battery cell
    "Charging Port Repair": "5,000 NGN", // 15W charging rail system
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "15,000 NGN", // Upgraded 25MP main triple-sensor setup
    "Front Camera/FaceID Repair": "7,500 NGN", // 16MP selfie module
    "Loudspeaker Repair": "4,000 NGN", // Mono speaker system
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Features dedicated 3.5mm jack
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "10,000 NGN", // Upgraded under-display optical sensor
    "Water Damage Recovery": "7,000 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "20,000 NGN", // Exynos 7904 platform
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Galaxy A20": {
    "Screen Replacement": "28,000 NGN", // 60Hz Super AMOLED panel
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "5,000 NGN", // "Glasstic" plastic rear panel
    "Battery Replacement": "6,500 NGN", // 4000mAh battery cell
    "Charging Port Repair": "4,500 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "12,000 NGN", // 13MP dual camera setup
    "Front Camera/FaceID Repair": "6,500 NGN", // 8MP selfie module
    "Loudspeaker Repair": "3,500 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,500 NGN", // Features 3.5mm headphone jack
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN", // Rear-mounted physical sensor
    "Water Damage Recovery": "6,500 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "18,000 NGN", // Exynos 7884 platform
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Galaxy A20e": {
    "Screen Replacement": "25,000 NGN", // Smaller 5.8" PLS TFT LCD panel
    "Glass Only Repair": "9,000 NGN",
    "Back Glass Replacement": "5,000 NGN", // Glossy plastic rear cover
    "Battery Replacement": "6,000 NGN", // Smaller 3000mAh battery cell
    "Charging Port Repair": "4,500 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "12,000 NGN",
    "Front Camera/FaceID Repair": "6,500 NGN",
    "Loudspeaker Repair": "3,500 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,500 NGN", // Features 3.5mm headphone jack
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN", // Rear-mounted physical sensor
    "Water Damage Recovery": "6,500 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "18,000 NGN", // Exynos 7884 platform
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Galaxy A20s": {
    "Screen Replacement": "26,000 NGN", // 6.5" IPS LCD panel (cheaper than AMOLED swap)
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "5,000 NGN", // Glossy plastic rear cover
    "Battery Replacement": "6,500 NGN", // 4000mAh battery cell
    "Charging Port Repair": "4,500 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "14,000 NGN", // Triple camera array module
    "Front Camera/FaceID Repair": "6,500 NGN",
    "Loudspeaker Repair": "3,500 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,500 NGN", // Features 3.5mm headphone jack
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN", // Rear-mounted physical sensor
    "Water Damage Recovery": "6,500 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "18,000 NGN", // Snapdragon 450 architecture
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Galaxy A21": {
    "Screen Replacement": "30,000 NGN", // IPS LCD punch-hole display panel
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "5,500 NGN", // Plastic back panel
    "Battery Replacement": "7,000 NGN", // 4000mAh battery cell
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "15,000 NGN", // Quad camera alignment module
    "Front Camera/FaceID Repair": "7,500 NGN", // 13MP punch-hole camera module
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Features 3.5mm headphone jack
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "6,500 NGN", // Rear-mounted physical sensor
    "Water Damage Recovery": "7,000 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "20,000 NGN", // MediaTek Helio P35 platform
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "5,500 NGN"
},
"Galaxy A21s": {
    "Screen Replacement": "30,000 NGN", // PLS LCD punch-hole display panel
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "5,500 NGN", // Holographic pattern plastic rear cover
    "Battery Replacement": "8,000 NGN", // Larger 5000mAh battery cell
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "18,000 NGN", // Upgraded 48MP quad camera setup
    "Front Camera/FaceID Repair": "7,500 NGN", // 13MP punch-hole camera module
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Features 3.5mm headphone jack
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "6,500 NGN", // Rear-mounted physical sensor
    "Water Damage Recovery": "7,000 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "22,000 NGN", // Exynos 850 architecture
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "5,500 NGN"
},
"Galaxy A22": {
    "Screen Replacement": "32,000 NGN", // 90Hz Super AMOLED panel
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "5,000 NGN", // Plastic matte rear cover
    "Battery Replacement": "7,000 NGN", // 5000mAh battery cell
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "15,000 NGN", // 48MP main camera with OIS
    "Front Camera/FaceID Repair": "7,000 NGN", // 13MP selfie module
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Features 3.5mm headphone jack
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Side-mounted power button sensor
    "Water Damage Recovery": "7,000 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "20,000 NGN", // MediaTek Helio G80 platform
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "5,500 NGN"
},
"Galaxy A22 5G": {
    "Screen Replacement": "28,000 NGN", // 90Hz TFT LCD display panel (cheaper than AMOLED part)
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "5,000 NGN", // Plastic rear panel
    "Battery Replacement": "7,000 NGN", // 5000mAh battery cell
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "14,000 NGN", // 48MP main sensor (no OIS on 5G model)
    "Front Camera/FaceID Repair": "6,500 NGN", // 8MP selfie module
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Features 3.5mm headphone jack
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Side-mounted power button sensor
    "Water Damage Recovery": "7,000 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "22,000 NGN", // MediaTek Dimensity 700 5G platform
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "5,500 NGN"
},
"Galaxy A23": {
    "Screen Replacement": "34,000 NGN", // 90Hz PLS LCD panel
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "5,500 NGN", // Glossy plastic rear shell
    "Battery Replacement": "8,000 NGN", // 5000mAh cell with 25W charging rail
    "Charging Port Repair": "5,500 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "18,000 NGN", // 50MP main camera with OIS stabilization
    "Front Camera/FaceID Repair": "7,500 NGN", // 8MP selfie module
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Features 3.5mm headphone jack
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN", // Side-mounted physical sensor
    "Water Damage Recovery": "7,500 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "24,000 NGN", // Snapdragon 680 4G platform
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Galaxy A23 5G": {
    "Screen Replacement": "38,000 NGN", // Upgraded 120Hz PLS LCD panel
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "5,500 NGN",
    "Battery Replacement": "8,000 NGN", 
    "Charging Port Repair": "5,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "18,000 NGN", // 50MP main module with OIS
    "Front Camera/FaceID Repair": "7,500 NGN",
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN",
    "Water Damage Recovery": "7,500 NGN",
    "Motherboard Micro-Soldering": "26,000 NGN", // Snapdragon 695 5G platform
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Galaxy A24": {
    "Screen Replacement": "44,000 NGN", // Upgraded 90Hz Super AMOLED panel
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "6,500 NGN", // Premium glossy plastic panel
    "Battery Replacement": "8,500 NGN", // 5000mAh cell with 25W charging
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "20,000 NGN", // 50MP primary sensor with OIS
    "Front Camera/FaceID Repair": "8,500 NGN", // 13MP selfie module
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Features 3.5mm headphone jack
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN", // Side-mounted physical sensor
    "Water Damage Recovery": "8,000 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "28,000 NGN", // MediaTek Helio G99 platform
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "6,500 NGN"
},
"Galaxy A25 5G": {
    "Screen Replacement": "52,000 NGN", // Premium 120Hz Super AMOLED panel
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "7,500 NGN", // Textured pattern plastic shell
    "Battery Replacement": "9,000 NGN", // 5000mAh battery cell
    "Charging Port Repair": "6,500 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "24,000 NGN", // 50MP main sensor with OIS stabilization
    "Front Camera/FaceID Repair": "9,500 NGN", // 13MP selfie module
    "Loudspeaker Repair": "5,500 NGN", // Dedicated stereo speaker system
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "4,500 NGN", // Features 3.5mm headphone jack
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "8,500 NGN", // Key Island side-mounted sensor
    "Water Damage Recovery": "9,000 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "32,000 NGN", // Exynos 1280 5G platform
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "7,000 NGN"
},
"Galaxy A26 5G": {
    "Screen Replacement": "62,000 NGN", // 120Hz Infinity-U Super AMOLED panel
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "12,000 NGN", // Premium Gorilla Glass Victus+ rear panel
    "Battery Replacement": "10,500 NGN", // 5000mAh high-density cell
    "Charging Port Repair": "7,000 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "26,000 NGN", // 50MP sensor array with advanced OIS
    "Front Camera/FaceID Repair": "10,000 NGN", // 13MP camera module
    "Loudspeaker Repair": "6,000 NGN", // Stereo speaker configuration
    "Microphone Repair": "5,500 NGN",
    "Headphone Jack Repair": "Contact for Quote", // Headphone jack removed on this series
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "9,000 NGN", // Integrated side-mounted reader
    "Water Damage Recovery": "10,000 NGN", // IP67 structural protection array
    "Motherboard Micro-Soldering": "36,000 NGN", // Exynos 1380 architecture platform
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "7,500 NGN"
},
"Galaxy A27 5G": {
    "Screen Replacement": "66,000 NGN", // 120Hz Super AMOLED panel
    "Glass Only Repair": "22,000 NGN",
    "Back Glass Replacement": "13,500 NGN", // Premium Gorilla Glass Victus+ panel
    "Battery Replacement": "12,000 NGN", // 5000mAh structural battery cell
    "Charging Port Repair": "7,500 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "28,000 NGN", // 50MP camera setup with upgraded OIS
    "Front Camera/FaceID Repair": "11,000 NGN", // 12MP selfie module
    "Loudspeaker Repair": "6,500 NGN",
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "Contact for Quote", // Missing 3.5mm jack
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "9,500 NGN", // Touch-based frame sensor
    "Water Damage Recovery": "11,000 NGN", // IP64 protective sealing
    "Motherboard Micro-Soldering": "40,000 NGN", // Snapdragon 6 Gen 3 4nm system chip
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Galaxy A10": {
    "Screen Replacement": "18,000 NGN", // 60Hz TFT LCD panel
    "Glass Only Repair": "6,000 NGN",
    "Back Glass Replacement": "4,000 NGN", // Plastic rear cover
    "Battery Replacement": "5,000 NGN", // 3400mAh battery cell
    "Charging Port Repair": "3,500 NGN", // Micro-USB port assembly
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "8,000 NGN", // 13MP single camera module
    "Front Camera/FaceID Repair": "5,000 NGN", // 5MP selfie module
    "Loudspeaker Repair": "3,000 NGN",
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "3,000 NGN", // Dedicated 3.5mm jack
    "Power/Volume Button Repair": "3,000 NGN",
    "Fingerprint/Home Button Repair": "N/A", // Lacks biometric hardware sensor
    "Water Damage Recovery": "5,000 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "12,000 NGN", // Exynos 7884 platform
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "10,000 NGN",
    "Network/Carrier Unlocking": "4,000 NGN"
},
"Galaxy A10e": {
    "Screen Replacement": "18,000 NGN", // Smaller 5.83" PLS TFT LCD panel
    "Glass Only Repair": "6,000 NGN",
    "Back Glass Replacement": "4,000 NGN", // Plastic rear cover
    "Battery Replacement": "5,000 NGN", // 3000mAh battery cell
    "Charging Port Repair": "4,000 NGN", // USB Type-C port transition module
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "7,000 NGN", // 8MP single camera module
    "Front Camera/FaceID Repair": "5,000 NGN", // 5MP selfie module
    "Loudspeaker Repair": "3,000 NGN",
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "3,000 NGN", // Dedicated 3.5mm jack
    "Power/Volume Button Repair": "3,000 NGN",
    "Fingerprint/Home Button Repair": "N/A", // Lacks biometric hardware sensor
    "Water Damage Recovery": "5,000 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "12,000 NGN", // Exynos 7884 platform
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "10,000 NGN",
    "Network/Carrier Unlocking": "4,000 NGN"
},
"Galaxy A10s": {
    "Screen Replacement": "18,000 NGN", // 6.2" IPS LCD display panel
    "Glass Only Repair": "6,000 NGN",
    "Back Glass Replacement": "4,000 NGN", // Plastic rear panel
    "Battery Replacement": "5,500 NGN", // 4000mAh battery cell
    "Charging Port Repair": "3,500 NGN", // Micro-USB sub-board architecture
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "9,000 NGN", // 13MP dual-camera module
    "Front Camera/FaceID Repair": "5,500 NGN", // 8MP selfie module
    "Loudspeaker Repair": "3,000 NGN",
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "3,000 NGN", // Dedicated 3.5mm jack
    "Power/Volume Button Repair": "3,000 NGN",
    "Fingerprint/Home Button Repair": "5,000 NGN", // Rear-mounted physical hardware sensor
    "Water Damage Recovery": "5,000 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "14,000 NGN", // MediaTek Helio P22 architecture
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "10,000 NGN",
    "Network/Carrier Unlocking": "4,000 NGN"
},
"Galaxy A11": {
    "Screen Replacement": "22,000 NGN", // PLS LCD punch-hole display assembly
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "4,500 NGN", // Glossy plastic rear frame
    "Battery Replacement": "6,000 NGN", // 4000mAh battery cell
    "Charging Port Repair": "4,000 NGN", // USB Type-C interface board
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "11,000 NGN", // Triple camera array module
    "Front Camera/FaceID Repair": "6,000 NGN", // 8MP punch-hole module
    "Loudspeaker Repair": "3,500 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,500 NGN", // Dedicated 3.5mm jack
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "5,000 NGN", // Rear-mounted hardware sensor
    "Water Damage Recovery": "6,000 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "16,000 NGN", // Snapdragon 450 system platform
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "4,500 NGN"
},
"Galaxy A12": {
    "Screen Replacement": "24,000 NGN", // 6.5" PLS LCD notch panel
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "4,500 NGN", // Textured cross-hatch plastic cover
    "Battery Replacement": "6,500 NGN", // 5000mAh structural cell
    "Charging Port Repair": "4,500 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "13,000 NGN", // 48MP quad camera layout configuration
    "Front Camera/FaceID Repair": "6,000 NGN", // 8MP notch sensor module
    "Loudspeaker Repair": "3,500 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,500 NGN", // Dedicated 3.5mm jack
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "6,500 NGN", // Integrated side-mounted power sensor
    "Water Damage Recovery": "6,500 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "18,000 NGN", // MediaTek Helio P35 platform
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Galaxy A12 Nacho": {
    "Screen Replacement": "24,000 NGN", // 6.5" PLS LCD notch panel
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "4,500 NGN", // Textured plastic cover
    "Battery Replacement": "6,500 NGN", // 5000mAh structural cell
    "Charging Port Repair": "4,500 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "13,000 NGN", // 48MP quad camera setup
    "Front Camera/FaceID Repair": "6,000 NGN",
    "Loudspeaker Repair": "3,500 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,500 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "6,500 NGN", // Integrated side-mounted power sensor
    "Water Damage Recovery": "6,500 NGN",
    "Motherboard Micro-Soldering": "18,000 NGN", // Swapped to Exynos 850 platform
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Galaxy A13": {
    "Screen Replacement": "26,000 NGN", // 6.6" PLS LCD Infinity-V display panel
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "5,000 NGN", // Glossy uniform plastic rear housing
    "Battery Replacement": "7,000 NGN", // 5000mAh high-density cell
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "15,000 NGN", // 50MP quad camera sensor module
    "Front Camera/FaceID Repair": "6,500 NGN", // 8MP layout module
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Dedicated 3.5mm jack
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Side-mounted power button sensor
    "Water Damage Recovery": "7,000 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "20,000 NGN", // Exynos 850 architecture
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "5,500 NGN"
},
"Galaxy A13 5G": {
    "Screen Replacement": "28,000 NGN", // Upgraded 90Hz PLS LCD display panel
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "5,000 NGN",
    "Battery Replacement": "7,000 NGN",
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "14,000 NGN", // 50MP main sensor array (no ultra-wide lens)
    "Front Camera/FaceID Repair": "6,000 NGN", // 5MP notch module variant
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN",
    "Water Damage Recovery": "7,000 NGN",
    "Motherboard Micro-Soldering": "22,000 NGN", // MediaTek Dimensity 700 5G platform
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Galaxy A14": {
    "Screen Replacement": "28,000 NGN", // 6.6" FHD+ PLS LCD display panel
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "5,500 NGN", // Ridged texture finish plastic cover
    "Battery Replacement": "7,500 NGN", // 5000mAh capacity cell
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "16,000 NGN", // 50MP triple-camera system setup
    "Front Camera/FaceID Repair": "7,500 NGN", // Upgraded 13MP selfie sensor module
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Dedicated 3.5mm jack
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN", // Side-mounted framework reader
    "Water Damage Recovery": "7,500 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "22,000 NGN", // MediaTek Helio G80 / Exynos 850 variant
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Galaxy A14 5G": {
    "Screen Replacement": "32,000 NGN", // Upgraded 90Hz FHD+ PLS LCD display assembly
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "5,500 NGN",
    "Battery Replacement": "7,500 NGN",
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "16,000 NGN",
    "Front Camera/FaceID Repair": "7,500 NGN",
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN",
    "Water Damage Recovery": "7,500 NGN",
    "Motherboard Micro-Soldering": "24,000 NGN", // MediaTek Dimensity 700 / Exynos 1330 5G platform
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "6,500 NGN"
},
"Galaxy A15": {
    "Screen Replacement": "48,000 NGN", // Major shift to 90Hz Super AMOLED panel (higher cost)
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "6,500 NGN", // Key Island frame geometry plastic panel
    "Battery Replacement": "8,500 NGN", // 5000mAh battery cell with 25W charging support
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "18,000 NGN", // 50MP triple camera system layout
    "Front Camera/FaceID Repair": "8,000 NGN", // 13MP infinity-U alignment module
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Dedicated 3.5mm jack
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN", // Key Island side-integrated power reader
    "Water Damage Recovery": "8,000 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "28,000 NGN", // MediaTek Helio G99 platform
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "6,500 NGN"
},
"Galaxy A15 5G": {
    "Screen Replacement": "52,000 NGN", // 90Hz Super AMOLED display panel
    "Glass Only Repair": "16,000 NGN",
    "Back Glass Replacement": "6,500 NGN",
    "Battery Replacement": "8,500 NGN",
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "18,000 NGN",
    "Front Camera/FaceID Repair": "8,000 NGN",
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN",
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "30,000 NGN", // MediaTek Dimensity 6100+ 5G platform
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "7,000 NGN"
},
"Galaxy A16": {
    "Screen Replacement": "54,000 NGN", // Larger 6.7" 90Hz Super AMOLED panel
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "10,000 NGN", // Slim glass-imitation back structural panel
    "Battery Replacement": "9,500 NGN", // 5000mAh slim high-capacity cell
    "Charging Port Repair": "6,500 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "20,000 NGN", // 50MP triple sensor matrix
    "Front Camera/FaceID Repair": "9,000 NGN", // 13MP sensor layout
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "Contact for Quote", // 3.5mm audio jack removed from this generation onwards
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "8,500 NGN", // Side-frame integrated hardware touch sensor
    "Water Damage Recovery": "9,000 NGN", // Upgraded to IP54 dust/splash structural protection seal
    "Motherboard Micro-Soldering": "32,000 NGN", // Exynos 1330 chipset architecture
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "7,500 NGN"
},
"Galaxy A16 5G": {
    "Screen Replacement": "58,000 NGN", // 6.7" 90Hz Super AMOLED display panel
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "10,000 NGN",
    "Battery Replacement": "9,500 NGN",
    "Charging Port Repair": "6,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "20,000 NGN",
    "Front Camera/FaceID Repair": "9,000 NGN",
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "Contact for Quote", // Missing 3.5mm jack
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "8,500 NGN",
    "Water Damage Recovery": "9,000 NGN", // IP54 dust/splash architectural protection seal
    "Motherboard Micro-Soldering": "34,000 NGN", // MediaTek Dimensity 6300 5G system platform
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Galaxy A17": {
    "Screen Replacement": "60,000 NGN", // Modernized 6.7" 90Hz punch-hole Super AMOLED panel
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "12,000 NGN", // Premium material composite back surface
    "Battery Replacement": "10,000 NGN", // 5000mAh structural battery pack
    "Charging Port Repair": "7,000 NGN", // Upgraded charging structural subsystem
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "22,000 NGN", // 50MP triple sensor subsystem
    "Front Camera/FaceID Repair": "10,000 NGN", // 13MP punch-hole camera system component
    "Loudspeaker Repair": "5,500 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "Contact for Quote", // Missing 3.5mm jack
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "9,000 NGN", // Unified structural side-frame touch sensor
    "Water Damage Recovery": "10,000 NGN", // IP54 defensive protective casing boundary
    "Motherboard Micro-Soldering": "36,000 NGN", // Upgraded mid-tier performance system platform
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Galaxy A17 5G": {
    "Screen Replacement": "64,000 NGN", // Modernized 6.7" 90Hz punch-hole Super AMOLED panel
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "12,000 NGN",
    "Battery Replacement": "10,000 NGN",
    "Charging Port Repair": "7,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "22,000 NGN",
    "Front Camera/FaceID Repair": "10,000 NGN",
    "Loudspeaker Repair": "5,500 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "Contact for Quote", // Missing 3.5mm jack
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "9,000 NGN",
    "Water Damage Recovery": "10,000 NGN", // IP54 defensive protective casing boundary
    "Motherboard Micro-Soldering": "38,000 NGN", // Advanced 5G application processor platform
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "8,500 NGN"
},
//INFINIX DEVICES
//GT series
"GT 10 Pro": {
    "Screen Replacement": "38,000 NGN", // 120Hz Flexible AMOLED panel
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "8,500 NGN", // Translucent Cyber Mecha plastic cover
    "Battery Replacement": "8,000 NGN", // 5000mAh high-density cell
    "Charging Port Repair": "4,500 NGN", // USB Type-C assembly with Bypass Charging logic
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "22,000 NGN", // 108MP triple camera master module
    "Front Camera/FaceID Repair": "7,500 NGN", // 32MP punch-hole selfie setup
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,500 NGN", // Dedicated 3.5mm hi-res interface
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN", // In-display optical fingerprint module
    "Water Damage Recovery": "8,000 NGN", // IP53 dust/splash defensive seals
    "Motherboard Micro-Soldering": "28,000 NGN", // MediaTek Dimensity 8050 gaming platform
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "6,500 NGN"
},
"GT 20 Pro": {
    "Screen Replacement": "48,000 NGN", // Upgraded 144Hz LTPS AMOLED display panel
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "12,000 NGN", // Mecha Loop LED integrated back cover
    "Battery Replacement": "9,000 NGN", // 5000mAh high-drain battery unit
    "Charging Port Repair": "5,000 NGN", // Type-C structural sub-board assembly
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "26,000 NGN", // 108MP main sensor configuration with OIS hardware
    "Front Camera/FaceID Repair": "8,000 NGN", // 32MP dual-LED flash camera module
    "Loudspeaker Repair": "5,000 NGN", // Dual stereo units tuned by JBL
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "Contact for Quote", // Removed 3.5mm hardware port
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "9,000 NGN", // Under-display optical reading sensor
    "Water Damage Recovery": "9,000 NGN", // IP54 certified enclosure barrier
    "Motherboard Micro-Soldering": "34,000 NGN", // Dimensity 8200 Ultimate 4nm master chip
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "7,500 NGN"
},
"GT 30": {
    "Screen Replacement": "50,000 NGN", // 6.78" 144Hz 1.5K LTPS AMOLED display setup
    "Glass Only Repair": "16,000 NGN",
    "Back Glass Replacement": "11,000 NGN", // Mecha design plastic composite chassis plate
    "Battery Replacement": "10,000 NGN", // High-capacity 5500mAh power cell
    "Charging Port Repair": "5,500 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "24,000 NGN", // 64MP Sony IMX682 dual sensor array
    "Front Camera/FaceID Repair": "7,000 NGN", // 13MP wide selfie architecture
    "Loudspeaker Repair": "5,000 NGN", // Stereo configuration system tuned by JBL
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "Contact for Quote", // Missing 3.5mm audio jack
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "9,000 NGN", // Embedded on-screen optical hardware
    "Water Damage Recovery": "10,000 NGN", // IP64 dust/water protective sealing strip
    "Motherboard Micro-Soldering": "32,000 NGN", // MediaTek Dimensity 7400 4nm platform
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"GT 30 Pro": {
    "Screen Replacement": "56,000 NGN", // 6.78" 144Hz 1.5K LTPS AMOLED display panel
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "14,000 NGN", // Corning Gorilla Glass 7i rear layout plate
    "Battery Replacement": "10,500 NGN", // High-capacity 5500mAh power cell
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "28,000 NGN", // 108MP main dual-lens camera architecture
    "Front Camera/FaceID Repair": "7,000 NGN", // 13MP punch-hole selfie system module
    "Loudspeaker Repair": "5,500 NGN", // Stereo configuration system tuned by JBL
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "Contact for Quote", // Missing 3.5mm audio jack
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "9,500 NGN", // Under-display optical biometric matrix
    "Water Damage Recovery": "10,000 NGN", // IP64 dust tight and splash proof casing
    "Motherboard Micro-Soldering": "38,000 NGN", // MediaTek Dimensity 8350 Ultimate 4nm platform
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "8,500 NGN"
},
"GT 50 Pro": {
    "Screen Replacement": "62,000 NGN", // Premium 6.78" 144Hz 1B Color AMOLED screen matrix
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "16,000 NGN", // Gorilla Glass 7i high-tier gaming rear design panel
    "Battery Replacement": "12,000 NGN", // Large structural 6500mAh ultra-capacity cell
    "Charging Port Repair": "6,500 NGN",
    "Wireless Charging Repair": "15,000 NGN", // Native 30W wireless charging receiver sub-board
    "Rear Camera Repair": "30,000 NGN", // 50MP upgraded primary dual setup matrix
    "Front Camera/FaceID Repair": "7,500 NGN", // 13MP center-aligned sensor module
    "Loudspeaker Repair": "6,000 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "Contact for Quote", // Missing 3.5mm audio jack
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "10,000 NGN", // Optical on-screen biological layout sensor
    "Water Damage Recovery": "11,000 NGN", // High-tier chassis protective fluid seal
    "Motherboard Micro-Soldering": "44,000 NGN", // MediaTek Dimensity 8400 Ultimate 4nm computing unit
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "24,000 NGN",
    "Network/Carrier Unlocking": "9,000 NGN"
},
//ZERO series
"Zero": {
    "Screen Replacement": "12,000 NGN", // 5.0" IPS LCD panel
    "Glass Only Repair": "4,000 NGN",
    "Back Glass Replacement": "4,000 NGN", // High-gloss plastic rear panel
    "Battery Replacement": "4,000 NGN", // 1920mAh battery cell
    "Charging Port Repair": "2,500 NGN", // Micro-USB port module
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "6,000 NGN", // 13MP rear module
    "Front Camera/FaceID Repair": "3,000 NGN", // 2MP front sensor
    "Loudspeaker Repair": "2,500 NGN",
    "Microphone Repair": "2,500 NGN",
    "Headphone Jack Repair": "2,500 NGN", // Dedicated 3.5mm jack
    "Power/Volume Button Repair": "2,500 NGN",
    "Fingerprint/Home Button Repair": "N/A", // Lacks biometric hardware
    "Water Damage Recovery": "4,000 NGN", // Lacks formal IP rating
    "Motherboard Micro-Soldering": "10,000 NGN", // MediaTek MT6592 platform
    "Software/Bootloop Flashing": "3,500 NGN",
    "Data Recovery": "8,000 NGN",
    "Network/Carrier Unlocking": "3,500 NGN"
},
"Zero 2": {
    "Screen Replacement": "16,000 NGN", // 5.0" HD Super AMOLED display panel
    "Glass Only Repair": "5,000 NGN",
    "Back Glass Replacement": "5,000 NGN", // Kevlar fiber texture composite back
    "Battery Replacement": "4,500 NGN", // 2300mAh battery cell
    "Charging Port Repair": "2,500 NGN", // Micro-USB port module
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "6,500 NGN", // 13MP Samsung sensor module
    "Front Camera/FaceID Repair": "3,500 NGN", // 5MP wide-angle selfie module
    "Loudspeaker Repair": "2,500 NGN",
    "Microphone Repair": "2,500 NGN",
    "Headphone Jack Repair": "2,500 NGN",
    "Power/Volume Button Repair": "2,500 NGN",
    "Fingerprint/Home Button Repair": "N/A", // Lacks biometric hardware
    "Water Damage Recovery": "4,000 NGN",
    "Motherboard Micro-Soldering": "12,000 NGN", // MediaTek MT6753 architecture
    "Software/Bootloop Flashing": "3,500 NGN",
    "Data Recovery": "8,000 NGN",
    "Network/Carrier Unlocking": "3,500 NGN"
},
"Zero 3": {
    "Screen Replacement": "18,000 NGN", // 5.5" FHD IPS LCD panel
    "Glass Only Repair": "6,000 NGN",
    "Back Glass Replacement": "5,000 NGN", // Double-sided explosion-proof glass texture
    "Battery Replacement": "5,000 NGN", // 3030mAh battery cell
    "Charging Port Repair": "3,000 NGN", // Micro-USB system interface
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "10,000 NGN", // 20.7MP Sony IMX230 sensor module
    "Front Camera/FaceID Repair": "4,000 NGN", // 5MP module with flash
    "Loudspeaker Repair": "3,000 NGN",
    "Microphone Repair": "2,500 NGN",
    "Headphone Jack Repair": "2,500 NGN",
    "Power/Volume Button Repair": "3,000 NGN",
    "Fingerprint/Home Button Repair": "N/A", // Lacks biometric hardware
    "Water Damage Recovery": "5,000 NGN",
    "Motherboard Micro-Soldering": "14,000 NGN", // MediaTek Helio X10 platform
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "10,000 NGN",
    "Network/Carrier Unlocking": "4,000 NGN"
},
"Zero 4": {
    "Screen Replacement": "20,000 NGN", // 5.5" FHD IPS panel with 2.5D curved glass
    "Glass Only Repair": "6,000 NGN",
    "Back Glass Replacement": "6,000 NGN", // Aluminum unibody rear shell
    "Battery Replacement": "5,500 NGN", // 3200mAh battery cell
    "Charging Port Repair": "3,000 NGN", // Micro-USB port sub-board
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "12,000 NGN", // 16MP primary sensor with OIS hardware
    "Front Camera/FaceID Repair": "4,500 NGN", // 8MP selfie module with flash
    "Loudspeaker Repair": "3,000 NGN",
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "3,000 NGN",
    "Power/Volume Button Repair": "3,000 NGN",
    "Fingerprint/Home Button Repair": "4,500 NGN", // Rear-mounted tactile fingerprint scanner
    "Water Damage Recovery": "5,000 NGN",
    "Motherboard Micro-Soldering": "15,000 NGN", // MediaTek MT6753 chipset
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "10,000 NGN",
    "Network/Carrier Unlocking": "4,000 NGN"
},
"Zero 4 Plus": {
    "Screen Replacement": "24,000 NGN", // Larger 5.98" FHD IPS LCD panel
    "Glass Only Repair": "7,000 NGN",
    "Back Glass Replacement": "7,000 NGN", // Large metal unibody rear shell
    "Battery Replacement": "6,000 NGN", // 4000mAh structural battery cell
    "Charging Port Repair": "3,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "15,000 NGN", // Upgraded 20.7MP module with OIS and Laser AF
    "Front Camera/FaceID Repair": "5,000 NGN", // 13MP setup configuration
    "Loudspeaker Repair": "3,500 NGN",
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "3,000 NGN",
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "4,500 NGN", // Rear-mounted fingerprint module
    "Water Damage Recovery": "5,500 NGN",
    "Motherboard Micro-Soldering": "18,000 NGN", // MediaTek Helio X20 Deca-core platform
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "4,500 NGN"
},
"Zero 5": {
    "Screen Replacement": "24,000 NGN", // 5.98" FHD LTPS IPS display panel
    "Glass Only Repair": "7,000 NGN",
    "Back Glass Replacement": "7,000 NGN", // Sandblasted aluminum metal back cover
    "Battery Replacement": "6,000 NGN", // 4350mAh high-capacity battery cell
    "Charging Port Repair": "4,000 NGN", // USB Type-C structural sub-board
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "14,000 NGN", // 12MP + 13MP Dual camera system layout
    "Front Camera/FaceID Repair": "6,000 NGN", // 16MP wide selfie sensor module
    "Loudspeaker Repair": "3,500 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,500 NGN", // Dedicated 3.5mm jack
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "5,000 NGN", // Rear circular touch sensor
    "Water Damage Recovery": "6,000 NGN",
    "Motherboard Micro-Soldering": "18,000 NGN", // MediaTek Helio P25 computing platform
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Zero 5 Pro": {
    "Screen Replacement": "24,000 NGN", // 5.98" FHD LTPS IPS display panel
    "Glass Only Repair": "7,000 NGN",
    "Back Glass Replacement": "7,000 NGN", // Premium finish metal chassis plate
    "Battery Replacement": "6,000 NGN", // 4350mAh power cell
    "Charging Port Repair": "4,000 NGN", // USB Type-C interface board
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "14,000 NGN", // 12MP + 13MP Dual camera setup
    "Front Camera/FaceID Repair": "6,000 NGN",
    "Loudspeaker Repair": "3,500 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,500 NGN",
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "5,000 NGN", // Rear biometric touch assembly
    "Water Damage Recovery": "6,000 NGN",
    "Motherboard Micro-Soldering": "20,000 NGN", // Helio P25 configuration with expanded 128GB ROM
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Zero 6": {
    "Screen Replacement": "26,000 NGN", // 6.18" FHD+ IPS LCD notched panel
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "8,000 NGN", // Corning Gorilla Glass 5 rear panel assembly
    "Battery Replacement": "6,500 NGN", // 3650mAh battery unit
    "Charging Port Repair": "4,000 NGN", // Type-C interface block
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "16,000 NGN", // 12MP + 24MP low-light dual sensor array
    "Front Camera/FaceID Repair": "7,000 NGN", // 20MP front camera module
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,500 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN", // Rear physical hardware sensor
    "Water Damage Recovery": "6,500 NGN",
    "Motherboard Micro-Soldering": "22,000 NGN", // Snapdragon 636 system architecture
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "5,500 NGN"
},
"Zero 6 Pro": {
    "Screen Replacement": "26,000 NGN", // 6.18" FHD+ IPS LCD notched panel
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "8,000 NGN", // Corning Gorilla Glass 5 rear panel panel
    "Battery Replacement": "6,500 NGN",
    "Charging Port Repair": "4,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "16,000 NGN",
    "Front Camera/FaceID Repair": "7,000 NGN",
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,500 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN",
    "Water Damage Recovery": "6,500 NGN",
    "Motherboard Micro-Soldering": "24,000 NGN", // Snapdragon 636 platform with expanded 6GB RAM
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "5,500 NGN"
},
"Zero 8": {
    "Screen Replacement": "32,000 NGN", // 6.85" 90Hz IPS LCD dual punch-hole panel
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "6,000 NGN", // Geometric cut plastic rear frame
    "Battery Replacement": "7,000 NGN", // 4500mAh capacity cell with 33W support
    "Charging Port Repair": "4,500 NGN", // Type-C structural fast charge sub-board
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "20,000 NGN", // 64MP diamond-shaped quad module layout
    "Front Camera/FaceID Repair": "9,000 NGN", // 48MP + 8MP dual selfie camera array
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Dedicated 3.5mm jack
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Side-integrated physical sensor assembly
    "Water Damage Recovery": "7,000 NGN",
    "Motherboard Micro-Soldering": "26,000 NGN", // MediaTek Helio G90T gaming architecture
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Zero 8i": {
    "Screen Replacement": "32,000 NGN", // 6.85" 90Hz IPS LCD display module
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "6,000 NGN", // Geometric cut plastic back housing
    "Battery Replacement": "7,000 NGN",
    "Charging Port Repair": "4,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "18,000 NGN", // Modulated 48MP quad camera setup matrix
    "Front Camera/FaceID Repair": "8,000 NGN", // 16MP + 22MP dual front camera alignment
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Side-frame touch sensor reader
    "Water Damage Recovery": "7,000 NGN",
    "Motherboard Micro-Soldering": "26,000 NGN", // MediaTek Helio G90T hardware core
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Zero X": {
    "Screen Replacement": "44,000 NGN", // Shift to 120Hz Super AMOLED flat display assembly
    "Glass Only Repair": "14,000 NGN",
    "Back Glass Replacement": "10,000 NGN", // Dual-glass structure styling panel
    "Battery Replacement": "7,500 NGN", // 4500mAh cell with 45W fast charging
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "25,000 NGN", // 64MP main module + 8MP Periscope lens setup
    "Front Camera/FaceID Repair": "7,500 NGN", // 16MP punch-hole selfie layout
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Dedicated 3.5mm jack
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "8,500 NGN", // Under-display optical biometric sensor
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "28,000 NGN", // MediaTek Helio G95 processing hub
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "6,500 NGN"
},
"Zero X Neo": {
    "Screen Replacement": "34,000 NGN", // 90Hz IPS LCD oversized panel
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "7,000 NGN", // Composite plastic finish back sheet
    "Battery Replacement": "7,500 NGN", // 5000mAh structural battery pack
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "22,000 NGN", // 48MP sensor block with 5x Periscope architecture
    "Front Camera/FaceID Repair": "7,500 NGN",
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Side-mounted physical sensor framework
    "Water Damage Recovery": "7,500 NGN",
    "Motherboard Micro-Soldering": "26,000 NGN", // MediaTek Helio G95 system architecture
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "6,500 NGN"
},
"Zero X Pro": {
    "Screen Replacement": "46,000 NGN", // 120Hz Super AMOLED performance display module
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "12,000 NGN", // Premium eco-glass or starry glass shell
    "Battery Replacement": "7,500 NGN", // 4500mAh performance battery
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "30,000 NGN", // Upgraded 108MP OIS main module + Periscope array
    "Front Camera/FaceID Repair": "8,000 NGN", // 16MP wide angle selfie matrix
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "8,500 NGN", // Under-screen optical structural reader
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "30,000 NGN", // Helio G95 engine variant configuration
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "7,000 NGN"
},
"Zero 5G": {
    "Screen Replacement": "36,000 NGN", // 6.78" 120Hz LTPS IPS LCD infrastructure panel
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "8,000 NGN", // Uni-curve design glossy plastic back cover
    "Battery Replacement": "8,000 NGN", // 5000mAh capacity system cell
    "Charging Port Repair": "5,000 NGN", // USB Type-C assembly hub
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "22,000 NGN", // 48MP main module setup with 2x zoom lens
    "Front Camera/FaceID Repair": "8,000 NGN",
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Dedicated 3.5mm jack
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN", // Side-integrated physical structural key
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "32,000 NGN", // Transition to MediaTek Dimensity 900 5G platform
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "7,500 NGN"
},
"Zero 5G 2023": {
    "Screen Replacement": "36,000 NGN", // 6.78" 120Hz LTPS IPS LCD screen structure
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "8,000 NGN", // Textured matte plastic unibody design
    "Battery Replacement": "8,000 NGN",
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "24,000 NGN", // Modified 50MP main sensor architecture
    "Front Camera/FaceID Repair": "8,000 NGN",
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN",
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "34,000 NGN", // Upgraded Dimensity 1080 5G chipset platform
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Zero 20": {
    "Screen Replacement": "46,000 NGN", // 6.7" 90Hz AMOLED display construction layout
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "9,000 NGN", // Lightweight matte composite rear plate
    "Battery Replacement": "8,000 NGN", // 4500mAh capacity cell configuration
    "Charging Port Repair": "5,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "26,000 NGN", // 108MP triple camera subsystem
    "Front Camera/FaceID Repair": "14,000 NGN", // Massive 60MP OIS auto-focus selfie module
    "Loudspeaker Repair": "5,000 NGN", // Dual stereo configuration speakers
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Dedicated 3.5mm jack
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN", // Side-integrated mechanical touch scanner
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "30,000 NGN", // MediaTek Helio G99 4G architecture engine
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "7,000 NGN"
},
"Zero Ultra": {
    "Screen Replacement": "68,000 NGN", // Premium 3D Curved 120Hz AMOLED panel architecture (High cost)
    "Glass Only Repair": "24,000 NGN",
    "Back Glass Replacement": "16,000 NGN", // Embossed 3D textured glass or leather surface plate
    "Battery Replacement": "10,000 NGN", // 4500mAh high-drain battery supporting 180W charging
    "Charging Port Repair": "7,000 NGN", // Complex multi-channel Type-C ultra charge board
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless charging
    "Rear Camera Repair": "45,000 NGN", // Giant 200MP OIS sensor master module array
    "Front Camera/FaceID Repair": "9,000 NGN", // 32MP hole punch design sensor
    "Loudspeaker Repair": "5,500 NGN", // Dual stereo sound field blocks
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "Contact for Quote", // Removed 3.5mm hardware port
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "10,000 NGN", // Advanced under-screen optical reading assembly
    "Water Damage Recovery": "10,000 NGN",
    "Motherboard Micro-Soldering": "42,000 NGN", // MediaTek Dimensity 920 5G hardware module
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "9,000 NGN"
},
"Zero 30": {
    "Screen Replacement": "48,000 NGN", // 3D Curved 120Hz AMOLED display construction panel
    "Glass Only Repair": "16,000 NGN",
    "Back Glass Replacement": "12,000 NGN", // Gorilla Glass 5 or eco-leather rear plate setup
    "Battery Replacement": "8,500 NGN", // 5000mAh battery cell unit
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "26,000 NGN", // 108MP triple lens configuration matrix
    "Front Camera/FaceID Repair": "12,000 NGN", // High-tier 50MP 2K recording selfie module
    "Loudspeaker Repair": "5,000 NGN", // Dual speakers system
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "Contact for Quote", // Missing 3.5mm audio jack
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "9,000 NGN", // In-display optical biological sensor
    "Water Damage Recovery": "9,000 NGN", // IP54 dust and splash protective barrier
    "Motherboard Micro-Soldering": "32,000 NGN", // MediaTek Helio G99 Ultimate platform
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Zero 30 5G": {
    "Screen Replacement": "54,000 NGN", // Upgraded 3D Curved 144Hz AMOLED system panel
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "12,000 NGN",
    "Battery Replacement": "8,500 NGN",
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "28,000 NGN", // 108MP main sensor configuration with OIS hardware
    "Front Camera/FaceID Repair": "14,000 NGN", // Elite 50MP 4K@60FPS video selfie block
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "Contact for Quote", // Missing 3.5mm audio jack
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "9,000 NGN", // Under-screen optical reading module
    "Water Damage Recovery": "9,000 NGN", // IP54 dust and splash structural protection seal
    "Motherboard Micro-Soldering": "36,000 NGN", // MediaTek Dimensity 8020 5G computing processor
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "8,500 NGN"
},
"Zero 40": {
    "Screen Replacement": "52,000 NGN", // 3D Curved 120Hz AMOLED display build layout
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "12,000 NGN", // Corning Gorilla Glass 5 uniform rear finish
    "Battery Replacement": "9,000 NGN", // 5000mAh fast-charge capability cell
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless sub-board hardware
    "Rear Camera Repair": "30,000 NGN", // 108MP main lens array module with OIS
    "Front Camera/FaceID Repair": "14,000 NGN", // Ultra-wide 50MP front shooter layout configuration
    "Loudspeaker Repair": "5,500 NGN", // Stereo configuration components tuned by JBL
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "Contact for Quote", // Missing 3.5mm audio jack
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "9,500 NGN", // Integrated on-screen optical hardware
    "Water Damage Recovery": "9,500 NGN", // IP54 defensive protective casing boundaries
    "Motherboard Micro-Soldering": "36,000 NGN", // New MediaTek Helio G100 hardware architecture
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "8,500 NGN"
},
"Zero 40 5G": {
    "Screen Replacement": "58,000 NGN", // Upgraded 3D Curved 144Hz AMOLED system design display
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "14,000 NGN", // Corning Gorilla Glass 5 stylized plate
    "Battery Replacement": "9,000 NGN", // 5000mAh fast-charge structural block
    "Charging Port Repair": "6,500 NGN",
    "Wireless Charging Repair": "15,000 NGN", // Integrated native 20W wireless charging coil matrix
    "Rear Camera Repair": "32,000 NGN", // 108MP main assembly + 50MP ultra-wide dual subsystem matrix
    "Front Camera/FaceID Repair": "14,000 NGN", // 50MP 4K@60FPS auto-focus front module setup
    "Loudspeaker Repair": "5,500 NGN", // Stereo configuration modules tuned by JBL
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "Contact for Quote", // Missing 3.5mm audio jack
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "9,500 NGN", // Under-screen optical structural reader matrix
    "Water Damage Recovery": "9,500 NGN", // IP54 defensive protective fluid shell
    "Motherboard Micro-Soldering": "40,000 NGN", // MediaTek Dimensity 8200 Ultimate 5G engine system
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "24,000 NGN",
    "Network/Carrier Unlocking": "9,000 NGN"
},
"Zero Flip": {
    "Screen Replacement": "95,000 NGN", // Complex 6.9" Foldable LTPO AMOLED internal screen hinge mechanism (Premium tier)
    "Glass Only Repair": "35,000 NGN", // External cover glass layer processing
    "Back Glass Replacement": "18,000 NGN", // Secondary 3.64" AMOLED cover display glass exterior layout
    "Battery Replacement": "12,000 NGN", // Dual-cell split design structural 4720mAh battery unit
    "Charging Port Repair": "8,000 NGN", // USB Type-C main module interface with 70W support routing
    "Wireless Charging Repair": "Contact for Quote", // Missing native wireless internal coil infrastructure
    "Rear Camera Repair": "35,000 NGN", // Flagship 50MP main layout + 50MP ultra-wide dual matrix system
    "Front Camera/FaceID Repair": "16,000 NGN", // Inner 50MP high-performance punch-hole camera module
    "Loudspeaker Repair": "6,500 NGN", // Dual stereo tracking micro speakers
    "Microphone Repair": "5,500 NGN",
    "Headphone Jack Repair": "Contact for Quote", // Missing 3.5mm audio jack
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "10,000 NGN", // Side-integrated fast tactile biometric element setup
    "Water Damage Recovery": "14,000 NGN", // Delicate internal structural fluid cleaning needed
    "Motherboard Micro-Soldering": "52,000 NGN", // Advanced MediaTek Dimensity 8020 foldable-split core platform
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "28,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
//HOT series
"Hot": {
    "Screen Replacement": "8,000 NGN", // 5.0" FWVGA display panel
    "Glass Only Repair": "2,500 NGN",
    "Back Glass Replacement": "2,500 NGN", // Removable textured plastic rear shell
    "Battery Replacement": "3,500 NGN", // 2000mAh removable battery cell
    "Charging Port Repair": "2,000 NGN", // Micro-USB port module
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "4,000 NGN", // 5MP rear camera module
    "Front Camera/FaceID Repair": "2,000 NGN", // 2MP selfie sensor
    "Loudspeaker Repair": "2,000 NGN",
    "Microphone Repair": "2,000 NGN",
    "Headphone Jack Repair": "2,000 NGN", // 3.5mm interface
    "Power/Volume Button Repair": "2,000 NGN",
    "Fingerprint/Home Button Repair": "N/A", // No biometric scanner
    "Water Damage Recovery": "3,500 NGN",
    "Motherboard Micro-Soldering": "8,000 NGN", // MediaTek MT6582 platform
    "Software/Bootloop Flashing": "3,000 NGN",
    "Data Recovery": "6,000 NGN",
    "Network/Carrier Unlocking": "3,000 NGN"
},
"Hot 2": {
    "Screen Replacement": "9,500 NGN", // 5.0" HD IPS display panel (Android One edition)
    "Glass Only Repair": "2,500 NGN",
    "Back Glass Replacement": "2,500 NGN", // Removable glossy plastic cover
    "Battery Replacement": "3,500 NGN", // 2200mAh removable power cell
    "Charging Port Repair": "2,000 NGN", // Micro-USB system interface
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "4,500 NGN", // 8MP primary shooter
    "Front Camera/FaceID Repair": "2,000 NGN", // 2MP camera module
    "Loudspeaker Repair": "2,000 NGN",
    "Microphone Repair": "2,000 NGN",
    "Headphone Jack Repair": "2,000 NGN",
    "Power/Volume Button Repair": "2,000 NGN",
    "Fingerprint/Home Button Repair": "N/A",
    "Water Damage Recovery": "3,500 NGN",
    "Motherboard Micro-Soldering": "9,000 NGN", // MediaTek MT6580 processor
    "Software/Bootloop Flashing": "3,000 NGN",
    "Data Recovery": "7,000 NGN",
    "Network/Carrier Unlocking": "3,000 NGN"
},
"Hot 3": {
    "Screen Replacement": "11,000 NGN", // 5.5" HD IPS screen layer
    "Glass Only Repair": "3,000 NGN",
    "Back Glass Replacement": "3,000 NGN", // Diamond-texture plastic back cover
    "Battery Replacement": "4,000 NGN", // 3000mAh battery block
    "Charging Port Repair": "2,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "5,000 NGN", // 8MP autofocus camera unit
    "Front Camera/FaceID Repair": "2,500 NGN", // 2MP wide selfie module with soft flash
    "Loudspeaker Repair": "2,500 NGN",
    "Microphone Repair": "2,000 NGN",
    "Headphone Jack Repair": "2,500 NGN",
    "Power/Volume Button Repair": "2,500 NGN",
    "Fingerprint/Home Button Repair": "N/A",
    "Water Damage Recovery": "4,000 NGN",
    "Motherboard Micro-Soldering": "10,000 NGN", // MediaTek MT6580 chipset logic
    "Software/Bootloop Flashing": "3,500 NGN",
    "Data Recovery": "8,000 NGN",
    "Network/Carrier Unlocking": "3,500 NGN"
},
"Hot 4": {
    "Screen Replacement": "13,000 NGN", // 5.5" HD IPS screen matrix
    "Glass Only Repair": "4,000 NGN",
    "Back Glass Replacement": "3,000 NGN", // Interchangeable 3D textured back plate
    "Battery Replacement": "4,500 NGN", // 4000mAh high-capacity battery cell
    "Charging Port Repair": "2,500 NGN", // Micro-USB charging logic board
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "5,500 NGN", // 8MP camera system
    "Front Camera/FaceID Repair": "3,000 NGN", // 5MP camera block with LED flash
    "Loudspeaker Repair": "2,500 NGN",
    "Microphone Repair": "2,500 NGN",
    "Headphone Jack Repair": "2,500 NGN",
    "Power/Volume Button Repair": "2,500 NGN",
    "Fingerprint/Home Button Repair": "4,000 NGN", // Rear-mounted fingerprint sensor assembly
    "Water Damage Recovery": "4,500 NGN",
    "Motherboard Micro-Soldering": "12,000 NGN", // MediaTek MT6580 hardware engine
    "Software/Bootloop Flashing": "3,500 NGN",
    "Data Recovery": "8,000 NGN",
    "Network/Carrier Unlocking": "3,500 NGN"
},
"Hot 4 Pro": {
    "Screen Replacement": "14,000 NGN", // 5.5" HD IPS display panel with upgraded glass protection
    "Glass Only Repair": "4,500 NGN",
    "Back Glass Replacement": "3,500 NGN",
    "Battery Replacement": "4,500 NGN", // 4000mAh battery unit
    "Charging Port Repair": "2,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "6,500 NGN", // Upgraded 13MP master camera module
    "Front Camera/FaceID Repair": "3,000 NGN", // 5MP camera block
    "Loudspeaker Repair": "2,500 NGN",
    "Microphone Repair": "2,500 NGN",
    "Headphone Jack Repair": "2,500 NGN",
    "Power/Volume Button Repair": "2,500 NGN",
    "Fingerprint/Home Button Repair": "4,000 NGN", // Rear biometric touch sensor
    "Water Damage Recovery": "4,500 NGN",
    "Motherboard Micro-Soldering": "13,000 NGN", // MediaTek MT6737 4G LTE platform
    "Software/Bootloop Flashing": "3,500 NGN",
    "Data Recovery": "9,000 NGN",
    "Network/Carrier Unlocking": "4,000 NGN"
},
"Hot 5": {
    "Screen Replacement": "14,000 NGN", // 5.5" HD IPS display structure
    "Glass Only Repair": "4,500 NGN",
    "Back Glass Replacement": "3,500 NGN", // Diamond-cut design plastic chassis back
    "Battery Replacement": "4,500 NGN", // 4000mAh power block
    "Charging Port Repair": "2,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "6,000 NGN", // 8MP main camera matrix
    "Front Camera/FaceID Repair": "3,000 NGN", // 5MP front shooter
    "Loudspeaker Repair": "3,000 NGN", // Dual front-facing stereo speakers
    "Microphone Repair": "2,500 NGN",
    "Headphone Jack Repair": "2,500 NGN",
    "Power/Volume Button Repair": "2,500 NGN",
    "Fingerprint/Home Button Repair": "4,000 NGN", // Rear fingerprint sensor assembly
    "Water Damage Recovery": "4,500 NGN",
    "Motherboard Micro-Soldering": "12,500 NGN", // MediaTek MT6580 hardware
    "Software/Bootloop Flashing": "3,500 NGN",
    "Data Recovery": "9,000 NGN",
    "Network/Carrier Unlocking": "4,000 NGN"
},
"Hot 5 Lite": {
    "Screen Replacement": "13,500 NGN", // 5.5" HD IPS display panel
    "Glass Only Repair": "4,000 NGN",
    "Back Glass Replacement": "3,000 NGN",
    "Battery Replacement": "4,500 NGN", // 4000mAh battery unit
    "Charging Port Repair": "2,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "5,500 NGN", // 8MP camera module
    "Front Camera/FaceID Repair": "3,000 NGN",
    "Loudspeaker Repair": "3,000 NGN", // Dual front-facing speaker modules
    "Microphone Repair": "2,500 NGN",
    "Headphone Jack Repair": "2,500 NGN",
    "Power/Volume Button Repair": "2,500 NGN",
    "Fingerprint/Home Button Repair": "N/A", // Biometric module removed for Lite tier
    "Water Damage Recovery": "4,500 NGN",
    "Motherboard Micro-Soldering": "11,500 NGN", // MediaTek MT6580 processor
    "Software/Bootloop Flashing": "3,500 NGN",
    "Data Recovery": "8,000 NGN",
    "Network/Carrier Unlocking": "3,500 NGN"
},
"Hot 6": {
    "Screen Replacement": "16,000 NGN", // 6.0" HD+ 18:9 Infinity display panel
    "Glass Only Repair": "5,000 NGN",
    "Back Glass Replacement": "4,000 NGN", // Sleek plastic unibody shell
    "Battery Replacement": "5,000 NGN", // 4000mAh integrated battery cell
    "Charging Port Repair": "3,000 NGN", // Micro-USB assembly sub-board
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "8,000 NGN", // 13MP primary module setup
    "Front Camera/FaceID Repair": "4,000 NGN", // 5MP front selfie block
    "Loudspeaker Repair": "3,000 NGN",
    "Microphone Repair": "2,500 NGN",
    "Headphone Jack Repair": "2,500 NGN",
    "Power/Volume Button Repair": "3,000 NGN",
    "Fingerprint/Home Button Repair": "4,500 NGN", // Rear structural fingerprint scanner
    "Water Damage Recovery": "5,000 NGN",
    "Motherboard Micro-Soldering": "14,000 NGN", // Snapdragon 425 framework (Rare variant) or MTK
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "10,000 NGN",
    "Network/Carrier Unlocking": "4,500 NGN"
},
"Hot 6 Pro": {
    "Screen Replacement": "17,500 NGN", // 6.0" HD+ 18:9 Infinity display panel
    "Glass Only Repair": "5,500 NGN",
    "Back Glass Replacement": "4,000 NGN",
    "Battery Replacement": "5,000 NGN", // 4000mAh battery unit
    "Charging Port Repair": "3,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "10,000 NGN", // 13MP + 2MP dual lens hardware configuration
    "Front Camera/FaceID Repair": "4,000 NGN", // 5MP module
    "Loudspeaker Repair": "3,000 NGN",
    "Microphone Repair": "2,500 NGN",
    "Headphone Jack Repair": "2,500 NGN",
    "Power/Volume Button Repair": "3,000 NGN",
    "Fingerprint/Home Button Repair": "4,500 NGN", // Rear biological layout reader
    "Water Damage Recovery": "5,000 NGN",
    "Motherboard Micro-Soldering": "15,000 NGN", // Qualcomm Snapdragon 425 processing core
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "11,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Hot 7": {
    "Screen Replacement": "18,000 NGN", // 6.2" HD+ notched display setup
    "Glass Only Repair": "6,000 NGN",
    "Back Glass Replacement": "4,000 NGN", // Plastic back plate assembly
    "Battery Replacement": "5,000 NGN", // 4000mAh structural battery pack
    "Charging Port Repair": "3,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "8,500 NGN", // 13MP primary sensor configuration
    "Front Camera/FaceID Repair": "4,500 NGN", // 8MP sensor punch setup
    "Loudspeaker Repair": "3,000 NGN",
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "3,000 NGN",
    "Power/Volume Button Repair": "3,000 NGN",
    "Fingerprint/Home Button Repair": "4,500 NGN", // Rear security fingerprint module
    "Water Damage Recovery": "5,000 NGN",
    "Motherboard Micro-Soldering": "15,000 NGN", // MediaTek MT6580P system platform
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "10,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Hot 7 Pro": {
    "Screen Replacement": "19,500 NGN", // 6.2" HD+ notched display module layout
    "Glass Only Repair": "6,500 NGN",
    "Back Glass Replacement": "4,500 NGN", // Metal-texture finish plastic back shell
    "Battery Replacement": "5,000 NGN", // 4000mAh power cell
    "Charging Port Repair": "3,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "11,000 NGN", // 13MP + 2MP dual camera layout alignment
    "Front Camera/FaceID Repair": "5,500 NGN", // 13MP + 2MP dual front camera matrix
    "Loudspeaker Repair": "3,000 NGN",
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "3,000 NGN",
    "Power/Volume Button Repair": "3,000 NGN",
    "Fingerprint/Home Button Repair": "4,500 NGN", // Rear touch biometric array
    "Water Damage Recovery": "5,000 NGN",
    "Motherboard Micro-Soldering": "16,500 NGN", // MediaTek Helio P22 4G processing core
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "5,500 NGN"
},
"Hot 8": {
    "Screen Replacement": "22,000 NGN", // 6.52" HD+ Waterdrop notch IPS display panel
    "Glass Only Repair": "7,000 NGN",
    "Back Glass Replacement": "4,500 NGN", // Gradient glossy plastic back housing
    "Battery Replacement": "5,500 NGN", // Expanded 5000mAh battery block unit
    "Charging Port Repair": "3,500 NGN", // Micro-USB port board system
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "11,500 NGN", // 13MP triple camera array matrix
    "Front Camera/FaceID Repair": "5,000 NGN", // 8MP waterdrop selfie module
    "Loudspeaker Repair": "3,500 NGN", // Sound output module with Dirac audio tuning
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "3,000 NGN",
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "5,000 NGN", // Rear round touch security sensor
    "Water Damage Recovery": "5,500 NGN",
    "Motherboard Micro-Soldering": "18,000 NGN", // MediaTek Helio P22 core computing unit
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "5,500 NGN"
},
"Hot 8 Lite": {
    "Screen Replacement": "22,000 NGN", // 6.52" HD+ Waterdrop notch display
    "Glass Only Repair": "7,000 NGN",
    "Back Glass Replacement": "4,500 NGN",
    "Battery Replacement": "5,500 NGN", // 5000mAh high capacity cell
    "Charging Port Repair": "3,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "9,000 NGN", // Standard 8MP dual camera matrix layout
    "Front Camera/FaceID Repair": "5,000 NGN", // 8MP selfie block
    "Loudspeaker Repair": "3,500 NGN",
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "3,000 NGN",
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "5,000 NGN", // Rear fingerprint sensor setup
    "Water Damage Recovery": "5,500 NGN",
    "Motherboard Micro-Soldering": "16,000 NGN", // MediaTek MT6580 system platform (3G version)
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "11,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Hot 9": {
    "Screen Replacement": "24,000 NGN", // 6.6" HD+ Infinity-O punch-hole assembly panel
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "5,000 NGN", // Gem-cut design plastic back cover
    "Battery Replacement": "6,000 NGN", // 5000mAh internal battery unit
    "Charging Port Repair": "3,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "13,000 NGN", // 16MP quad-camera matrix block
    "Front Camera/FaceID Repair": "5,500 NGN", // 8MP punch-hole camera module
    "Loudspeaker Repair": "3,500 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,000 NGN",
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "5,000 NGN", // Rear physical fingerprint assembly
    "Water Damage Recovery": "6,000 NGN",
    "Motherboard Micro-Soldering": "19,500 NGN", // MediaTek Helio A25 engine unit
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Hot 9 Play": {
    "Screen Replacement": "25,000 NGN", // Larger 6.82" Cinematic waterdrop display module
    "Glass Only Repair": "8,500 NGN",
    "Back Glass Replacement": "5,000 NGN",
    "Battery Replacement": "6,500 NGN", // Massive structural 6000mAh capacity cell
    "Charging Port Repair": "3,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "10,000 NGN", // 13MP dual camera layout align
    "Front Camera/FaceID Repair": "5,500 NGN", // 8MP front module structure
    "Loudspeaker Repair": "3,500 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,000 NGN",
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "5,000 NGN", // Rear touch biological sensor layout
    "Water Damage Recovery": "6,000 NGN",
    "Motherboard Micro-Soldering": "19,000 NGN", // MediaTek Helio A22 or Helio A25 variant architecture
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Hot 9 Pro": {
    "Screen Replacement": "24,000 NGN", // 6.6" HD+ Infinity-O punch-hole assembly panel
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "5,500 NGN", // Premium glossy plastic cover plate
    "Battery Replacement": "6,000 NGN", // 5000mAh power block
    "Charging Port Repair": "3,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "16,000 NGN", // Upgraded 48MP quad camera master setup
    "Front Camera/FaceID Repair": "5,500 NGN", // 8MP punch-hole camera module
    "Loudspeaker Repair": "3,500 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,000 NGN",
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "5,000 NGN",
    "Water Damage Recovery": "6,000 NGN",
    "Motherboard Micro-Soldering": "21,000 NGN", // MediaTek Helio P22 platform architecture
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "6,500 NGN"
},
"Hot 10": {
    "Screen Replacement": "27,000 NGN", // 6.78" HD+ Infinity-O display construction board
    "Glass Only Repair": "9,000 NGN",
    "Back Glass Replacement": "5,500 NGN", // Geometric wave pattern plastic casing
    "Battery Replacement": "6,500 NGN", // 5200mAh deep-drain battery system
    "Charging Port Repair": "4,000 NGN", // Micro-USB port routing sub-board
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "14,500 NGN", // 16MP quad sensor arrangement frame
    "Front Camera/FaceID Repair": "6,000 NGN", // 8MP punch-hole selfie camera block
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,500 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN", // Rear tactile fingerprint module
    "Water Damage Recovery": "6,500 NGN",
    "Motherboard Micro-Soldering": "23,000 NGN", // MediaTek Helio G70 gaming platform
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "6,500 NGN"
},
"Hot 10i": {
    "Screen Replacement": "26,000 NGN", // 6.52" HD+ Waterdrop display panel layout
    "Glass Only Repair": "8,500 NGN",
    "Back Glass Replacement": "5,000 NGN",
    "Battery Replacement": "6,500 NGN", // 6000mAh oversized capacity cell
    "Charging Port Repair": "4,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "12,000 NGN", // 13MP dual sensor block layout
    "Front Camera/FaceID Repair": "5,500 NGN", // 5MP front selfie configuration
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,500 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN", // Rear fingerprint reading plate
    "Water Damage Recovery": "6,500 NGN",
    "Motherboard Micro-Soldering": "22,000 NGN", // MediaTek Helio P65 core system architecture
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "6,500 NGN"
},
"Hot 10 Lite": {
    "Screen Replacement": "25,000 NGN", // 6.6" HD+ Waterdrop notch display block
    "Glass Only Repair": "8,500 NGN",
    "Back Glass Replacement": "5,000 NGN",
    "Battery Replacement": "6,000 NGN", // 5000mAh internal battery unit
    "Charging Port Repair": "4,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "11,000 NGN", // 13MP triple camera sensor frame
    "Front Camera/FaceID Repair": "5,500 NGN", // 8MP selfie block configuration
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,500 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN", // Rear physical structural sensor key
    "Water Damage Recovery": "6,500 NGN",
    "Motherboard Micro-Soldering": "20,000 NGN", // MediaTek Helio A20 processor hardware
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Hot 10 Play": {
    "Screen Replacement": "28,000 NGN", // 6.82" HD+ IPS waterdrop giant display panel
    "Glass Only Repair": "9,000 NGN",
    "Back Glass Replacement": "5,500 NGN", // Glaze design plastic panel wrap
    "Battery Replacement": "6,500 NGN", // 6000mAh deep-cycle long run power cell
    "Charging Port Repair": "4,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "12,000 NGN", // 13MP dual sensor system frame
    "Front Camera/FaceID Repair": "6,000 NGN", // 8MP front module layout
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,500 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN", // Rear physical biometric matrix chip
    "Water Damage Recovery": "6,500 NGN",
    "Motherboard Micro-Soldering": "22,500 NGN", // MediaTek Helio G25 or Helio G35 engine unit
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "6,500 NGN"
},
"Hot 10S": {
    "Screen Replacement": "30,000 NGN", // 6.82" 90Hz smooth dynamic refresh LCD structural screen
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "6,000 NGN", // Diamond design pattern backing cover
    "Battery Replacement": "6,500 NGN", // 6000mAh energy battery block setup
    "Charging Port Repair": "4,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "16,500 NGN", // 48MP triple AI camera sensor configuration
    "Front Camera/FaceID Repair": "6,500 NGN", // 8MP punch setup configuration
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "3,500 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN", // Rear touch biometric frame array
    "Water Damage Recovery": "7,000 NGN",
    "Motherboard Micro-Soldering": "25,000 NGN", // MediaTek Helio G85 system architecture core
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "7,000 NGN"
},
"Hot 10T": {
    "Screen Replacement": "30,000 NGN", // 6.82" 90Hz refresh display screen configuration
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "6,000 NGN",
    "Battery Replacement": "6,000 NGN", // 5000mAh battery block build
    "Charging Port Repair": "4,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "16,500 NGN", // 48MP primary triple setup matrix
    "Front Camera/FaceID Repair": "6,500 NGN",
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "3,500 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN",
    "Water Damage Recovery": "7,000 NGN",
    "Motherboard Micro-Soldering": "25,000 NGN", // MediaTek Helio G85 computing core engine
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "7,000 NGN"
},
"Hot 11": {
    "Screen Replacement": "32,000 NGN", // 6.6" FHD+ IPS display module setup (Upgraded resolution)
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "6,000 NGN", // Wave pattern plastic rear chassis plate
    "Battery Replacement": "6,500 NGN", // 5200mAh internal battery block layout
    "Charging Port Repair": "4,500 NGN", // Transition to USB Type-C interface board
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "14,000 NGN", // 13MP dual sensor array setup
    "Front Camera/FaceID Repair": "6,500 NGN", // 8MP waterdrop display notch sensor
    "Loudspeaker Repair": "4,500 NGN", // Stereo configuration modules structure
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN", // Rear touch sensor assembly unit
    "Water Damage Recovery": "7,000 NGN",
    "Motherboard Micro-Soldering": "26,000 NGN", // MediaTek Helio G88 engine architecture
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "7,500 NGN"
},
"Hot 11 Play": {
    "Screen Replacement": "30,000 NGN", // 6.82" HD+ IPS waterdrop display system
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "6,000 NGN",
    "Battery Replacement": "6,500 NGN", // 6000mAh heavy duty energy pack
    "Charging Port Repair": "4,000 NGN", // Micro-USB layout connector assembly
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "12,000 NGN", // 13MP dual AI camera sensor assembly
    "Front Camera/FaceID Repair": "6,000 NGN",
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "3,500 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN", // Rear physical structural layout sensor
    "Water Damage Recovery": "7,000 NGN",
    "Motherboard Micro-Soldering": "24,000 NGN", // MediaTek Helio G35 engine processor block
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "7,000 NGN"
},
"Hot 11S": {
    "Screen Replacement": "34,000 NGN", // 6.78" 90Hz FHD+ Punch-hole smooth performance LCD
    "Glass Only Repair": "11,000 NGN",
    "Back Glass Replacement": "6,500 NGN", // Wave metallic pattern plastic backing card
    "Battery Replacement": "6,000 NGN", // 5000mAh structural battery core
    "Charging Port Repair": "4,500 NGN", // USB Type-C performance charge block
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "18,000 NGN", // Upgraded 50MP main sensor setup array
    "Front Camera/FaceID Repair": "7,000 NGN", // 8MP central punch-hole camera system
    "Loudspeaker Repair": "5,000 NGN", // Dual cinematic stereo speaker systems
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Side-integrated physical touch hardware key
    "Water Damage Recovery": "7,500 NGN",
    "Motherboard Micro-Soldering": "28,000 NGN", // MediaTek Helio G88 performance processor core
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Hot 12": {
    "Screen Replacement": "34,000 NGN", // 6.82" 90Hz HD+ high refresh display infrastructure
    "Glass Only Repair": "11,000 NGN",
    "Back Glass Replacement": "6,500 NGN", // Glossy look composite structural plastic chassis
    "Battery Replacement": "6,000 NGN", // 5000mAh capacity system power cell
    "Charging Port Repair": "4,500 NGN", // USB Type-C interface board assembly
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "15,000 NGN", // 13MP triple camera array alignment
    "Front Camera/FaceID Repair": "7,000 NGN", // 8MP center punch setup layout
    "Loudspeaker Repair": "4,500 NGN", // Dual stereo configuration speaker blocks
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Side-frame touch sensor reader configuration
    "Water Damage Recovery": "7,500 NGN",
    "Motherboard Micro-Soldering": "28,000 NGN", // MediaTek Helio G85 architecture board
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Hot 12 Play": {
    "Screen Replacement": "32,000 NGN", // 6.82" 90Hz HD+ Punch-hole LCD screen panel
    "Glass Only Repair": "11,000 NGN",
    "Back Glass Replacement": "6,000 NGN",
    "Battery Replacement": "6,500 NGN", // Huge 6000mAh ultra capacity battery block
    "Charging Port Repair": "4,500 NGN", // USB Type-C board interface
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "13,000 NGN", // 13MP dual sensor assembly matrix
    "Front Camera/FaceID Repair": "7,000 NGN",
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN", // Rear touch biometric scanner unit
    "Water Damage Recovery": "7,500 NGN",
    "Motherboard Micro-Soldering": "26,000 NGN", // MediaTek Helio G35 or Unisoc T610 chip platform
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "7,500 NGN"
},
"Hot 12 Pro": {
    "Screen Replacement": "34,000 NGN", // 6.6" 90Hz smooth action LCD interface matrix
    "Glass Only Repair": "11,000 NGN",
    "Back Glass Replacement": "6,500 NGN", // Matte look structural polycarbonate shell plate
    "Battery Replacement": "6,000 NGN", // 5000mAh capacity system cell unit
    "Charging Port Repair": "4,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "18,000 NGN", // 50MP primary dual camera configuration module
    "Front Camera/FaceID Repair": "7,000 NGN",
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN", // Rear circular layout tactile sensor
    "Water Damage Recovery": "7,500 NGN",
    "Motherboard Micro-Soldering": "28,000 NGN", // Unisoc Tiger T616 master computing platform
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Hot 20": {
    "Screen Replacement": "36,000 NGN", // 6.82" 90Hz punch-hole fluid tracking screen
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "7,000 NGN", // Sonic design plastic back cover layout
    "Battery Replacement": "6,500 NGN", // 5000mAh fast-charge structural battery core
    "Charging Port Repair": "5,000 NGN", // Type-C structural sub-board assembly module
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "20,000 NGN", // 50MP super nightscape main lens block
    "Front Camera/FaceID Repair": "7,500 NGN", // 8MP front focus camera setup
    "Loudspeaker Repair": "4,500 NGN", // Dual stereo configuration speaker systems
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN", // Side-integrated physical touch hardware key
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "30,000 NGN", // MediaTek Helio G85 performance chip engine
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "8,500 NGN"
},
"Hot 20i": {
    "Screen Replacement": "32,000 NGN", // 6.6" HD+ high-brightness IPS display module
    "Glass Only Repair": "11,000 NGN",
    "Back Glass Replacement": "6,000 NGN",
    "Battery Replacement": "6,000 NGN", // 5000mAh standard power pack build
    "Charging Port Repair": "4,500 NGN", // Micro-USB port board interface structure
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "13,000 NGN", // 13MP triple camera layout matrix
    "Front Camera/FaceID Repair": "7,000 NGN", // 8MP waterdrop setup layout
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN", // Rear fingerprint tactile plate reader
    "Water Damage Recovery": "7,500 NGN",
    "Motherboard Micro-Soldering": "26,000 NGN", // MediaTek Helio G25 system architecture framework
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "7,500 NGN"
},
"Hot 20 Play": {
    "Screen Replacement": "35,000 NGN", // 6.82" 90Hz punch-hole broad display assembly
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "6,500 NGN",
    "Battery Replacement": "6,500 NGN", // Massive structural 6000mAh capacity cell
    "Charging Port Repair": "5,000 NGN", // Type-C layout connector module assembly
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "13,000 NGN", // 13MP dual sensor tracking assembly
    "Front Camera/FaceID Repair": "7,500 NGN",
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN", // Rear touch biological sensor assembly plate
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "28,000 NGN", // MediaTek Helio G37 engine platform build
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Hot 20S": {
    "Screen Replacement": "38,000 NGN", // 6.78" HyperVision 120Hz FHD+ premium gaming LCD display
    "Glass Only Repair": "13,000 NGN",
    "Back Glass Replacement": "7,500 NGN", // Light-shifting design plastic cover array
    "Battery Replacement": "6,500 NGN", // 5000mAh performance battery architecture
    "Charging Port Repair": "5,000 NGN", // Type-C structural sub-board assembly matrix
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "22,000 NGN", // 50MP triple lens layout array structure
    "Front Camera/FaceID Repair": "8,000 NGN", // 8MP camera system punch layout
    "Loudspeaker Repair": "5,000 NGN", // Dual stereo speakers tuned with DTS tech
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN", // Side mechanical touch biometric matrix chip
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "32,000 NGN", // MediaTek Helio G96 specialized gaming core engine
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "8,500 NGN"
},
"Hot 30": {
    "Screen Replacement": "40,000 NGN", // 6.78" 90Hz FHD+ high-tier brightness screen matrix
    "Glass Only Repair": "14,000 NGN",
    "Back Glass Replacement": "8,000 NGN", // Shimmering glass-like plastic back plate array
    "Battery Replacement": "7,000 NGN", // 5000mAh battery unit supporting 33W charge speed
    "Charging Port Repair": "5,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "24,000 NGN", // 50MP Hires dual system layout sensor
    "Front Camera/FaceID Repair": "8,000 NGN", // 8MP punch hole front tracking block
    "Loudspeaker Repair": "5,000 NGN", // Dual stereo configuration speaker systems
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN", // Side-frame touch sensor architecture module
    "Water Damage Recovery": "8,500 NGN",
    "Motherboard Micro-Soldering": "32,000 NGN", // MediaTek Helio G88 engine block module
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "8,500 NGN"
},
"Hot 30i": {
    "Screen Replacement": "34,000 NGN", // 6.56" 90Hz HD+ fluid tracking display panel
    "Glass Only Repair": "11,000 NGN",
    "Back Glass Replacement": "6,500 NGN", // Diamond-cut look plastic cover matrix
    "Battery Replacement": "6,500 NGN", // 5000mAh long duration capacity block
    "Charging Port Repair": "5,000 NGN", // Type-C structural sub-board layout
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "15,000 NGN", // 13MP dual sensor tracking assembly
    "Front Camera/FaceID Repair": "7,500 NGN", // 8MP camera setup punch configuration
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Side mechanical touch hardware key element
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "28,000 NGN", // MediaTek Helio G37 or Unisoc T606 layout core
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Hot 30 Play": {
    "Screen Replacement": "36,000 NGN", // 6.82" 90Hz broad fluid tracking screen build
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "7,000 NGN",
    "Battery Replacement": "7,000 NGN", // Massive structural 6000mAh high performance cell
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "14,000 NGN", // 16MP dual sensor system tracking panel
    "Front Camera/FaceID Repair": "7,500 NGN",
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Side frame touch sensor structural matrix
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "28,000 NGN", // MediaTek Helio G37 engine platform build
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Hot 40": {
    "Screen Replacement": "42,000 NGN", // 6.78" 90Hz FHD+ Punch-hole screen structure setup
    "Glass Only Repair": "14,000 NGN",
    "Back Glass Replacement": "9,000 NGN", // Starry design plastic rear cover layout panel
    "Battery Replacement": "7,500 NGN", // 5000mAh performance capacity block core with 33W
    "Charging Port Repair": "5,500 NGN", // USB Type-C high power connector layout
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "26,000 NGN", // 50MP triple sensor system alignment build
    "Front Camera/FaceID Repair": "9,000 NGN", // 32MP hole punch advanced selfie camera layout
    "Loudspeaker Repair": "5,000 NGN", // Dual stereo configuration tracking audio setup
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "8,500 NGN", // Side frame touch biometric system sensor block
    "Water Damage Recovery": "9,000 NGN",
    "Motherboard Micro-Soldering": "34,000 NGN", // MediaTek Helio G88 core processor hub logic
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "9,000 NGN"
},
"Hot 40 Pro": {
    "Screen Replacement": "44,000 NGN", // Upgraded 6.78" 120Hz FHD+ hyper-smooth performance display
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "10,000 NGN", // High glow protective composite back cover
    "Battery Replacement": "7,500 NGN", // 5000mAh performance battery component
    "Charging Port Repair": "5,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "30,000 NGN", // High performance 108MP triple camera layout module
    "Front Camera/FaceID Repair": "9,000 NGN", // 32MP crystal punch layout front module unit
    "Loudspeaker Repair": "5,000 NGN", // Dual stereo design speakers with Metamaterial tech
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "8,500 NGN", // Side frame touch sensor element matrix
    "Water Damage Recovery": "9,000 NGN",
    "Motherboard Micro-Soldering": "36,000 NGN", // MediaTek Helio G99 gaming processor engine block
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "9,500 NGN"
},
"Hot 40i": {
    "Screen Replacement": "36,000 NGN", // 6.56" 90Hz fluid punch layout screen module
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "7,500 NGN",
    "Battery Replacement": "7,000 NGN", // 5000mAh power battery structure pack
    "Charging Port Repair": "5,000 NGN", // Type-C structural sub-board setup
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "20,000 NGN", // 50MP primary dual setup matrix module
    "Front Camera/FaceID Repair": "9,000 NGN", // 32MP crystal punch setup camera unit
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN", // Side mechanical touch biometric sensor chip
    "Water Damage Recovery": "8,500 NGN",
    "Motherboard Micro-Soldering": "30,000 NGN", // Unisoc Tiger T606 engine hardware layout unit
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "8,500 NGN"
},
"Hot 50": {
    "Screen Replacement": "44,000 NGN", // 6.78" 120Hz IPS flat dynamic panel architecture
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "9,500 NGN", // Premium slim plastic back shell casing
    "Battery Replacement": "8,000 NGN", // 5000mAh structural battery core block
    "Charging Port Repair": "6,000 NGN", // Type-C core structural port assembly
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "26,000 NGN", // 50MP Sony main sensor system frame
    "Front Camera/FaceID Repair": "8,000 NGN", // 8MP punch hole selfie tracking unit
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "8,500 NGN", // Side-integrated mechanical touch scanner
    "Water Damage Recovery": "9,000 NGN", // IP54 dust tight and splash proof casing
    "Motherboard Micro-Soldering": "36,000 NGN", // MediaTek Helio G100 4nm architecture system
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "9,000 NGN"
},
"Hot 50i": {
    "Screen Replacement": "38,000 NGN", // 6.7" 120Hz fluid dynamic tracking screen panel
    "Glass Only Repair": "13,000 NGN",
    "Back Glass Replacement": "8,000 NGN",
    "Battery Replacement": "7,500 NGN", // 5000mAh standard power cell configuration
    "Charging Port Repair": "5,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "22,000 NGN", // 48MP primary sensor matrix module
    "Front Camera/FaceID Repair": "8,000 NGN", // 8MP front focus camera setup
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN", // Side mechanical touch biometric chip setup
    "Water Damage Recovery": "8,500 NGN", // IP54 defensive protective fluid shell
    "Motherboard Micro-Soldering": "32,000 NGN", // MediaTek Helio G81 system platform engine
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "8,500 NGN"
},
"Hot 50 Pro": {
    "Screen Replacement": "46,000 NGN", // 6.78" 120Hz premium smooth display system configuration
    "Glass Only Repair": "16,000 NGN",
    "Back Glass Replacement": "11,000 NGN", // Ultra slim sleek plastic composite backplate
    "Battery Replacement": "8,000 NGN", // 5000mAh high performance cell structure
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "28,000 NGN", // 50MP upgraded primary sensor layout module
    "Front Camera/FaceID Repair": "9,000 NGN", // 13MP central punch setup camera module
    "Loudspeaker Repair": "5,500 NGN", // Stereo configuration speaker setups
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "9,000 NGN", // Side integrated touch sensor setup array
    "Water Damage Recovery": "9,000 NGN", // IP54 dust and splash proof structural barrier
    "Motherboard Micro-Soldering": "38,000 NGN", // MediaTek Helio G100 performance engine platform
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "24,000 NGN",
    "Network/Carrier Unlocking": "9,500 NGN"
},
"Hot 50 Pro+": {
    "Screen Replacement": "54,000 NGN", // Premium 3D Curved 120Hz AMOLED ultra-slim panel configuration
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "13,000 NGN", // Feather-light structural premium gaming back plate
    "Battery Replacement": "8,500 NGN", // 5000mAh high-density thin profile battery core
    "Charging Port Repair": "6,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "30,000 NGN", // 50MP high tier triple camera lens configuration
    "Front Camera/FaceID Repair": "10,000 NGN", // 13MP elite dynamic front tracking shooter
    "Loudspeaker Repair": "5,500 NGN", // Dual stereo configuration components
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "Contact for Quote", // Removed 3.5mm hardware port for slim profile
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "9,500 NGN", // Advanced under-screen optical reading module
    "Water Damage Recovery": "9,500 NGN", // IP54 advanced defensive structural liquid seal
    "Motherboard Micro-Soldering": "42,000 NGN", // MediaTek Helio G100 4nm advanced architecture
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "26,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Hot 60": {
    "Screen Replacement": "48,000 NGN", // 6.78" 144Hz high tier dynamic liquid LCD structural layout
    "Glass Only Repair": "16,000 NGN",
    "Back Glass Replacement": "11,000 NGN", // Cyberpunk Mecha-aesthetic hard polycarbonate cover
    "Battery Replacement": "8,500 NGN", // 5500mAh expanded high performance cell matrix
    "Charging Port Repair": "6,500 NGN", // USB Type-C performance fast routing hardware panel
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "30,000 NGN", // 50MP primary dual setup matrix system block
    "Front Camera/FaceID Repair": "10,000 NGN", // 16MP wide angle central punch setup system
    "Loudspeaker Repair": "5,500 NGN", // Dual speakers system configuration
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "4,500 NGN",
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "9,000 NGN", // Side-integrated touch sensor core module
    "Water Damage Recovery": "10,000 NGN", // IP64 dust tight and splash protective casing
    "Motherboard Micro-Soldering": "40,000 NGN", // MediaTek Dimensity 6300 platform next-gen layout
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "26,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Hot 60i": {
    "Screen Replacement": "42,000 NGN", // 6.67" 120Hz punch layout dynamic view display board
    "Glass Only Repair": "14,000 NGN",
    "Back Glass Replacement": "9,000 NGN",
    "Battery Replacement": "8,000 NGN", // 5000mAh standard power capacity pack core
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "24,000 NGN", // 50MP dual lens layout sensor array setup
    "Front Camera/FaceID Repair": "9,000 NGN", // 8MP central punch layout front module unit
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "8,500 NGN", // Side mechanical touch biometric matrix module
    "Water Damage Recovery": "9,500 NGN", // IP54 defensive protective fluid shell structure
    "Motherboard Micro-Soldering": "35,000 NGN", // MediaTek Helio G100 entry-optimized computing processor
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "9,000 NGN"
},
"Hot 60 Pro": {
    "Screen Replacement": "52,000 NGN", // Premium 6.78" 120Hz AMOLED system layout panel matrix
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "12,000 NGN", // Gorilla Glass protective gaming rear design panel
    "Battery Replacement": "9,000 NGN", // 5500mAh fast-charge structural battery block cell
    "Charging Port Repair": "6,500 NGN",
    "Wireless Charging Repair": "Contact for Quote",
    "Rear Camera Repair": "32,000 NGN", // 108MP main lens array layout module with OIS
    "Front Camera/FaceID Repair": "11,000 NGN", // 32MP crystal punch setup camera unit module
    "Loudspeaker Repair": "6,000 NGN", // Stereo configuration modules tuned by JBL
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "Contact for Quote", // Removed 3.5mm audio jack
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "9,500 NGN", // Under-screen optical structural reader matrix
    "Water Damage Recovery": "10,000 NGN", // IP64 advanced dust/water protective sealing boundaries
    "Motherboard Micro-Soldering": "44,000 NGN", // MediaTek Dimensity 7300 Ultimate computing unit core
    "Software/Bootloop Flashing": "8,500 NGN",
    "Data Recovery": "28,000 NGN",
    "Network/Carrier Unlocking": "10,500 NGN"
},
"Hot 60 Pro+": {
    "Screen Replacement": "58,000 NGN", // Premium 3D Curved 144Hz AMOLED elite tier display screen
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "14,000 NGN", // High tier eco-leather or specialized composite backing
    "Battery Replacement": "9,500 NGN", // 6000mAh structural ultra-capacity cell module array
    "Charging Port Repair": "7,000 NGN", // Ultra charge multi-channel Type-C processing board
    "Wireless Charging Repair": "15,000 NGN", // Native 25W wireless charging receiver sub-board coil
    "Rear Camera Repair": "36,000 NGN", // Elite 108MP main setup + 50MP wide secondary matrix block
    "Front Camera/FaceID Repair": "12,000 NGN", // Center-aligned 32MP high performance selfie tracker
    "Loudspeaker Repair": "6,000 NGN", // Stereo dual sound field blocks tuned by JBL
    "Microphone Repair": "5,500 NGN",
    "Headphone Jack Repair": "Contact for Quote", // Missing 3.5mm audio jack
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "10,000 NGN", // Under-display advanced biological layout sensor matrix
    "Water Damage Recovery": "11,000 NGN", // High tier chassis protective fluid barrier sealing strip
    "Motherboard Micro-Soldering": "48,000 NGN", // MediaTek Dimensity 8200 Ultimate processing computing system
    "Software/Bootloop Flashing": "9,000 NGN",
    "Data Recovery": "30,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
//SMART series
"Smart": {
    "Screen Replacement": "12,000 NGN", // Legacy 5.0-inch 16:9 TFT LCD standard display screen
    "Glass Only Repair": "5,000 NGN",
    "Back Glass Replacement": "3,500 NGN", // Removable textured polycarbonate plastic battery cover
    "Battery Replacement": "4,500 NGN", // 3060mAh removable lithium-ion cell pack
    "Charging Port Repair": "3,000 NGN", // Legacy Micro-USB 5-pin charging interface port
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "5,000 NGN", // Basic 8MP single primary rear camera module
    "Front Camera/FaceID Repair": "3,500 NGN", // Standard 2MP front-facing selfie camera sensor
    "Loudspeaker Repair": "3,000 NGN", // Rear-mounted mono audio speaker driver block
    "Microphone Repair": "2,500 NGN",
    "Headphone Jack Repair": "3,000 NGN", // Legacy 3.5mm analog audio jack interface port
    "Power/Volume Button Repair": "3,000 NGN",
    "Fingerprint/Home Button Repair": "N/A", // Device lacks biometric fingerprint authentication hardware
    "Water Damage Recovery": "4,000 NGN", // Basic chassis cleaning and moisture decontamination service
    "Motherboard Micro-Soldering": "10,000 NGN", // MediaTek MT6580 legacy 32-bit core logic board architecture
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "10,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Smart 2": {
    "Screen Replacement": "13,500 NGN", // Flat 5.5-inch 18:9 HD IPS LCD display screen
    "Glass Only Repair": "5,500 NGN",
    "Back Glass Replacement": "4,000 NGN", // Matte finished polycarbonate plastic removable backing
    "Battery Replacement": "5,000 NGN", // 3050mAh standard internal lithium-ion battery cell
    "Charging Port Repair": "3,000 NGN", // Legacy Micro-USB 5-pin interface charging port
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "6,000 NGN", // Standard 13MP single rear camera lens module
    "Front Camera/FaceID Repair": "4,000 NGN", // Standard 8MP front selfie camera with dual-LED flash
    "Loudspeaker Repair": "3,000 NGN", // Rear-firing mono loudspeaker driver element
    "Microphone Repair": "2,500 NGN",
    "Headphone Jack Repair": "3,000 NGN", // Top-mounted 3.5mm analog audio jack interface
    "Power/Volume Button Repair": "3,000 NGN",
    "Fingerprint/Home Button Repair": "4,000 NGN", // Rear-mounted capacitive physical fingerprint sensor (variant specific)
    "Water Damage Recovery": "4,500 NGN", // Standard chassis moisture extraction and cleaning service
    "Motherboard Micro-Soldering": "12,000 NGN", // MediaTek MT6739 quad-core entry-level logic board system
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "10,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Smart 3": {
    "Screen Replacement": "14,500 NGN", // Flat 5.5-inch 18:9 aspect ratio standard IPS LCD screen
    "Glass Only Repair": "6,000 NGN",
    "Back Glass Replacement": "4,500 NGN", // Glossy look polycarbonate plastic backing panel
    "Battery Replacement": "5,500 NGN", // 3050mAh integrated lithium polymer battery pack
    "Charging Port Repair": "3,500 NGN", // Standard Micro-USB 5-pin charging processing board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "6,500 NGN", // Dual 13MP main sensor + depth helper camera module
    "Front Camera/FaceID Repair": "4,500 NGN", // Top-bezel 8MP standard selfie camera tracker
    "Loudspeaker Repair": "3,500 NGN", // Bottom-firing entry-tier mono speaker block
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "3,000 NGN", // Legacy 3.5mm auxiliary analog audio interface
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "4,500 NGN", // Rear capacitive circular fingerprint scanner module
    "Water Damage Recovery": "5,000 NGN", // Standard liquid decontamination and ultrasonic board wash
    "Motherboard Micro-Soldering": "14,000 NGN", // MediaTek Helio A22 processing core system logic board
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Smart 4": {
    "Screen Replacement": "15,500 NGN", // Waterdrop 6.6-inch HD+ IPS LCD narrow-bezel display screen
    "Glass Only Repair": "6,500 NGN",
    "Back Glass Replacement": "4,500 NGN", // Gradient textured polycarbonate plastic backing piece
    "Battery Replacement": "6,000 NGN", // 4000mAh high-capacity long-life battery cell module
    "Charging Port Repair": "3,500 NGN", // Standard Micro-USB interface charging sub-board unit
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "7,000 NGN", // Dual 8MP main camera + QVGA depth matrix block
    "Front Camera/FaceID Repair": "5,000 NGN", // Waterdrop-notch 5MP standard selfie camera module
    "Loudspeaker Repair": "3,500 NGN", // Frame-integrated single mono loudspeaker block
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "3,500 NGN", // Lower frame 3.5mm analog head-set interface port
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "4,500 NGN", // Rear physical capacitive fingerprint sensor matrix flex
    "Water Damage Recovery": "5,000 NGN", // Entry-tier drying, strip-down, and chemical board cleaning
    "Motherboard Micro-Soldering": "15,000 NGN", // MediaTek Helio A22 budget architecture processing board
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Smart 5": {
    "Screen Replacement": "16,500 NGN", // Waterdrop 6.6-inch HD+ IPS LCD mass-market display screen
    "Glass Only Repair": "7,000 NGN",
    "Back Glass Replacement": "5,000 NGN", // Gem-cut design polycarbonate plastic structural back panel
    "Battery Replacement": "6,500 NGN", // 5000mAh ultra-capacity single-cell battery matrix array
    "Charging Port Repair": "3,500 NGN", // Bottom Micro-USB charging rib sub-board plate
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "8,000 NGN", // Triple 13MP primary sensor + dual auxiliary light-capture blocks
    "Front Camera/FaceID Repair": "5,500 NGN", // Notch-integrated 8MP standard front camera unit
    "Loudspeaker Repair": "4,000 NGN", // Standard bottom-edge mono sound speaker block
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "3,500 NGN", // Bottom-aligned 3.5mm auxiliary audio connection interface
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "5,000 NGN", // Rear-mounted central biometric capacitive fingerprint reader
    "Water Damage Recovery": "5,500 NGN", // Interior structural moisture clearance and shield cleaning
    "Motherboard Micro-Soldering": "17,000 NGN", // MediaTek Helio A20 / Helio G25 entry computing system board
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Smart 6": {
    "Screen Replacement": "17,500 NGN", // Waterdrop 6.6-inch HD+ high-brightness IPS LCD display panel
    "Glass Only Repair": "7,500 NGN",
    "Back Glass Replacement": "5,000 NGN", // Antibacterial textured composite polycarbonate backing board
    "Battery Replacement": "6,800 NGN", // 5000mAh standard structural energy storage module
    "Charging Port Repair": "4,000 NGN", // Enhanced Micro-USB charging port and microphone node plate
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "9,000 NGN", // Dual 8MP primary lens + AI companion focus camera block
    "Front Camera/FaceID Repair": "5,500 NGN", // Center waterdrop 5MP budget selfie sensor array
    "Loudspeaker Repair": "4,000 NGN", // DTS audio processing mono loudspeaker driver unit
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "3,500 NGN", // Base-frame 3.5mm high-conductivity headphone socket
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "5,000 NGN", // Rear-center fingerprint biological recognition flex assembly
    "Water Damage Recovery": "5,500 NGN", // Frame-level fluid clean-out and component chemical drying
    "Motherboard Micro-Soldering": "18,500 NGN", // Unisoc SC9863A multi-core entry level processing mainboard
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "13,000 NGN",
    "Network/Carrier Unlocking": "7,000 NGN"
},
"Smart 7": {
    "Screen Replacement": "19,000 NGN", // Waterdrop 6.6-inch HD+ structural IPS LCD display panel
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "5,500 NGN", // 3D textured antibacterial wave pattern plastic back cover
    "Battery Replacement": "7,000 NGN", // 5000mAh structural density single-cell power module
    "Charging Port Repair": "4,000 NGN", // Reinforced Micro-USB high-current charging receiver sub-board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "10,500 NGN", // Dual 13MP clear-imaging lens + depth field camera block
    "Front Camera/FaceID Repair": "5,500 NGN", // Front notch-bound 5MP standard selfie imaging array
    "Loudspeaker Repair": "4,000 NGN", // Standard sound field mono output speaker module
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,500 NGN", // Integrated 3.5mm multi-pole analog sound jack port
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN", // Fingerprint scanner integrated into rear camera housing block
    "Water Damage Recovery": "6,000 NGN", // Interior chassis protective moisture sweep and trace treatment
    "Motherboard Micro-Soldering": "20,000 NGN", // MediaTek Helio A22 / Unisoc SC9863A main logical unit
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "7,000 NGN"
},
"Smart 8": {
    "Screen Replacement": "20,500 NGN", // Punch-Hole 6.6-inch 90Hz fluid refresh IPS LCD screen
    "Glass Only Repair": "8,500 NGN",
    "Back Glass Replacement": "6,000 NGN", // Vibrant timber-textured composite polymer backing sheet
    "Battery Replacement": "7,200 NGN", // 5000mAh high-density Type-C matched battery block
    "Charging Port Repair": "4,500 NGN", // Upgraded single-channel Type-C processing sub-board module
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "12,000 NGN", // Dual 13MP ring-flash layout main lens processing module
    "Front Camera/FaceID Repair": "6,000 NGN", // Magic Ring interactive 8MP centered selfie punch-hole unit
    "Loudspeaker Repair": "4,500 NGN", // 200% Super Volume boost mono speaker output driver
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Bottom-lip 3.5mm classic stereo headphone connector module
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN", // Side-frame capacitive integrated fingerprint power button flex
    "Water Damage Recovery": "6,000 NGN", // Basic interior component wash and display backlight drying
    "Motherboard Micro-Soldering": "22,000 NGN", // Unisoc T606 octa-core performance system logic motherboard
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Smart 9": {
    "Screen Replacement": "21,000 NGN", // Centered Punch-Hole 6.7-inch 90Hz IPS LCD responsive display screen
    "Glass Only Repair": "9,000 NGN",
    "Back Glass Replacement": "6,000 NGN", // Matte metallic-finished rugged polycarbonate backing plate
    "Battery Replacement": "7,200 NGN", // 5000mAh durable long-life cycle battery block module
    "Charging Port Repair": "4,500 NGN", // Standard fast-charging USB Type-C connectivity sub-board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "13,000 NGN", // 13MP ultra-clear main lens + AI assistance optical group
    "Front Camera/FaceID Repair": "6,000 NGN", // Punch-hole 8MP interactive notification tracker camera module
    "Loudspeaker Repair": "4,500 NGN", // Dual stereo-effect sound field speaker block array
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Lower-chassis 3.5mm low-latency audio connector interface
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN", // Side-rail mounted physical capacitive biometric scan flex
    "Water Damage Recovery": "6,000 NGN", // IP54 entry level rubber seal replacement and chemical drying
    "Motherboard Micro-Soldering": "23,000 NGN", // MediaTek Helio G81 efficiency-tier core processor motherboard
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Smart 10": {
    "Screen Replacement": "21,500 NGN", // Fluid 6.67-inch 120Hz smooth refresh IPS LCD display panel
    "Glass Only Repair": "9,000 NGN",
    "Back Glass Replacement": "6,500 NGN", // Dynamic pattern scratch-resistant polymer plastic backing
    "Battery Replacement": "7,500 NGN", // 5000mAh cell matrix with enhanced charge safety controllers
    "Charging Port Repair": "4,500 NGN", // Smart charge multi-pin Type-C logic receiver board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "13,500 NGN", // 13MP clear shooter matrix block + complementary depth tracker
    "Front Camera/FaceID Repair": "6,000 NGN", // Center punch-hole 8MP dynamic portrait selfie tracking unit
    "Loudspeaker Repair": "4,500 NGN", // Upgraded high-amplitude sound block sound processing system
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Lower frame 3.5mm analog spatial sound jack socket
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN", // Power key integrated side biological authentication sensor strip
    "Water Damage Recovery": "6,000 NGN", // IP64 mid-tier internal casing decontamination fluid restoration
    "Motherboard Micro-Soldering": "23,500 NGN", // Unisoc T7250 budget performance compute matrix logic board
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Smart 20": {
    "Screen Replacement": "22,000 NGN", // Flat 6.78-inch 120Hz IPS LCD budget tier display screen
    "Glass Only Repair": "9,000 NGN",
    "Back Glass Replacement": "6,500 NGN", // Matte textured polycarbonate plastic backing panel
    "Battery Replacement": "7,500 NGN", // 5200mAh high-capacity single-cell lithium battery module
    "Charging Port Repair": "4,500 NGN", // Standard single-channel USB Type-C charging sub-board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "14,000 NGN", // Budget 13MP main sensor + auxiliary depth focus matrix block
    "Front Camera/FaceID Repair": "6,000 NGN", // Punch-hole 8MP standard selfie camera module
    "Loudspeaker Repair": "4,000 NGN", // Bottom-firing mono loudspeaker audio driver block
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Legacy 3.5mm analog audio jack interface port
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN", // Side-mounted capacitive physical fingerprint reader flex cable
    "Water Damage Recovery": "6,000 NGN", // Entry-tier basic rubber gasket moisture barrier decontamination service
    "Motherboard Micro-Soldering": "24,000 NGN", // MediaTek Helio G81 Ultimate core processing system logic board
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
//PHANTOM series
"Phantom X": {
    "Screen Replacement": "58,000 NGN", // Curved 6.7-inch 90Hz Super AMOLED premium display pane
    "Glass Only Repair": "22,000 NGN",
    "Back Glass Replacement": "18,000 NGN", // Corning Gorilla Glass 5 textured structural back panel
    "Battery Replacement": "12,000 NGN", // 4700mAh single-cell lithium-polymer battery module
    "Charging Port Repair": "7,500 NGN", // Standard USB Type-C sub-board with mic integration
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "32,000 NGN", // Triple array module containing a 50MP main sensor block
    "Front Camera/FaceID Repair": "16,000 NGN", // Dual punch-hole assembly with 48MP + 8MP wide sensor layout
    "Loudspeaker Repair": "7,000 NGN", // Bottom-firing mono acoustic transducer driver block
    "Microphone Repair": "6,500 NGN",
    "Headphone Jack Repair": "6,500 NGN", // Dedicated 3.5mm analog interface jack assembly
    "Power/Volume Button Repair": "7,000 NGN",
    "Fingerprint/Home Button Repair": "14,000 NGN", // Optical under-display biometrics scanning module
    "Water Damage Recovery": "10,000 NGN", // Mid-tier chemical bath and moisture barrier restoration service
    "Motherboard Micro-Soldering": "45,000 NGN", // MediaTek Helio G95 processing logic architecture board
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Phantom X2": {
    "Screen Replacement": "85,000 NGN", // Curved 6.8-inch 120Hz AMOLED high-brightness panel
    "Glass Only Repair": "35,000 NGN",
    "Back Glass Replacement": "14,000 NGN", // Centered Lunar Ring camera accent structural backing array
    "Battery Replacement": "15,000 NGN", // 5160mAh high-density power cell component
    "Charging Port Repair": "9,500 NGN", // High-speed Type-C system sub-assembly interface board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "42,000 NGN", // 64MP optical image stabilized primary lens sensor package
    "Front Camera/FaceID Repair": "15,000 NGN", // 32MP ultra-clear selfie optical capture module
    "Loudspeaker Repair": "8,500 NGN", // Tuned mono lower chassis loudspeaker driver assembly
    "Microphone Repair": "7,500 NGN",
    "Headphone Jack Repair": "N/A", // Audio routing handled natively via USB Type-C interface
    "Power/Volume Button Repair": "8,500 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN", // High-speed optical under-display authentication sensor array
    "Water Damage Recovery": "12,000 NGN", // Advanced sonic cleaning and liquid structural remediation
    "Motherboard Micro-Soldering": "75,000 NGN", // 4nm MediaTek Dimensity 9000 core mainboard logic engine
    "Software/Bootloop Flashing": "9,000 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Phantom X2 Pro": {
    "Screen Replacement": "95,000 NGN", // Curved 6.8-inch 120Hz AMOLED premium Gorilla Glass Victus panel
    "Glass Only Repair": "40,000 NGN",
    "Back Glass Replacement": "19,000 NGN", // Recycled ocean plastic eco-friendly unibody backing panel
    "Battery Replacement": "15,000 NGN", // 5160mAh high-density power cell component
    "Charging Port Repair": "9,500 NGN", // High-speed Type-C system sub-assembly interface board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "78,000 NGN", // World-first 50MP mechanical retractable portrait lens mechanism block
    "Front Camera/FaceID Repair": "15,000 NGN", // 32MP ultra-clear selfie optical capture module
    "Loudspeaker Repair": "8,500 NGN", // Tuned mono lower chassis loudspeaker driver assembly
    "Microphone Repair": "7,500 NGN",
    "Headphone Jack Repair": "N/A", // Audio routing handled natively via USB Type-C interface
    "Power/Volume Button Repair": "8,500 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN", // High-speed optical under-display authentication sensor array
    "Water Damage Recovery": "15,000 NGN", // Precision cleaning complex retractable lens mechanics layout
    "Motherboard Micro-Soldering": "85,000 NGN", // 4nm MediaTek Dimensity 9000 core mainboard logic engine
    "Software/Bootloop Flashing": "9,000 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Phantom V Fold": {
    "Screen Replacement": "320,000 NGN", // Dual dynamic folding system: Inner 7.85-inch LTPO flexible AMOLED matrix screen
    "Glass Only Repair": "85,000 NGN", // Outer 6.42-inch curved glass face layer sub-assembly
    "Back Glass Replacement": "24,000 NGN", // Premium micro-etched leather or fiber composite back cover panel
    "Battery Replacement": "28,000 NGN", // Dual-cell balanced power configuration pack (5000mAh total system volume)
    "Charging Port Repair": "16,000 NGN", // Interconnected flex assembly ribbon running 45W flash charge bus
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "65,000 NGN", // 50MP main + 50MP portrait telephoto triple-sensor module setup
    "Front Camera/FaceID Repair": "26,000 NGN", // Multi-lens group: 32MP cover screen + 16MP inner display cameras
    "Loudspeaker Repair": "14,000 NGN", // Dual structural symmetrical stereo speaker sound projection blocks
    "Microphone Repair": "9,500 NGN",
    "Headphone Jack Repair": "N/A", // Digital Type-C port interface bus matrix audio routing
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "16,000 NGN", // Side-frame integrated biometric scanner array embedded in power trace
    "Water Damage Recovery": "30,000 NGN", // Specialized comprehensive disassembly ultra-low tension core de-watering
    "Motherboard Micro-Soldering": "140,000 NGN", // MediaTek Dimensity 9000+ split twin-logic board core structure
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "45,000 NGN",
    "Network/Carrier Unlocking": "25,000 NGN"
},
"Phantom V Flip": {
    "Screen Replacement": "195,000 NGN", // Clamshell 6.9-inch flexible main screen with integrated hinge guard layer
    "Glass Only Repair": "45,000 NGN",
    "Back Glass Replacement": "18,000 NGN", // Planet-themed circular AMOLED cover glass display surrounding panel
    "Battery Replacement": "22,000 NGN", // Dual split safety cell modules architecture layout (4000mAh structural)
    "Charging Port Repair": "12,000 NGN", // Compact chassis bottom USB-C dock board with structural anchors
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "48,000 NGN", // 64MP ultra-clear wide ring sensor block matrix enclosure
    "Front Camera/FaceID Repair": "16,000 NGN", // 32MP inner folding display high-definition camera module
    "Loudspeaker Repair": "10,000 NGN", // Compact acoustic cavity audio driver block assembly
    "Microphone Repair": "8,500 NGN",
    "Headphone Jack Repair": "N/A", // Digital Type-C port interface bus matrix audio routing
    "Power/Volume Button Repair": "11,000 NGN",
    "Fingerprint/Home Button Repair": "15,000 NGN", // Side-mounted capacitive physical fingerprint reader flex cable
    "Water Damage Recovery": "25,000 NGN", // Specialized drop-down ultrasonic processing bath deployment service
    "Motherboard Micro-Soldering": "110,000 NGN", // MediaTek Dimensity 8050 processing center integrated circuit engine
    "Software/Bootloop Flashing": "12,000 NGN",
    "Data Recovery": "35,000 NGN",
    "Network/Carrier Unlocking": "20,000 NGN"
},
"Phantom V Fold2": {
    "Screen Replacement": "360,000 NGN", // Stylus-ready ultra-thin glass 7.85-inch LTPO internal primary screen
    "Glass Only Repair": "95,000 NGN", // Outer 6.42-inch high-durability drop-resistant glass cover layer
    "Back Glass Replacement": "28,000 NGN", // Specialized 5.5mm ultra-slim premium textured shell panel layout
    "Battery Replacement": "32,000 NGN", // Silicon-carbon ultra-dense dual battery assembly array (5750mAh total)
    "Charging Port Repair": "18,000 NGN", // Enhanced heavy-duty 70W ultra-charge docking node interface board
    "Wireless Charging Repair": "24,000 NGN", // 15W internal induction receiver charging matrix pad hardware layer
    "Rear Camera Repair": "82,000 NGN", // Triple-lens professional 50MP triple balance flagship camera stack block
    "Front Camera/FaceID Repair": "30,000 NGN", // Dual high-speed 32MP outer and 32MP inner visual capture array
    "Loudspeaker Repair": "16,000 NGN", // Cinematic custom stereo spatial dual-amplifier driver output blocks
    "Microphone Repair": "11,000 NGN",
    "Headphone Jack Repair": "N/A", // Digital Type-C port interface bus matrix audio routing
    "Power/Volume Button Repair": "14,000 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN", // Side-frame integrated biometric scanner array embedded in power trace
    "Water Damage Recovery": "35,000 NGN", // Extreme folding element protection seal testing and moisture clearout
    "Motherboard Micro-Soldering": "160,000 NGN", // Premium dual-layer interconnect main engine stack processor module
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "50,000 NGN",
    "Network/Carrier Unlocking": "30,000 NGN"
},
"Phantom V Flip2": {
    "Screen Replacement": "230,000 NGN", // Clamshell crease-less flexible 6.9-inch internal folder screen module
    "Glass Only Repair": "65,000 NGN",
    "Back Glass Replacement": "32,000 NGN", // Giant 3.64-inch square interactive smart cover glass panel layout
    "Battery Replacement": "26,000 NGN", // Multi-link high-speed 4720mAh dual balancing cells system component
    "Charging Port Repair": "14,000 NGN", // Fast 70W type-C intake sub-assembly dock with control chips
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "58,000 NGN", // Dual 50MP wide + ultra-wide structural camera module setup block
    "Front Camera/FaceID Repair": "18,000 NGN", // Punch-hole 32MP internal premium selfie portrait lens array
    "Loudspeaker Repair": "12,000 NGN", // Symmetric dual acoustic chamber balanced stereo audio output block
    "Microphone Repair": "9,000 NGN",
    "Headphone Jack Repair": "N/A", // Digital Type-C port interface bus matrix audio routing
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "16,000 NGN", // Side-mounted capacitive physical fingerprint reader flex cable
    "Water Damage Recovery": "28,000 NGN", // Complex multi-panel micro-seal structural corrosion inspection bath
    "Motherboard Micro-Soldering": "125,000 NGN", // MediaTek Dimensity 8020 high-frequency operations primary logic stack
    "Software/Bootloop Flashing": "12,000 NGN",
    "Data Recovery": "40,000 NGN",
    "Network/Carrier Unlocking": "25,000 NGN"
},
//SPARK series  
"Spark 20 Pro": {
    "Screen Replacement": "32,000 NGN", // Flat 6.78-inch 120Hz IPS LCD display panel with Magic Ring
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "8,500 NGN", // Matte textured frosted polycarbonate backing panel
    "Battery Replacement": "9,500 NGN", // 5000mAh high-capacity single-cell battery module
    "Charging Port Repair": "5,500 NGN", // Type-C sub-board with integrated microphone trace
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "22,000 NGN", // 108MP ultra-clear primary sensor package block
    "Front Camera/FaceID Repair": "8,000 NGN", // 32MP glowing selfie camera module with dual-led flash
    "Loudspeaker Repair": "5,500 NGN", // Dual stereo speaker lower acoustic transducer driver block
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,500 NGN", // Dedicated 3.5mm analog audio interface port assembly
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Side-mounted physical capacitive biometric scanner flex
    "Water Damage Recovery": "7,000 NGN", // Standard corrosion decontamination and rubber seal recovery
    "Motherboard Micro-Soldering": "36,000 NGN", // MediaTek Helio G99 Ultimate logic control mainboard
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Spark 30 Pro": {
    "Screen Replacement": "52,000 NGN", // Flat 6.78-inch 120Hz AMOLED high-brightness panel
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "12,000 NGN", // Special Transformers/Optimus Edition theme polycarbonate panel
    "Battery Replacement": "11,000 NGN", // 5000mAh high-density power cell architecture
    "Charging Port Repair": "6,500 NGN", // Enhanced 33W fast-charging Type-C sub-chassis dock
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "26,000 NGN", // 108MP matrix optical sensor package
    "Front Camera/FaceID Repair": "9,000 NGN", // 13MP punch-hole camera module
    "Loudspeaker Repair": "6,500 NGN", // Symmetrical multi-directional stereo audio system
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "5,000 NGN", // 3.5mm analog auxiliary interface terminal
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "12,000 NGN", // Integrated optical under-display biometrics array
    "Water Damage Recovery": "8,500 NGN", // IP54-rated ingress barrier structural restoration
    "Motherboard Micro-Soldering": "48,000 NGN", // MediaTek Helio G100 core processing platform logic board
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Spark 40 Pro": {
    "Screen Replacement": "56,000 NGN", // Upgraded 6.78-inch 120Hz smooth AMOLED display module
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "14,000 NGN", // Next-gen premium unibody styled backing array
    "Battery Replacement": "12,000 NGN", // 5160mAh extended high-capacity safety cell
    "Charging Port Repair": "7,000 NGN", // High-voltage Type-C charging node and power trace
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "28,000 NGN", // 50MP ultra-sensitive phase-detection primary sensor block
    "Front Camera/FaceID Repair": "10,000 NGN", // 13MP high-definition selfie optics group
    "Loudspeaker Repair": "7,000 NGN", // Immersive dual-channel audio output transducer
    "Microphone Repair": "5,500 NGN",
    "Headphone Jack Repair": "5,500 NGN", // Analog audio jack hub sub-board trace
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "14,000 NGN", // Under-display biometric scanner matrix array
    "Water Damage Recovery": "9,500 NGN", // Multi-seal fluid removal and decontamination service
    "Motherboard Micro-Soldering": "55,000 NGN", // Android 15 optimized high-tier main core system logic board
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Spark Pro": {
    "Screen Replacement": "18,000 NGN", // Legacy 5.5-inch 16:9 aspect ratio IPS LCD display panel
    "Glass Only Repair": "7,000 NGN",
    "Back Glass Replacement": "5,000 NGN", // Classic removable metallic-finish polycarbonate rear cover
    "Battery Replacement": "6,000 NGN", // 3000mAh legacy lithium-ion single cell block
    "Charging Port Repair": "3,500 NGN", // Micro-USB 2.0 interface power node sub-board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "10,000 NGN", // 13MP single autofocus primary camera component
    "Front Camera/FaceID Repair": "5,000 NGN", // 8MP standard front camera with physical LED flash
    "Loudspeaker Repair": "3,500 NGN", // Classic rear/bottom mono audio driver box
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "3,500 NGN", // Native 3.5mm analog headphone jack port
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "4,500 NGN", // Rear-mounted physical capacitive circular fingerprint reader
    "Water Damage Recovery": "5,000 NGN", // Basic circuit drying and low-level moisture recovery
    "Motherboard Micro-Soldering": "20,000 NGN", // Legacy quad-core architecture processing system mainboard
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Spark C": {
    "Screen Replacement": "24,000 NGN", // Flat 6.6-inch 90Hz budget IPS LCD panel (C-series tier)
    "Glass Only Repair": "9,500 NGN",
    "Back Glass Replacement": "6,500 NGN", // Glossy composite plastic rear skin panel
    "Battery Replacement": "8,000 NGN", // 5000mAh single-cell power distribution matrix
    "Charging Port Repair": "4,500 NGN", // Standard single-channel USB Type-C charging port sub-board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "14,000 NGN", // 50MP entry-tier primary shooter lens component
    "Front Camera/FaceID Repair": "6,000 NGN", // 8MP standard punch-hole selfie assembly
    "Loudspeaker Repair": "4,000 NGN", // Bottom-firing mono acoustic driver block
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // 3.5mm standard analog interface connector
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN", // Side-key capacitive fingerprint reader flex link
    "Water Damage Recovery": "6,000 NGN", // Entry-tier basic moisture extraction treatment
    "Motherboard Micro-Soldering": "26,000 NGN", // Budget-tier MediaTek/Unisoc logic processing engine
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Spark T": {
    "Screen Replacement": "25,000 NGN", // 6.52-inch HD+ teardrop notch IPS LCD screen module
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "7,000 NGN", // Textured matte plastic defensive back structural shield
    "Battery Replacement": "8,500 NGN", // 6000mAh ultra-high capacity power block (T-variant signature)
    "Charging Port Repair": "4,500 NGN", // Standard micro-USB/Type-C power docking module
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "15,000 NGN", // 16MP primary AI matrix lens group
    "Front Camera/FaceID Repair": "6,500 NGN", // 8MP teardrop selfie capture node
    "Loudspeaker Repair": "4,500 NGN", // Basic high-output mono loudspeaker component
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // 3.5mm analog sound interface port block
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN", // Rear/side hardware biometric module connection strip
    "Water Damage Recovery": "6,500 NGN", // Standard ultrasonic bath treatment and core drying
    "Motherboard Micro-Soldering": "28,000 NGN", // Energy-efficient budget multi-core logic board
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Spark 5G": {
    "Screen Replacement": "34,000 NGN", // Flat 6.6-inch 120Hz high-refresh rate IPS LCD display array
    "Glass Only Repair": "13,000 NGN",
    "Back Glass Replacement": "9,000 NGN", // Geometric-cut polycarbonate performance backing panel
    "Battery Replacement": "10,000 NGN", // 5000mAh single-cell battery optimized for 5G draw
    "Charging Port Repair": "6,000 NGN", // Type-C fast-charge sub-board logic link
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "20,000 NGN", // 50MP clear focal camera sensor package
    "Front Camera/FaceID Repair": "8,500 NGN", // 8MP/16MP punch-hole selfie camera module
    "Loudspeaker Repair": "5,500 NGN", // Symmetrical sound projection loudspeaker driver block
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,500 NGN", // 3.5mm legacy audio interface line controller
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN", // Side-rail integrated biometric reader flex ribbon
    "Water Damage Recovery": "7,500 NGN", // Anti-corrosive multi-stage fluid clearance service
    "Motherboard Micro-Soldering": "42,000 NGN", // MediaTek Dimensity 5G-capable logic architecture board
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Spark Go": {
    "Screen Replacement": "20,000 NGN", // Flat 6.6-inch 90Hz basic entry-tier IPS LCD panel
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "5,500 NGN", // Smooth-finish lightweight composite plastic rear shell
    "Battery Replacement": "7,000 NGN", // 5000mAh standard budget lithium power module
    "Charging Port Repair": "4,000 NGN", // Type-C single-channel power intake interface board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "12,000 NGN", // 13MP main sensor dual-lens housing block
    "Front Camera/FaceID Repair": "5,500 NGN", // 8MP standard entry selfie camera node
    "Loudspeaker Repair": "4,000 NGN", // Mono lower chassis audio output block
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "4,000 NGN", // 3.5mm standard audio jack connector port
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "5,000 NGN", // Side/rear physical biometric scanning panel ribbon
    "Water Damage Recovery": "5,500 NGN", // Entry-level chemical decontamination bath service
    "Motherboard Micro-Soldering": "22,000 NGN", // Android Go optimized ultra-budget processing logic board
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "7,500 NGN"
},
"Spark 7": {
    "Screen Replacement": "23,000 NGN", // 6.52-inch HD+ waterdrop notch IPS LCD screen module
    "Glass Only Repair": "9,000 NGN",
    "Back Glass Replacement": "6,000 NGN", // Streamlined plastic backing cover with prominent branding
    "Battery Replacement": "8,000 NGN", // 5000mAh/6000mAh high-volume energy cell module
    "Charging Port Repair": "4,500 NGN", // Micro-USB legacy standard dock charging sub-board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "13,000 NGN", // 16MP dual-rear camera module block
    "Front Camera/FaceID Repair": "6,000 NGN", // 8MP front-facing drop-notch optics set
    "Loudspeaker Repair": "4,500 NGN", // Standard internal mono sound driver box
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // 3.5mm analog phone jack output assembly
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN", // Rear-mounted capacitive physical biometric reader cable
    "Water Damage Recovery": "6,000 NGN", // Low-level moisture purging and trace stabilization
    "Motherboard Micro-Soldering": "25,000 NGN", // MediaTek Helio A25/G70 entry logic core board
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Spark 8": {
    "Screen Replacement": "24,000 NGN", // 6.56-inch HD+ basic IPS LCD display element
    "Glass Only Repair": "9,500 NGN",
    "Back Glass Replacement": "6,500 NGN", // Bold slogan design plastic glossy unibody back panel
    "Battery Replacement": "8,500 NGN", // 5000mAh dense core single-cell lithium pack
    "Charging Port Repair": "4,500 NGN", // Micro-USB system interface sub-board assembly
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "14,000 NGN", // 16MP/50MP configuration main photography block
    "Front Camera/FaceID Repair": "6,000 NGN", // 8MP standard portrait capture camera array
    "Loudspeaker Repair": "4,500 NGN", // Standard lower mono speaker module package
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // 3.5mm analog interface receiver block
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN", // Rear camera-housing-integrated biometric sensor trace
    "Water Damage Recovery": "6,500 NGN", // Corrosion treatment and liquid extraction washing
    "Motherboard Micro-Soldering": "26,000 NGN", // MediaTek Helio system logic board core unit
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Spark 9": {
    "Screen Replacement": "26,000 NGN", // 6.6-inch 90Hz fluid rate IPS LCD screen assembly
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "7,000 NGN", // Matte textured dual-ring design plastic rear housing
    "Battery Replacement": "8,500 NGN", // 5000mAh integrated internal power cell module
    "Charging Port Repair": "5,000 NGN", // Micro-USB to Type-C transition-era charging sub-board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "15,000 NGN", // 13MP/50MP primary dual-matrix camera housing
    "Front Camera/FaceID Repair": "7,000 NGN", // 32MP high-definition selfie optic upgrade module
    "Loudspeaker Repair": "4,500 NGN", // Bottom-firing acoustic output audio driver
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Standard 3.5mm analog audio interface port
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN", // Rear-mounted design capacitive biometrics flex cord
    "Water Damage Recovery": "6,500 NGN", // Ultrasonic chemical bath washing and contact preservation
    "Motherboard Micro-Soldering": "28,000 NGN", // MediaTek Helio G37 processing system logic unit
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Spark 10": {
    "Screen Replacement": "28,000 NGN", // 6.6-inch 90Hz IPS LCD display panel with smart matrix
    "Glass Only Repair": "11,000 NGN",
    "Back Glass Replacement": "7,500 NGN", // Premium glass-mimicking glossy plastic panel array
    "Battery Replacement": "9,000 NGN", // 5000mAh structural single-cell lithium pack
    "Charging Port Repair": "5,000 NGN", // Modern Type-C interface power dock sub-board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "18,000 NGN", // 50MP AI dual camera array sensor block
    "Front Camera/FaceID Repair": "7,500 NGN", // 8MP dual-brightness adjustable flash selfie lens
    "Loudspeaker Repair": "5,000 NGN", // Clear audio single-channel loudspeaker block
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN", // 3.5mm sound routing interface port assembly
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "6,500 NGN", // Side-key capacitive fingerprint reader flex line
    "Water Damage Recovery": "7,000 NGN", // Specialized isolation cleaning and drying procedure
    "Motherboard Micro-Soldering": "32,000 NGN", // MediaTek Helio G37/G88 balance architecture mainboard
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "16,500 NGN",
    "Network/Carrier Unlocking": "9,000 NGN"
},
"Spark 20": {
    "Screen Replacement": "30,000 NGN", // Flat 6.6-inch 90Hz IPS LCD panel with interactive Magic Ring
    "Glass Only Repair": "11,500 NGN",
    "Back Glass Replacement": "8,000 NGN", // Matte-finish specialized leather/polycarbonate rear skin
    "Battery Replacement": "9,000 NGN", // 5000mAh single-cell high-density battery component
    "Charging Port Repair": "5,000 NGN", // Fast charging Type-C system interface board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "20,000 NGN", // 50MP ultra-clear main focus sensor module block
    "Front Camera/FaceID Repair": "8,000 NGN", // 32MP luminous front capture group with dual-flash
    "Loudspeaker Repair": "5,500 NGN", // Dual stereo speaker acoustic transducer unit
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,500 NGN", // Integrated 3.5mm analog hardware line port
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "6,500 NGN", // Side-frame integrated physical fingerprint reader flex
    "Water Damage Recovery": "7,000 NGN", // Standard multi-point liquid extraction and wash service
    "Motherboard Micro-Soldering": "34,000 NGN", // MediaTek Helio G85 primary processing logic mainboard
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "17,000 NGN",
    "Network/Carrier Unlocking": "9,500 NGN"
},
"Spark 30": {
    "Screen Replacement": "34,000 NGN", // 6.78-inch 90Hz/120Hz upgraded smooth IPS LCD screen panel
    "Glass Only Repair": "13,000 NGN",
    "Back Glass Replacement": "9,000 NGN", // Starry/Geometric theme rugged composite backing block
    "Battery Replacement": "10,000 NGN", // 5000mAh resilient lifecycle power core element
    "Charging Port Repair": "5,500 NGN", // Heavy-duty Type-C sub-assembly connector dock
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "22,000 NGN", // 64MP/50MP high-spec primary camera capture array
    "Front Camera/FaceID Repair": "8,500 NGN", // 8MP/13MP wide-angle selfie sensor component
    "Loudspeaker Repair": "6,000 NGN", // Dual stereo sound projection audio chamber block
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,500 NGN", // Legacy 3.5mm analog sound interface port assembly
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Side-rail biometric recognition scanning layer
    "Water Damage Recovery": "7,500 NGN", // Multi-gasket entry protection cleanup treatment
    "Motherboard Micro-Soldering": "38,000 NGN", // MediaTek Helio G91 standard operating core mainboard
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Spark 40": {
    "Screen Replacement": "36,000 NGN", // Immersive 6.7-inch HD+ 120Hz fast IPS display module
    "Glass Only Repair": "14,500 NGN",
    "Back Glass Replacement": "9,500 NGN", // Sleek minimalist flat structural plastic back casing
    "Battery Replacement": "10,500 NGN", // 5200mAh high-capacity single-cell power array
    "Charging Port Repair": "6,000 NGN", // Advanced 45W fast-charging Type-C subsystem dock
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "24,000 NGN", // 50MP intelligent AI camera tracking sensor package
    "Front Camera/FaceID Repair": "9,000 NGN", // 8MP dual-flash optimized selfie camera module
    "Loudspeaker Repair": "6,000 NGN", // Enhanced mono high-output audio block system
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,500 NGN", // 3.5mm standard analog auxiliary connector line
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN", // Side-key capacitive physical fingerprint scanner strip
    "Water Damage Recovery": "8,000 NGN", // Professional fluid elimination and logic board stabilization
    "Motherboard Micro-Soldering": "42,000 NGN", // 4G LTE integrated modern balance architecture main logic board
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
//POVA series
"Pova": {
    "Screen Replacement": "25,000 NGN", // Flat 6.8-inch basic HD+ IPS LCD display panel
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "6,500 NGN", // Multi-layered glossy polycarbonate rear shell
    "Battery Replacement": "8,500 NGN", // 6000mAh ultra-high capacity single-cell battery block
    "Charging Port Repair": "4,500 NGN", // Standard Micro-USB legacy interface power sub-board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "14,000 NGN", // 13MP quad-camera matrix module assembly block
    "Front Camera/FaceID Repair": "6,000 NGN", // Punch-hole 8MP front selfie camera node
    "Loudspeaker Repair": "4,000 NGN", // Mono lower chassis audio output driver box
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Native 3.5mm analog auxiliary interface terminal
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN", // Rear-mounted capacitive physical biometric scanner flex
    "Water Damage Recovery": "6,000 NGN", // Basic cleaning and liquid extraction treatment
    "Motherboard Micro-Soldering": "28,000 NGN", // MediaTek Helio G80 processing logic architecture board
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Pova 2": {
    "Screen Replacement": "27,000 NGN", // Giant 6.9-inch FHD+ 180Hz touch-sampling IPS LCD panel
    "Glass Only Repair": "11,000 NGN",
    "Back Glass Replacement": "7,000 NGN", // Textured central stripe matte plastic back cover
    "Battery Replacement": "9,500 NGN", // Massive 7000mAh structural high-density power cell
    "Charging Port Repair": "5,000 NGN", // Dual-trace Type-C sub-chassis power node
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "16,000 NGN", // 48MP main sensor quad-focal layout camera package
    "Front Camera/FaceID Repair": "6,500 NGN", // Center punch-hole 8MP selfie optical capture set
    "Loudspeaker Repair": "4,500 NGN", // High-volume mono ear-piece combined audio driver block
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Dedicated 3.5mm analog headphone jack hub
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "6,500 NGN", // Side-key capacitive integrated fingerprint sensor flex
    "Water Damage Recovery": "6,500 NGN", // Standard corrosion decontamination bath service
    "Motherboard Micro-Soldering": "32,000 NGN", // MediaTek Helio G85 performance engine logic board
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "8,500 NGN"
},
"Pova Neo": {
    "Screen Replacement": "24,000 NGN", // Flat 6.8-inch HD+ teardrop notch budget IPS panel
    "Glass Only Repair": "9,500 NGN",
    "Back Glass Replacement": "6,000 NGN", // Glossy linear design polycarbonate rear casing
    "Battery Replacement": "8,500 NGN", // 6000mAh extended-capacity single power module
    "Charging Port Repair": "4,500 NGN", // Type-C single-channel power intake dock board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "13,000 NGN", // 13MP AI dual focal camera setup module
    "Front Camera/FaceID Repair": "6,000 NGN", // Teardrop 8MP standard front camera array
    "Loudspeaker Repair": "4,000 NGN", // Standard lower chassis mono audio block
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // 3.5mm standard audio jack connector line
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN", // Classic rear physical biometric scanner flex ribbon
    "Water Damage Recovery": "6,000 NGN", // Entry-tier fluid evacuation and contact drying
    "Motherboard Micro-Soldering": "26,000 NGN", // MediaTek Helio G25 entry-tier core logic board
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Pova Neo 2": {
    "Screen Replacement": "28,000 NGN", // Flat 6.82-inch 90Hz fast smooth IPS display module
    "Glass Only Repair": "11,000 NGN",
    "Back Glass Replacement": "7,500 NGN", // Cyberpunk energy craft styled plastic rear cover
    "Battery Replacement": "9,500 NGN", // 7000mAh hyper-capacity lithium-polymer power core
    "Charging Port Repair": "5,000 NGN", // Enhanced Type-C charging port sub-board ribbon
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "16,000 NGN", // 16MP primary clear dual lens camera housing block
    "Front Camera/FaceID Repair": "6,500 NGN", // Punch-hole 8MP standard selfie focal package
    "Loudspeaker Repair": "5,000 NGN", // Symmetrical dual speaker acoustic projection unit
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN", // 3.5mm analog auxiliary interface terminal
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "6,500 NGN", // Side-rail physical capacitive fingerprint reader flex
    "Water Damage Recovery": "7,000 NGN", // Anti-corrosive sonic wash and core de-watering
    "Motherboard Micro-Soldering": "34,000 NGN", // MediaTek Helio G85 optimized balance mainboard
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "17,000 NGN",
    "Network/Carrier Unlocking": "9,000 NGN"
},
"Pova Neo 3": {
    "Screen Replacement": "30,000 NGN", // Flat 6.82-inch 90Hz fluid rate IPS LCD panel
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "8,000 NGN", // Mecha-inspired structural composite rear shell shield
    "Battery Replacement": "9,500 NGN", // 7000mAh massive capacity silicon-dense power block
    "Charging Port Repair": "5,000 NGN", // Heavy-duty Type-C sub-assembly dock connection line
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "18,000 NGN", // 16MP intelligent AI dual camera tracking sensor package
    "Front Camera/FaceID Repair": "7,000 NGN", // 8MP clear-focus front punch-hole camera module
    "Loudspeaker Repair": "5,500 NGN", // DTS-tuned dual-speaker sound projection array
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,500 NGN", // 3.5mm auxiliary analog audio interface hub
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Side-key capacitive biometric verification trace
    "Water Damage Recovery": "7,000 NGN", // Multi-point fluid clearance and contact preservation
    "Motherboard Micro-Soldering": "36,000 NGN", // MediaTek Helio G85 revision operating logic core unit
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "9,500 NGN"
},
"Pova 3": {
    "Screen Replacement": "31,000 NGN", // Giant 6.9-inch 90Hz FHD+ high-speed IPS screen module
    "Glass Only Repair": "12,500 NGN",
    "Back Glass Replacement": "9,000 NGN", // Center luminous LED notification light track polycarbonate backing
    "Battery Replacement": "10,000 NGN", // 7000mAh structural double-cell style lithium component
    "Charging Port Repair": "5,500 NGN", // High-current 33W fast-charge Type-C docking node
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "20,000 NGN", // 50MP ultra-clear main focus sensor module block
    "Front Camera/FaceID Repair": "7,500 NGN", // 8MP punch-hole portrait capture camera set
    "Loudspeaker Repair": "5,500 NGN", // Symmetrical dual stereo audio driver block system
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,500 NGN", // Standard 3.5mm hardware analog phone jack line
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Side-mounted physical biometric scanning plate ribbon
    "Water Damage Recovery": "7,500 NGN", // Advanced sonic cleaning and liquid extraction wash
    "Motherboard Micro-Soldering": "38,000 NGN", // MediaTek Helio G88 gaming matrix system logic mainboard
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "19,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Pova 4": {
    "Screen Replacement": "32,000 NGN", // Flat 6.82-inch 90Hz wide IPS gaming display panel
    "Glass Only Repair": "13,000 NGN",
    "Back Glass Replacement": "9,000 NGN", // Widmanstätten crystalline pattern energy design back cover
    "Battery Replacement": "9,500 NGN", // 6000mAh dense core power cell component
    "Charging Port Repair": "5,500 NGN", // High-voltage Type-C charging node and power trace
    "Wireless Charging Repair": "/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "22,000 NGN", // 50MP AI dual camera array sensor block
    "Front Camera/FaceID Repair": "7,500 NGN", // 8MP standard high-definition selfie optics group
    "Loudspeaker Repair": "5,500 NGN", // Immersive dual-channel audio output transducer block
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,500 NGN", // 3.5mm analog sound interface port assembly
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Side-key capacitive physical fingerprint scanner strip
    "Water Damage Recovery": "7,500 NGN", // Specialized isolation cleaning and drying procedure
    "Motherboard Micro-Soldering": "40,000 NGN", // 6nm MediaTek Helio G99 core mainboard logic engine
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Pova 4 Pro": {
    "Screen Replacement": "48,000 NGN", // Flat premium 6.66-inch 90Hz fluid AMOLED screen array
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "11,000 NGN", // Prism mecha design specialized textured structural panel
    "Battery Replacement": "10,000 NGN", // 6000mAh high-drain performance single-cell pack
    "Charging Port Repair": "6,000 NGN", // Heavy-duty 45W super-charge Type-C interface board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "24,000 NGN", // 50MP clear focal camera sensor package block
    "Front Camera/FaceID Repair": "8,000 NGN", // 8MP punch-hole camera module with front flash array
    "Loudspeaker Repair": "6,000 NGN", // Dual balanced stereo sound projection blocks
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,500 NGN", // Integrated 3.5mm analog hardware line port
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN", // High-speed side-rail integrated biometric verification flex
    "Water Damage Recovery": "8,000 NGN", // Multi-stage fluid elimination and logic stabilization
    "Motherboard Micro-Soldering": "46,000 NGN", // 6nm MediaTek Helio G99 gaming edition main logic stack
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Pova 5": {
    "Screen Replacement": "34,000 NGN", // Flat 6.78-inch 120Hz high-refresh IPS LCD gaming display
    "Glass Only Repair": "14,000 NGN",
    "Back Glass Replacement": "10,000 NGN", // 3D Mecha Stripe textured performance back shell
    "Battery Replacement": "10,000 NGN", // 6000mAh high-capacity long-lifecycle power array
    "Charging Port Repair": "6,000 NGN", // Fast charging 45W Type-C system interface sub-board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "24,000 NGN", // 50MP ultra-sensitive phase-detection primary sensor block
    "Front Camera/FaceID Repair": "8,000 NGN", // 8MP high-definition selfie optics group module
    "Loudspeaker Repair": "6,000 NGN", // DTS dual-speaker spatial audio output assembly
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,500 NGN", // Analog audio jack hub sub-board trace
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN", // Side-mounted physical capacitive fingerprint scanner strip
    "Water Damage Recovery": "8,000 NGN", // Professional fluid elimination and logic board stabilization
    "Motherboard Micro-Soldering": "44,000 NGN", // MediaTek Helio G99 core mainboard logic engine
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Pova 5 Pro": {
    "Screen Replacement": "36,000 NGN", // Flat 6.78-inch 120Hz high-speed IPS gaming matrix array
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "14,000 NGN", // 3D Turbo Mecha translucent back with interactive RGB light strips
    "Battery Replacement": "10,500 NGN", // 5000mAh ultra-fast discharge safety cell module
    "Charging Port Repair": "7,000 NGN", // Ultra-fast 68W smart charge Type-C subsystem dock
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "26,000 NGN", // 50MP AI clear focal camera sensor package block
    "Front Camera/FaceID Repair": "9,000 NGN", // 16MP wide-angle selfie capture camera node
    "Loudspeaker Repair": "6,500 NGN", // Cinematic custom stereo spatial dual audio driver blocks
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "4,500 NGN", // 3.5mm standard analog auxiliary connector line
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN", // High-speed side-rail integrated biometric verification flex
    "Water Damage Recovery": "8,500 NGN", // Complex multi-panel illumination circuit cleaning service
    "Motherboard Micro-Soldering": "52,000 NGN", // MediaTek Dimensity 6080 5G core system logic board
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Pova 6": {
    "Screen Replacement": "54,000 NGN", // Flat 6.78-inch 120Hz FHD+ crisp AMOLED display element
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "13,000 NGN", // Dynamic Interstellar Mecha structure backing panel
    "Battery Replacement": "11,500 NGN", // Massive 6000mAh ultra-thin silicon-carbon dense power pack
    "Charging Port Repair": "6,500 NGN", // High-voltage 70W ultra-charge docking node interface board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "28,000 NGN", // 108MP matrix optical primary sensor package block
    "Front Camera/FaceID Repair": "10,000 NGN", // 32MP dual-tone flash premium selfie camera module
    "Loudspeaker Repair": "6,500 NGN", // Dolby Atmos optimized dual speaker sound layout
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "5,000 NGN", // Legacy 3.5mm analog sound interface port assembly
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "13,000 NGN", // High-speed optical under-display authentication sensor array
    "Water Damage Recovery": "9,000 NGN", // IP53-rated ingress barrier structural restoration service
    "Motherboard Micro-Soldering": "54,000 NGN", // MediaTek Helio G99 Ultimate high-frequency logic engine
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "26,000 NGN",
    "Network/Carrier Unlocking": "14,000 NGN"
},
"Pova 6 Neo": {
    "Screen Replacement": "35,000 NGN", // Flat 6.78-inch 120Hz high-refresh rate IPS LCD screen panel
    "Glass Only Repair": "14,500 NGN",
    "Back Glass Replacement": "11,000 NGN", // Sleek minimalist geometric mecha plastic back casing
    "Battery Replacement": "12,000 NGN", // Giant 7000mAh hyper-dense single energy cell block
    "Charging Port Repair": "6,000 NGN", // Standard 33W charge Type-C subsystem dock connection
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "24,000 NGN", // 50MP intelligent AI camera tracking sensor package
    "Front Camera/FaceID Repair": "8,500 NGN", // 8MP dual-flash optimized selfie camera module
    "Loudspeaker Repair": "6,000 NGN", // High-output stereo dual-speaker audio chamber block
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,500 NGN", // 3.5mm standard analog auxiliary connector line
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN", // Side-key capacitive physical fingerprint scanner strip
    "Water Damage Recovery": "8,000 NGN", // Professional fluid elimination and logic board stabilization
    "Motherboard Micro-Soldering": "46,000 NGN", // MediaTek Helio G99 Ultimate secondary distribution mainboard
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Pova 6 Pro": {
    "Screen Replacement": "58,000 NGN", // Premium 6.78-inch 120Hz AMOLED panel with eye-comfort PWM dimming
    "Glass Only Repair": "22,000 NGN",
    "Back Glass Replacement": "16,000 NGN", // Dynamic Eye Mecha design backing with mini-LED notification matrix
    "Battery Replacement": "11,500 NGN", // 6000mAh silicon-carbon ultra-dense power configuration pack
    "Charging Port Repair": "7,000 NGN", // Heavy-duty 70W ultra-charge docking node interface board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "32,000 NGN", // 108MP triple balance flagship camera stack block
    "Front Camera/FaceID Repair": "10,000 NGN", // 32MP dual-speed front portrait lens array module
    "Loudspeaker Repair": "7,000 NGN", // Symmetrical dual speaker sound projection audio chamber block
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "5,000 NGN", // Integrated 3.5mm analog hardware line port
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "14,000 NGN", // Integrated optical under-display biometrics scanning module
    "Water Damage Recovery": "9,500 NGN", // Multi-point fluid clearance and LED trace preservation service
    "Motherboard Micro-Soldering": "60,000 NGN", // MediaTek Dimensity 6080 5G core mainboard logic engine
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "28,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Pova Curve": {
    "Screen Replacement": "78,000 NGN", // Elegant curved 6.78-inch 144Hz AMOLED immersive display panel
    "Glass Only Repair": "32,000 NGN", // Corning Gorilla Glass 7i front curved glass surface layer
    "Back Glass Replacement": "15,000 NGN", // Premium textured wrap minimalist design backing element
    "Battery Replacement": "11,000 NGN", // 5500mAh high-performance structural safety core block
    "Charging Port Repair": "6,500 NGN", // Secure alignment Type-C charging port sub-board link
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "30,000 NGN", // 50MP optical image stabilized primary lens sensor package
    "Front Camera/FaceID Repair": "9,500 NGN", // Punch-hole 13MP ultra-clear selfie optical capture module
    "Loudspeaker Repair": "6,500 NGN", // Dolby Atmos certified structural stereo sound drivers
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "N/A", // Audio routing handled natively via USB Type-C interface
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "15,000 NGN", // High-speed curved optical under-display authentication sensor
    "Water Damage Recovery": "11,000 NGN", // Precision liquid evacuation and curved structural edge sealing
    "Motherboard Micro-Soldering": "62,000 NGN", // 4nm MediaTek Dimensity 7300 Ultimate system logic board
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "30,000 NGN",
    "Network/Carrier Unlocking": "16,000 NGN"
},
"Pova 7": {
    "Screen Replacement": "40,000 NGN", // Flat 6.78-inch 144Hz smooth LTPS IPS display panel
    "Glass Only Repair": "16,000 NGN",
    "Back Glass Replacement": "13,000 NGN", // Faux-transparent back panel layout with Delta Light Interface
    "Battery Replacement": "11,500 NGN", // Long-life 6000mAh single-cell power distribution matrix
    "Charging Port Repair": "6,500 NGN", // Fast 45W Type-C power intake sub-assembly dock board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "28,000 NGN", // 50MP main sensor with 4K recording capture package block
    "Front Camera/FaceID Repair": "9,500 NGN", // 13MP high-definition selfie optics group module
    "Loudspeaker Repair": "6,500 NGN", // Immersive dual-channel audio output transducer block
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "5,000 NGN", // Analog audio jack hub sub-board trace
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN", // Side-mounted physical capacitive fingerprint scanner strip
    "Water Damage Recovery": "9,000 NGN", // Anti-corrosive multi-stage fluid clearance service
    "Motherboard Micro-Soldering": "58,000 NGN", // 4nm MediaTek Dimensity 7300 Ultimate logic core mainboard
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "28,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Pova 7 Neo": {
    "Screen Replacement": "36,000 NGN", // Flat 6.78-inch 120Hz sharp IPS LCD panel
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "12,000 NGN", // Compact composite protective rear shell housing
    "Battery Replacement": "13,000 NGN", // Massive 7000mAh high-drain performance single-cell pack
    "Charging Port Repair": "6,000 NGN", // Standard single-channel USB Type-C charging port sub-board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "26,000 NGN", // 50MP entry-tier primary shooter lens component
    "Front Camera/FaceID Repair": "9,000 NGN", // 8MP standard punch-hole selfie assembly
    "Loudspeaker Repair": "6,000 NGN", // Bottom-firing mono acoustic driver block
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,500 NGN", // 3.5mm standard analog interface connector
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN", // Side-key capacitive fingerprint reader flex link
    "Water Damage Recovery": "8,500 NGN", // Entry-tier basic moisture extraction treatment
    "Motherboard Micro-Soldering": "50,000 NGN", // MediaTek Helio G100 processing center circuit engine
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "14,000 NGN"
},
"Pova 7 Pro": {
    "Screen Replacement": "64,000 NGN", // Premium 6.78-inch 144Hz AMOLED screen with Corning Gorilla Glass 7i
    "Glass Only Repair": "25,000 NGN",
    "Back Glass Replacement": "18,000 NGN", // Advanced cyber mecha translucent panel with Delta Light strip
    "Battery Replacement": "12,000 NGN", // 6000mAh structural double-cell style lithium component
    "Charging Port Repair": "7,500 NGN", // Ultra-fast Type-C charging node and power trace
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "34,000 NGN", // 64MP optical image stabilized primary lens sensor package
    "Front Camera/FaceID Repair": "10,000 NGN", // 13MP high-definition selfie optics group
    "Loudspeaker Repair": "7,000 NGN", // Dolby Atmos certified structural stereo sound drivers
    "Microphone Repair": "5,500 NGN",
    "Headphone Jack Repair": "N/A", // Audio routing handled natively via USB Type-C interface
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "15,000 NGN", // High-speed optical under-display authentication sensor array
    "Water Damage Recovery": "10,000 NGN", // Special comprehensive disassembly ultra-low tension core de-watering
    "Motherboard Micro-Soldering": "68,000 NGN", // 4nm MediaTek Dimensity 7300 Ultimate processing logic unit
    "Software/Bootloop Flashing": "8,500 NGN",
    "Data Recovery": "32,000 NGN",
    "Network/Carrier Unlocking": "18,000 NGN"
},
"Pova 7 Ultra": {
    "Screen Replacement": "72,000 NGN", // Top-tier 6.67-inch 144Hz crisp AMOLED ultra-performance display
    "Glass Only Repair": "28,000 NGN",
    "Back Glass Replacement": "20,000 NGN", // Full premium unibody carbon-texture composite matrix back
    "Battery Replacement": "12,000 NGN", // 6000mAh premium silicon-carbon ultra-dense power cell
    "Charging Port Repair": "8,000 NGN", // Heavy-duty ultra-fast charging docking node interface board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "42,000 NGN", // 108MP ultra-clear primary sensor package block
    "Front Camera/FaceID Repair": "10,000 NGN", // 13MP high-speed front portrait lens array module
    "Loudspeaker Repair": "7,500 NGN", // Symmetrical sound projection loudspeaker driver block
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "N/A", // Audio routing handled natively via USB Type-C interface
    "Power/Volume Button Repair": "6,500 NGN",
    "Fingerprint/Home Button Repair": "16,000 NGN", // Advanced high-speed under-display biometric scanner matrix array
    "Water Damage Recovery": "12,000 NGN", // Extreme fluid elimination and logic board stabilization
    "Motherboard Micro-Soldering": "78,000 NGN", // Flagship MediaTek Dimensity 8350 Ultimate core mainboard logic engine
    "Software/Bootloop Flashing": "9,000 NGN",
    "Data Recovery": "36,000 NGN",
    "Network/Carrier Unlocking": "20,000 NGN"
},
//CAMON series
"Camon 20 Pro": {
    "Screen Replacement": "48,000 NGN", // Flat 6.67-inch 120Hz AMOLED high-brightness panel
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "10,000 NGN", // Geometric-cut Magic Skin textured leather backing panel
    "Battery Replacement": "9,500 NGN", // 5000mAh structural single-cell lithium pack
    "Charging Port Repair": "5,500 NGN", // Standard 33W fast-charging Type-C subsystem dock
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "24,000 NGN", // 64MP RGBW ultra-sensitive primary lens sensor block
    "Front Camera/FaceID Repair": "8,500 NGN", // 32MP punch-hole high-definition selfie optics group
    "Loudspeaker Repair": "5,500 NGN", // Symmetrical sound projection loudspeaker driver block
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,500 NGN", // Integrated 3.5mm analog hardware line port
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "12,000 NGN", // High-speed optical under-display authentication sensor array
    "Water Damage Recovery": "7,500 NGN", // Multi-point fluid clearance and contact preservation
    "Motherboard Micro-Soldering": "42,000 NGN", // MediaTek Helio G99 processing center circuit engine
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Camon 30 Pro": {
    "Screen Replacement": "58,000 NGN", // Flat 6.78-inch 144Hz AMOLED smooth display module
    "Glass Only Repair": "22,000 NGN",
    "Back Glass Replacement": "14,000 NGN", // Tech-Art leather or marble-textured composite backing panel
    "Battery Replacement": "11,000 NGN", // 5000mAh high-density power cell architecture
    "Charging Port Repair": "6,500 NGN", // Enhanced 70W ultra-charge docking node interface board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "38,000 NGN", // Sony IMX890 50MP optical image stabilized primary lens sensor
    "Front Camera/FaceID Repair": "10,000 NGN", // 50MP eye-autofocus high-speed portrait lens module
    "Loudspeaker Repair": "6,500 NGN", // Dolby Atmos optimized dual speaker sound layout
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "N/A", // Audio routing handled natively via USB Type-C interface
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "14,000 NGN", // Integrated optical under-display biometrics scanning module
    "Water Damage Recovery": "9,000 NGN", // IP54 ingress barrier structural restoration service
    "Motherboard Micro-Soldering": "55,000 NGN", // MediaTek Dimensity 8200 Ultimate 5G core mainboard
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "14,000 NGN"
},
"Camon 30 Premier": {
    "Screen Replacement": "78,000 NGN", // Flat premium 6.77-inch 120Hz LTPO AMOLED 1.5K display panel
    "Glass Only Repair": "30,000 NGN", // Gorilla Glass 5 front protective face layer
    "Back Glass Replacement": "18,000 NGN", // Aerospace-grade metal mid-frame integrated composite leather backing
    "Battery Replacement": "11,500 NGN", // 5000mAh high-drain performance single-cell pack
    "Charging Port Repair": "7,000 NGN", // Heavy-duty 70W ultra-charge docking node interface board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "58,000 NGN", // Full 50MP triple balance sensor stack: Main OIS + Periscope + Ultra-wide
    "Front Camera/FaceID Repair": "12,000 NGN", // 50MP eye-tracking professional selfie capture node
    "Loudspeaker Repair": "7,000 NGN", // Symmetrical dual stereo audio projection blocks
    "Microphone Repair": "5,500 NGN",
    "Headphone Jack Repair": "N/A", // Audio routing handled natively via USB Type-C interface
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "15,000 NGN", // Ultra-fast optical under-display authentication sensor array
    "Water Damage Recovery": "10,000 NGN", // Professional fluid elimination and specialized camera seal drying
    "Motherboard Micro-Soldering": "68,000 NGN", // MediaTek Dimensity 8200 Ultimate + Sony CXD5622GG Imaging chip board
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "30,000 NGN",
    "Network/Carrier Unlocking": "16,000 NGN"
},
"Camon 40 Pro": {
    "Screen Replacement": "65,000 NGN", // Upgraded 6.78-inch 144Hz crisp AMOLED display element
    "Glass Only Repair": "25,000 NGN",
    "Back Glass Replacement": "16,000 NGN", // Next-gen premium unibody styled textured back casing
    "Battery Replacement": "12,000 NGN", // 5000mAh resilient lifecycle power core element
    "Charging Port Repair": "7,000 NGN", // High-voltage Type-C charging node and power trace
    "Wireless Charging Repair": "18,000 NGN", // Magnetic wireless induction charging pad hardware layer
    "Rear Camera Repair": "44,000 NGN", // 50MP ultra-sensitive phase-detection primary sensor block with OIS
    "Front Camera/FaceID Repair": "11,000 NGN", // 50MP high-definition selfie optics group module
    "Loudspeaker Repair": "7,000 NGN", // Immersive dual-channel audio output transducer block
    "Microphone Repair": "5,500 NGN",
    "Headphone Jack Repair": "N/A", // Audio routing handled natively via USB Type-C interface
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "15,000 NGN", // Under-display biometric scanner matrix array
    "Water Damage Recovery": "10,000 NGN", // Multi-seal fluid removal and decontamination service
    "Motherboard Micro-Soldering": "62,000 NGN", // Modern balance architecture main logic core mainboard
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "28,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Camon 40 Premier": {
    "Screen Replacement": "88,000 NGN", // Flagship 6.78-inch 120Hz LTPO AMOLED high-resolution screen module
    "Glass Only Repair": "35,000 NGN", // High-durability drop-resistant glass cover layer
    "Back Glass Replacement": "20,000 NGN", // Luxury tactile textured unibody rear shell shielding
    "Battery Replacement": "12,500 NGN", // Silicon-carbon ultra-dense single energy cell block
    "Charging Port Repair": "8,000 NGN", // Heavy-duty ultra-fast charging docking node interface board
    "Wireless Charging Repair": "20,000 NGN", // High-efficiency magnetic wireless induction charging array
    "Rear Camera Repair": "68,000 NGN", // Advanced 50MP triple master camera matrix package with Periscope OIS
    "Front Camera/FaceID Repair": "13,000 NGN", // 50MP pro-tier visual capture array module
    "Loudspeaker Repair": "7,500 NGN", // Custom stereo spatial dual-amplifier driver output blocks
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "N/A", // Audio routing handled natively via USB Type-C interface
    "Power/Volume Button Repair": "6,500 NGN",
    "Fingerprint/Home Button Repair": "16,000 NGN", // Advanced high-speed under-display biometric scanner matrix array
    "Water Damage Recovery": "12,000 NGN", // Extreme fluid elimination and logic board stabilization
    "Motherboard Micro-Soldering": "78,000 NGN", // Premium dual-layer interconnect main engine stack processor module
    "Software/Bootloop Flashing": "9,000 NGN",
    "Data Recovery": "35,000 NGN",
    "Network/Carrier Unlocking": "20,000 NGN"
},
"Camon Pro": {
    "Screen Replacement": "18,000 NGN", // Legacy 5.5-inch 16:9 aspect ratio IPS LCD display panel
    "Glass Only Repair": "7,000 NGN",
    "Back Glass Replacement": "5,000 NGN", // Classic removable metallic-finish polycarbonate rear cover
    "Battery Replacement": "6,000 NGN", // 3000mAh legacy lithium-ion single cell block
    "Charging Port Repair": "3,500 NGN", // Micro-USB 2.0 interface power node sub-board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "10,000 NGN", // 13MP single autofocus primary camera component
    "Front Camera/FaceID Repair": "5,500 NGN", // 8MP standard front camera with physical LED flash
    "Loudspeaker Repair": "3,500 NGN", // Classic rear/bottom mono audio driver box
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "3,500 NGN", // Native 3.5mm analog headphone jack port
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "4,500 NGN", // Rear-mounted physical capacitive circular fingerprint reader
    "Water Damage Recovery": "5,000 NGN", // Basic circuit drying and low-level moisture recovery
    "Motherboard Micro-Soldering": "20,000 NGN", // Legacy quad-core architecture processing system mainboard
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Camon Premier": {
    "Screen Replacement": "22,000 NGN", // Legacy premium tier 5.5-inch FHD IPS display element
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "5,500 NGN", // Structured polycarbonate rear shell panel layout
    "Battery Replacement": "6,500 NGN", // 3300mAh standard budget lithium power module
    "Charging Port Repair": "4,000 NGN", // Micro-USB system interface sub-board assembly
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "12,000 NGN", // 13MP high-spec legacy focal camera sensor package
    "Front Camera/FaceID Repair": "6,000 NGN", // 8MP portrait capture camera set with front flash
    "Loudspeaker Repair": "3,500 NGN", // Mono lower chassis audio output driver box
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "3,500 NGN", // 3.5mm standard analog interface connector
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "5,000 NGN", // Front hardware biometric home button connection strip
    "Water Damage Recovery": "5,500 NGN", // Entry-level chemical decontamination bath service
    "Motherboard Micro-Soldering": "24,000 NGN", // Balanced mid-tier legacy core logic unit mainboard
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "7,500 NGN"
},
"Camon 5G": {
    "Screen Replacement": "40,000 NGN", // Flat 6.67-inch 120Hz high-refresh rate IPS LCD display array
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "9,500 NGN", // Geometric-cut polycarbonate performance backing panel
    "Battery Replacement": "10,000 NGN", // 5000mAh single-cell battery optimized for 5G draw
    "Charging Port Repair": "6,000 NGN", // Type-C fast-charge sub-board logic link
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "24,000 NGN", // 64MP optical image stabilized primary lens sensor package
    "Front Camera/FaceID Repair": "8,500 NGN", // 16MP punch-hole selfie camera module
    "Loudspeaker Repair": "5,500 NGN", // Symmetrical sound projection loudspeaker driver block
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,500 NGN", // 3.5mm legacy audio interface line controller
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN", // Side-rail integrated biometric reader flex ribbon
    "Water Damage Recovery": "7,500 NGN", // Anti-corrosive multi-stage fluid clearance service
    "Motherboard Micro-Soldering": "44,000 NGN", // MediaTek Dimensity 5G-capable logic architecture board
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Camon 11": {
    "Screen Replacement": "22,000 NGN", // 6.2-inch HD+ wide rectangular notch IPS LCD panel
    "Glass Only Repair": "8,500 NGN",
    "Back Glass Replacement": "5,500 NGN", // Glossy composite plastic rear skin panel
    "Battery Replacement": "7,000 NGN", // 3750mAh standard internal power cell module
    "Charging Port Repair": "4,000 NGN", // Micro-USB single-channel power intake interface board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "12,000 NGN", // 13MP main sensor dual-lens housing block
    "Front Camera/FaceID Repair": "6,000 NGN", // 16MP standard entry selfie camera node with AI
    "Loudspeaker Repair": "4,000 NGN", // Standard lower chassis mono audio block
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "3,500 NGN", // 3.5mm standard analog auxiliary connector line
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "5,000 NGN", // Rear physical biometric scanning panel ribbon
    "Water Damage Recovery": "5,500 NGN", // Entry-tier basic moisture extraction treatment
    "Motherboard Micro-Soldering": "24,000 NGN", // MediaTek Helio A22 budget multi-core logic board
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "7,500 NGN"
},
"Camon 12": {
    "Screen Replacement": "24,000 NGN", // 6.52-inch HD+ waterdrop notch IPS LCD screen module
    "Glass Only Repair": "9,000 NGN",
    "Back Glass Replacement": "6,000 NGN", // Nebula gradient plastic backing cover unibody
    "Battery Replacement": "7,500 NGN", // 4000mAh single-cell power distribution matrix
    "Charging Port Repair": "4,000 NGN", // Micro-USB legacy standard dock charging sub-board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "14,000 NGN", // 16MP dual-rear camera module block with wide angle
    "Front Camera/FaceID Repair": "6,500 NGN", // 16MP front-facing drop-notch optics set
    "Loudspeaker Repair": "4,000 NGN", // Standard internal mono sound driver box
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // 3.5mm analog phone jack output assembly
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN", // Rear-mounted capacitive physical biometric reader cable
    "Water Damage Recovery": "6,000 NGN", // Low-level moisture purging and trace stabilization
    "Motherboard Micro-Soldering": "26,000 NGN", // MediaTek Helio P22 processing system logic mainboard
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Camon 15": {
    "Screen Replacement": "26,000 NGN", // 6.6-inch HD+ basic punch-hole IPS LCD panel
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "6,500 NGN", // Smooth-finish lightweight composite plastic rear shell
    "Battery Replacement": "8,000 NGN", // 5000mAh dense core single-cell lithium pack
    "Charging Port Repair": "4,500 NGN", // Micro-USB system interface sub-board assembly
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "16,000 NGN", // 48MP matrix optical primary sensor package block
    "Front Camera/FaceID Repair": "7,000 NGN", // 16MP standard punch-hole selfie camera module
    "Loudspeaker Repair": "4,500 NGN", // Standard lower mono speaker module package
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // 3.5mm analog interface receiver block
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN", // Rear camera-housing-adjacent biometric sensor trace
    "Water Damage Recovery": "6,500 NGN", // Corrosion treatment and liquid extraction washing
    "Motherboard Micro-Soldering": "28,000 NGN", // MediaTek Helio P22 logic control mainboard
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Camon 16": {
    "Screen Replacement": "28,000 NGN", // Large 6.8-inch HD+ dual punch-hole IPS LCD panel
    "Glass Only Repair": "11,000 NGN",
    "Back Glass Replacement": "7,000 NGN", // Matte textured plastic dual-ring design rear housing
    "Battery Replacement": "8,500 NGN", // 5000mAh structural single-cell lithium pack
    "Charging Port Repair": "5,000 NGN", // Micro-USB to Type-C transition-era charging sub-board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "18,000 NGN", // 64MP AI quad camera array sensor block
    "Front Camera/FaceID Repair": "7,500 NGN", // 16MP wide-angle selfie capture camera node
    "Loudspeaker Repair": "4,500 NGN", // Bottom-firing acoustic output audio driver
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Standard 3.5mm analog audio interface port
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN", // Rear-mounted design capacitive biometrics flex cord
    "Water Damage Recovery": "6,500 NGN", // Ultrasonic chemical bath washing and contact preservation
    "Motherboard Micro-Soldering": "32,000 NGN", // MediaTek Helio G70 gaming edition main logic stack
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Camon 17": {
    "Screen Replacement": "30,000 NGN", // 6.6-inch 90Hz fluid rate IPS LCD screen assembly
    "Glass Only Repair": "11,500 NGN",
    "Back Glass Replacement": "7,500 NGN", // Matte textured protective rear shell shield
    "Battery Replacement": "9,000 NGN", // 5000mAh integrated internal power cell module
    "Charging Port Repair": "5,000 NGN", // Modern Type-C interface power dock sub-board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "20,000 NGN", // 48MP AI triple camera tracking sensor package
    "Front Camera/FaceID Repair": "8,000 NGN", // 16MP punch-hole camera module with front flash array
    "Loudspeaker Repair": "5,000 NGN", // Clear audio single-channel loudspeaker block
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN", // 3.5mm sound routing interface port assembly
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "6,500 NGN", // Rear physical capacitive biometric scanner flex line
    "Water Damage Recovery": "7,000 NGN", // Specialized isolation cleaning and drying procedure
    "Motherboard Micro-Soldering": "34,000 NGN", // MediaTek Helio G85 primary processing logic mainboard
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "16,500 NGN",
    "Network/Carrier Unlocking": "9,000 NGN"
},
"Camon 18": {
    "Screen Replacement": "34,000 NGN", // Flat 6.8-inch 90Hz smooth IPS display module
    "Glass Only Repair": "13,000 NGN",
    "Back Glass Replacement": "8,000 NGN", // Matte-finish specialized leather/polycarbonate rear skin
    "Battery Replacement": "9,000 NGN", // 5000mAh high-density power cell architecture
    "Charging Port Repair": "5,000 NGN", // Fast charging Type-C system interface board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "22,000 NGN", // 48MP main focus sensor module block
    "Front Camera/FaceID Repair": "8,000 NGN", // 16MP luminous front capture group with flash
    "Loudspeaker Repair": "5,500 NGN", // Mono lower chassis audio output block
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,500 NGN", // Integrated 3.5mm analog hardware line port
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Side-frame integrated physical fingerprint reader flex
    "Water Damage Recovery": "7,000 NGN", // Standard multi-point liquid extraction and wash service
    "Motherboard Micro-Soldering": "36,000 NGN", // MediaTek Helio G88 core mainboard logic engine
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "17,000 NGN",
    "Network/Carrier Unlocking": "9,500 NGN"
},
"Camon 19": {
    "Screen Replacement": "36,000 NGN", // Flat 6.8-inch FHD+ high-refresh IPS display panel
    "Glass Only Repair": "14,500 NGN",
    "Back Glass Replacement": "9,000 NGN", // Diamond twin-ring plastic geometric backing block
    "Battery Replacement": "10,000 NGN", // 5000mAh resilient lifecycle power core element
    "Charging Port Repair": "5,500 NGN", // Heavy-duty Type-C sub-assembly connector dock
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "24,000 NGN", // 64MP RGBW ultra-clear primary sensor package block
    "Front Camera/FaceID Repair": "8,500 NGN", // 16MP wide-angle selfie sensor component
    "Loudspeaker Repair": "6,000 NGN", // Enhanced mono high-output audio block system
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,500 NGN", // Legacy 3.5mm analog sound interface port assembly
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN", // Side-rail biometric recognition scanning layer
    "Water Damage Recovery": "7,500 NGN", // Professional fluid elimination and logic board stabilization
    "Motherboard Micro-Soldering": "38,000 NGN", // MediaTek Helio G85 secondary distribution mainboard
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Camon 20": {
    "Screen Replacement": "46,000 NGN", // Flat 6.67-inch 60Hz AMOLED display panel with smart matrix
    "Glass Only Repair": "17,000 NGN",
    "Back Glass Replacement": "9,500 NGN", // Premium puzzle deconstruction geometric leather panel array
    "Battery Replacement": "9,500 NGN", // 5000mAh structural single-cell lithium pack
    "Charging Port Repair": "5,500 NGN", // Fast charging 33W Type-C system interface sub-board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "24,000 NGN", // 64MP RGBW primary clear dual lens camera housing block
    "Front Camera/FaceID Repair": "8,500 NGN", // 32MP micro punch-hole camera module with dual flash
    "Loudspeaker Repair": "5,500 NGN", // Symmetrical sound projection loudspeaker driver block
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,500 NGN", // Analog audio jack hub sub-board trace
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "12,000 NGN", // High-speed optical under-display authentication sensor array
    "Water Damage Recovery": "8,000 NGN", // Multi-point fluid clearance and contact preservation
    "Motherboard Micro-Soldering": "40,000 NGN", // MediaTek Helio G85 primary processing logic mainboard
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Camon 30": {
    "Screen Replacement": "52,000 NGN", // Flat 6.78-inch 120Hz smooth AMOLED screen module
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "12,000 NGN", // Classical side-axis camera ring textured back cover
    "Battery Replacement": "10,500 NGN", // 5000mAh high-capacity single-cell power array
    "Charging Port Repair": "6,000 NGN", // Enhanced 45W fast-charging Type-C subsystem dock
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "28,000 NGN", // 50MP intelligent AI camera tracking sensor package with OIS
    "Front Camera/FaceID Repair": "9,000 NGN", // 50MP dual-flash optimized selfie camera module
    "Loudspeaker Repair": "6,000 NGN", // High-output stereo dual-speaker audio chamber block
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "N/A", // Audio routing handled natively via USB Type-C interface
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "13,000 NGN", // Under-display biometric scanner matrix array
    "Water Damage Recovery": "8,500 NGN", // Ingress barrier structural restoration service
    "Motherboard Micro-Soldering": "46,000 NGN", // MediaTek Helio G99 Ultimate logic control mainboard
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Camon 40": {
    "Screen Replacement": "55,000 NGN", // Immersive 6.78-inch 120Hz smooth AMOLED display panel
    "Glass Only Repair": "22,000 NGN",
    "Back Glass Replacement": "14,000 NGN", // High-end textured eco-leather unibody backing panel
    "Battery Replacement": "11,000 NGN", // 5000mAh ultra-fast discharge safety cell module
    "Charging Port Repair": "6,500 NGN", // Advanced 45W fast-charging Type-C docking node
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "32,000 NGN", // 50MP phase-detection primary sensor block with OIS
    "Front Camera/FaceID Repair": "10,000 NGN", // 50MP eye-autofocus front portrait lens array module
    "Loudspeaker Repair": "6,500 NGN", // Dolby Atmos certified structural stereo sound drivers
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "N/A", // Audio routing handled natively via USB Type-C interface
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "14,000 NGN", // High-speed optical under-display biometrics scanning module
    "Water Damage Recovery": "9,000 NGN", // Precision liquid evacuation and structural edge sealing
    "Motherboard Micro-Soldering": "50,000 NGN", // Android 16 optimized mid-tier main core system logic board
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "24,000 NGN",
    "Network/Carrier Unlocking": "14,000 NGN"
},
"Pop 1": {
    "Screen Replacement": "12,000 NGN", // Legacy 5.5-inch 18:9 full view FWVGA+ TN display panel
    "Glass Only Repair": "5,000 NGN",
    "Back Glass Replacement": "3,500 NGN", // Classic removable textured polycarbonate plastic back shell
    "Battery Replacement": "4,500 NGN", // 2400mAh removable lithium power cell block
    "Charging Port Repair": "2,500 NGN", // Entry-level micro-USB 2.0 power intake dock assembly
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "5,000 NGN", // Basic 5MP single lens camera capture block with LED flash
    "Front Camera/FaceID Repair": "3,500 NGN", // 5MP legacy front-facing camera with physical selfie flash
    "Loudspeaker Repair": "2,500 NGN", // Standard rear-facing mono sound transducer driver box
    "Microphone Repair": "2,000 NGN",
    "Headphone Jack Repair": "2,500 NGN", // Native 3.5mm analog auxiliary interface audio rail
    "Power/Volume Button Repair": "2,500 NGN",
    "Fingerprint/Home Button Repair": "N/A", // Base variant lacks physical biometric scanning hardware
    "Water Damage Recovery": "4,000 NGN", // Low-level moisture purging and trace stabilization
    "Motherboard Micro-Soldering": "12,000 NGN", // Legacy MediaTek MT6580 quad-core 3G main system board
    "Software/Bootloop Flashing": "3,500 NGN",
    "Data Recovery": "8,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Pop 2": {
    "Screen Replacement": "13,000 NGN", // 5.5-inch full view display module with protective shield
    "Glass Only Repair": "5,500 NGN",
    "Back Glass Replacement": "3,500 NGN", // Lightweight composite budget plastic rear housing
    "Battery Replacement": "4,500 NGN", // 2400mAh low-capacity integrated power module
    "Charging Port Repair": "2,500 NGN", // Micro-USB system interface sub-board assembly
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "5,000 NGN", // 5MP AI-assisted budget rear camera sensor node
    "Front Camera/FaceID Repair": "4,000 NGN", // 8MP portrait capture camera set with front flash
    "Loudspeaker Repair": "2,500 NGN", // Mono lower chassis audio output driver box
    "Microphone Repair": "2,000 NGN",
    "Headphone Jack Repair": "2,500 NGN", // 3.5mm standard analog interface connector
    "Power/Volume Button Repair": "2,500 NGN",
    "Fingerprint/Home Button Repair": "4,000 NGN", // Rear physical capacitive circular biometric scanner flex
    "Water Damage Recovery": "4,000 NGN", // Entry-level chemical decontamination bath service
    "Motherboard Micro-Soldering": "14,000 NGN", // Entry-tier legacy core logic unit mainboard
    "Software/Bootloop Flashing": "3,500 NGN",
    "Data Recovery": "8,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Pop 3": {
    "Screen Replacement": "14,500 NGN", // Larger 5.7-inch notchless clear-view display panel
    "Glass Only Repair": "6,000 NGN",
    "Back Glass Replacement": "4,000 NGN", // Glossy gradient plastic skin backing cover panel
    "Battery Replacement": "5,000 NGN", // 3000mAh structural single-cell lithium pack
    "Charging Port Repair": "3,000 NGN", // Micro-USB legacy standard dock charging sub-board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "6,000 NGN", // 5MP fixed-focus rear camera array block
    "Front Camera/FaceID Repair": "4,500 NGN", // 8MP standard punch-hole style selfie camera module
    "Loudspeaker Repair": "3,000 NGN", // Standard internal mono sound driver box
    "Microphone Repair": "2,000 NGN",
    "Headphone Jack Repair": "2,500 NGN", // 3.5mm analog phone jack output assembly
    "Power/Volume Button Repair": "3,000 NGN",
    "Fingerprint/Home Button Repair": "4,000 NGN", // Rear-mounted capacitive biometrics flex cord
    "Water Damage Recovery": "4,500 NGN", // Anti-corrosive multi-stage fluid clearance service
    "Motherboard Micro-Soldering": "16,000 NGN", // MediaTek MT6580P architecture processing mainboard
    "Software/Bootloop Flashing": "3,500 NGN",
    "Data Recovery": "9,000 NGN",
    "Network/Carrier Unlocking": "5,000 NGN"
},
"Pop 4": {
    "Screen Replacement": "16,000 NGN", // 6.0-inch classic broad bezel widescreen display module
    "Glass Only Repair": "6,500 NGN",
    "Back Glass Replacement": "4,000 NGN", // Rigid textured protective rear shell shield
    "Battery Replacement": "5,500 NGN", // 5000mAh heavy-duty high-density energy pack
    "Charging Port Repair": "3,000 NGN", // Single-channel micro-USB power distribution node
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "6,500 NGN", // 5MP main focus sensor module block with flash
    "Front Camera/FaceID Repair": "4,500 NGN", // 8MP standard entry selfie camera node
    "Loudspeaker Repair": "3,000 NGN", // Bottom-firing acoustic output audio driver
    "Microphone Repair": "2,000 NGN",
    "Headphone Jack Repair": "3,000 NGN", // Standard 3.5mm analog audio interface port
    "Power/Volume Button Repair": "3,000 NGN",
    "Fingerprint/Home Button Repair": "4,500 NGN", // Rear-mounted design capacitive biometrics flex cord
    "Water Damage Recovery": "5,000 NGN", // Specialized isolation cleaning and drying procedure
    "Motherboard Micro-Soldering": "18,000 NGN", // Quad-core budget logic distribution mainboard
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "10,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Pop 5": {
    "Screen Replacement": "18,500 NGN", // 6.1-inch HD+ waterdrop notch IPS LCD screen assembly
    "Glass Only Repair": "7,000 NGN",
    "Back Glass Replacement": "4,500 NGN", // Smooth geometric-cut lightweight composite plastic shell
    "Battery Replacement": "6,000 NGN", // 4000mAh dense core single-cell lithium pack
    "Charging Port Repair": "3,500 NGN", // Micro-USB legacy docking node interface board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "7,500 NGN", // 5MP dual rear camera module block with wide angle
    "Front Camera/FaceID Repair": "5,000 NGN", // 5MP front-facing drop-notch optics set
    "Loudspeaker Repair": "3,500 NGN", // Standard lower mono speaker module package
    "Microphone Repair": "2,500 NGN",
    "Headphone Jack Repair": "3,000 NGN", // Analog audio jack hub sub-board trace
    "Power/Volume Button Repair": "3,000 NGN",
    "Fingerprint/Home Button Repair": "5,000 NGN", // Rear camera-housing-adjacent biometric sensor trace
    "Water Damage Recovery": "5,500 NGN", // Ultrasonic chemical bath washing and contact preservation
    "Motherboard Micro-Soldering": "22,000 NGN", // Spreadtrum SC7731E/Unisoc entry-tier core logic mainboard
    "Software/Bootloop Flashing": "4,000 NGN",
    "Data Recovery": "11,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Pop 6": {
    "Screen Replacement": "21,000 NGN", // 6.1-inch HD+ waterdrop notch smartphone screen element
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "4,500 NGN", // Metallic look textured plastic rear skin array
    "Battery Replacement": "6,500 NGN", // 3000mAh thin-form power cell block
    "Charging Port Repair": "3,500 NGN", // Transition-era micro-USB charging sub-board link
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "8,000 NGN", // 5MP AI dual-lens camera tracking housing block
    "Front Camera/FaceID Repair": "5,000 NGN", // 5MP clear front capture group with flash
    "Loudspeaker Repair": "3,500 NGN", // Clear audio single-channel loudspeaker block
    "Microphone Repair": "2,500 NGN",
    "Headphone Jack Repair": "3,000 NGN", // 3.5mm sound routing interface port assembly
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN", // Rear physical capacitive biometric scanner flex line
    "Water Damage Recovery": "6,000 NGN", // Multi-point fluid clearance and contact preservation
    "Motherboard Micro-Soldering": "24,000 NGN", // Unisoc SC9832E balanced 4G network logic engine
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "7,000 NGN"
},
"Pop 7": {
    "Screen Replacement": "24,000 NGN", // Large 6.6-inch HD+ waterdrop notch balance display panel
    "Glass Only Repair": "9,000 NGN",
    "Back Glass Replacement": "5,000 NGN", // Modern square-module design composite plastic shell
    "Battery Replacement": "7,000 NGN", // 5000mAh resilient lifecycle power core element
    "Charging Port Repair": "4,000 NGN", // Upgraded USB Type-C interface power dock sub-board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "10,000 NGN", // 8MP dual clear main lens camera housing block
    "Front Camera/FaceID Repair": "5,500 NGN", // 5MP front-facing drop-notch optics set
    "Loudspeaker Repair": "4,000 NGN", // Enhanced mono high-output audio block system
    "Microphone Repair": "2,500 NGN",
    "Headphone Jack Repair": "3,500 NGN", // Standard 3.5mm analog hardware line port
    "Power/Volume Button Repair": "3,500 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN", // Rear physical biometric recognition scanning layer
    "Water Damage Recovery": "6,500 NGN", // Precision liquid evacuation and structural edge sealing
    "Motherboard Micro-Soldering": "27,000 NGN", // Unisoc SC9863A1 system logic control mainboard
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "13,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Pop 8": {
    "Screen Replacement": "28,000 NGN", // 6.6-inch 90Hz fluid rate interactive dynamic port screen array
    "Glass Only Repair": "11,000 NGN",
    "Back Glass Replacement": "5,500 NGN", // Skin-friendly matte finish textured back cover panel
    "Battery Replacement": "7,500 NGN", // 5000mAh high-capacity single-cell power array
    "Charging Port Repair": "4,500 NGN", // Modern Type-C fast-charge sub-board logic link
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "12,000 NGN", // 13MP intelligent AI camera tracking sensor package
    "Front Camera/FaceID Repair": "6,000 NGN", // 8MP dual-flash optimized selfie camera module
    "Loudspeaker Repair": "4,500 NGN", // Dual stereo sound projection loudspeaker driver block
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "3,500 NGN", // Legacy 3.5mm analog sound interface port assembly
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Side-rail integrated biometric reader flex ribbon
    "Water Damage Recovery": "7,000 NGN", // Multi-seal fluid removal and decontamination service
    "Motherboard Micro-Soldering": "30,000 NGN", // Unisoc T606 performance entry processing logic board
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "9,000 NGN"
},
"Pop 9": {
    "Screen Replacement": "32,000 NGN", // Upgraded 6.6-inch 120Hz smooth fluid rate display module
    "Glass Only Repair": "12,500 NGN",
    "Back Glass Replacement": "6,000 NGN", // Premium visual dynamic textured backing panel
    "Battery Replacement": "8,000 NGN", // 5000mAh single-cell battery optimized for fast draw
    "Charging Port Repair": "5,000 NGN", // Heavy-duty Type-C sub-assembly connector dock
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "15,000 NGN", // 48MP Sony/OmniVision primary sharp lens sensor block
    "Front Camera/FaceID Repair": "6,500 NGN", // 8MP high-definition selfie optics group module
    "Loudspeaker Repair": "5,000 NGN", // High-output stereo dual-speaker audio chamber block
    "Microphone Repair": "3,000 NGN",
    "Headphone Jack Repair": "4,000 NGN", // Integrated 3.5mm analog hardware line port
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN", // Advanced side-frame biometric scanner matrix array
    "Water Damage Recovery": "7,500 NGN", // Modern balance architecture multi-seal liquid extraction
    "Motherboard Micro-Soldering": "35,000 NGN", // MediaTek Helio G85/Unisoc T615 modern core mainboard
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "16,500 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Pop 10": {
    "Screen Replacement": "35,000 NGN", // Next-gen 6.67-inch high-rate smooth AMOLED/LCD matrix element
    "Glass Only Repair": "14,000 NGN",
    "Back Glass Replacement": "7,000 NGN", // Ultra-modern aesthetic premium styled back casing
    "Battery Replacement": "8,500 NGN", // 5000mAh ultra-fast discharge safety cell module
    "Charging Port Repair": "5,500 NGN", // Advanced fast-charging Type-C docking node interface
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "18,000 NGN", // 50MP phase-detection primary sensor block with macro assist
    "Front Camera/FaceID Repair": "7,500 NGN", // 16MP pro-tier visual capture array module
    "Loudspeaker Repair": "5,500 NGN", // Dolby optimized structural stereo sound drivers
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "N/A", // Audio routing handled natively via USB Type-C interface
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "8,500 NGN", // High-speed optical side/under-display biometric module
    "Water Damage Recovery": "8,500 NGN", // Professional fluid elimination and logic board stabilization
    "Motherboard Micro-Soldering": "40,000 NGN", // Android 16 entry-optimized modern processing mainboard
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Pixel Fold": {
    "Screen Replacement": "380,000 NGN", // Internal 7.6-inch flexible OLED panel (Outer display separate)
    "Glass Only Repair": "45,000 NGN", // Outer cover glass restoration only
    "Back Glass Replacement": "30,000 NGN", // Gorilla Glass Victus rear panel assembly
    "Battery Replacement": "35,000 NGN", // Dual-cell split battery system (4491mAh combined)
    "Charging Port Repair": "25,000 NGN", // Type-C port integrated on the lower sub-board
    "Wireless Charging Repair": "18,000 NGN", // Qi charging coil module beneath the back cover
    "Rear Camera Repair": "48,000 NGN", // Triple array: 48MP main + 10.8MP ultra-wide + 10.8MP telephoto
    "Front Camera/FaceID Repair": "22,000 NGN", // 9.5MP outer or 8MP inner camera component
    "Loudspeaker Repair": "15,000 NGN", // Multi-point stereo speaker enclosure system
    "Microphone Repair": "12,000 NGN",
    "Headphone Jack Repair": "N/A", // Audio natively managed via Type-C interface
    "Power/Volume Button Repair": "18,000 NGN",
    "Fingerprint/Home Button Repair": "20,000 NGN", // Capacitive sensor integrated into the power key
    "Water Damage Recovery": "35,000 NGN", // IPX8 fluid treatment and internal hinge decontamination
    "Motherboard Micro-Soldering": "95,000 NGN", // Google Tensor G2 primary architecture board
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "35,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Pixel 9 Pro Fold": {
    "Screen Replacement": "480,000 NGN", // 8.0-inch LTPO flexible Actua inner display
    "Glass Only Repair": "55,000 NGN",
    "Back Glass Replacement": "38,000 NGN", // Matte Gorilla Glass Victus 2 back plate
    "Battery Replacement": "40,000 NGN", // Dual structure high-density performance cell (4650mAh)
    "Charging Port Repair": "30,000 NGN", // Type-C module with heavy duty micro-soldered lines
    "Wireless Charging Repair": "22,000 NGN", // Qi wireless and reverse charging induction array
    "Rear Camera Repair": "65,000 NGN", // Advanced thin triple module with 5x optical telephoto
    "Front Camera/FaceID Repair": "28,000 NGN", // 10MP dual inner/outer punch-hole camera components
    "Loudspeaker Repair": "18,000 NGN", // Spatial audio calibrated twin speaker modules
    "Microphone Repair": "15,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "22,000 NGN",
    "Fingerprint/Home Button Repair": "25,000 NGN", // Side-frame fast-response biometric sensor
    "Water Damage Recovery": "45,000 NGN", // Advanced IPX8 deep-chassis fluid evacuation
    "Motherboard Micro-Soldering": "140,000 NGN", // Google Tensor G4 AI-integrated core logic logic board
    "Software/Bootloop Flashing": "12,000 NGN",
    "Data Recovery": "45,000 NGN",
    "Network/Carrier Unlocking": "20,000 NGN"
},
"Pixel 10 Pro Fold": {
    "Screen Replacement": "550,000 NGN", // Next-gen flexible ultra-thin OLED matrix component
    "Glass Only Repair": "65,000 NGN",
    "Back Glass Replacement": "45,000 NGN", // Premium scratch-resistant composite back plate
    "Battery Replacement": "45,000 NGN", // Dual architecture high-efficiency power blocks
    "Charging Port Repair": "35,000 NGN", // USB-C high-wattage intake dock tracking assembly
    "Wireless Charging Repair": "25,000 NGN", // Upgraded wireless induction and heat shield array
    "Rear Camera Repair": "80,000 NGN", // Next-gen AI-optimized multi-lens main camera block
    "Front Camera/FaceID Repair": "32,000 NGN", // Advanced wide-angle inner/outer camera modules
    "Loudspeaker Repair": "20,000 NGN", // High-fidelity spatial audio transducer package
    "Microphone Repair": "18,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "25,000 NGN",
    "Fingerprint/Home Button Repair": "28,000 NGN", // Side-rail integrated biometric module
    "Water Damage Recovery": "50,000 NGN", // Professional chassis fluid isolation and hinge drying
    "Motherboard Micro-Soldering": "180,000 NGN", // Google Tensor G5 next-gen custom system board
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "50,000 NGN",
    "Network/Carrier Unlocking": "25,000 NGN"
},
"Pixel 9 Pro XL": {
    "Screen Replacement": "240,000 NGN", // 6.8-inch Super Actua LTPO OLED display panel
    "Glass Only Repair": "40,000 NGN",
    "Back Glass Replacement": "28,000 NGN", // Silky matte structural rear glass shield
    "Battery Replacement": "28,000 NGN", // 5060mAh fast-charging lithium polymer cell
    "Charging Port Repair": "22,000 NGN", // USB Type-C 3.2 standalone dock port flex
    "Wireless Charging Repair": "16,000 NGN", // Fast Qi wireless charging receiver module
    "Rear Camera Repair": "55,000 NGN", // 50MP main + 48MP ultra-wide + 48MP 5x telephoto block
    "Front Camera/FaceID Repair": "25,000 NGN", // High-res 42MP auto-focus front optics group
    "Loudspeaker Repair": "14,000 NGN", // Premium dual-firing structural stereo driver
    "Microphone Repair": "12,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "16,000 NGN",
    "Fingerprint/Home Button Repair": "28,000 NGN", // Advanced ultrasonic under-display scanning layer
    "Water Damage Recovery": "25,000 NGN", // IP68 moisture extraction and shield trace treatment
    "Motherboard Micro-Soldering": "110,000 NGN", // Tensor G4 platform main processing logic board
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "35,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Pixel 10 Pro XL": {
    "Screen Replacement": "280,000 NGN", // Advanced high-brightness next-gen LTPO Actua screen
    "Glass Only Repair": "45,000 NGN",
    "Back Glass Replacement": "32,000 NGN", // High-grade premium protective rear glass matrix
    "Battery Replacement": "32,000 NGN", // High-capacity smart discharge power cell
    "Charging Port Repair": "25,000 NGN", // Next-gen fast-charging interface connector dock
    "Wireless Charging Repair": "18,000 NGN", // High-speed induction array with thermal shielding
    "Rear Camera Repair": "70,000 NGN", // Pro-tier next-gen multi-sensor primary camera array
    "Front Camera/FaceID Repair": "28,000 NGN", // Ultra-clear punch-hole front camera system
    "Loudspeaker Repair": "16,000 NGN", // Calibrated stereo acoustics output module
    "Microphone Repair": "14,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "18,000 NGN",
    "Fingerprint/Home Button Repair": "32,000 NGN", // Premium under-display scanning node assembly
    "Water Damage Recovery": "30,000 NGN", // Complete fluid extraction and contact treatment
    "Motherboard Micro-Soldering": "140,000 NGN", // Google Tensor G5 elite processing system board
    "Software/Bootloop Flashing": "12,000 NGN",
    "Data Recovery": "40,000 NGN",
    "Network/Carrier Unlocking": "18,000 NGN"
},
"Pixel 6 Pro": {
    "Screen Replacement": "135,000 NGN", // 6.7-inch curved LTPO AMOLED display module
    "Glass Only Repair": "25,000 NGN",
    "Back Glass Replacement": "18,000 NGN", // Dual-tone Gorilla Glass Victus back plate
    "Battery Replacement": "18,000 NGN", // 5003mAh high-density internal battery block
    "Charging Port Repair": "15,000 NGN", // Type-C port micro-soldered directly to sub-board
    "Wireless Charging Repair": "12,000 NGN", // Qi wireless coil and NFC multi-circuit line
    "Rear Camera Repair": "32,000 NGN", // 50MP main + 12MP ultra-wide + 48MP 4x telephoto array
    "Front Camera/FaceID Repair": "15,000 NGN", // 11.1MP ultra-wide front-facing camera node
    "Loudspeaker Repair": "10,000 NGN", // Lower stereo sound transducer driver assembly
    "Microphone Repair": "9,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "16,000 NGN", // Optical under-display biometric scanner matrix
    "Water Damage Recovery": "15,000 NGN", // IP68 level multi-stage cleaning protocol
    "Motherboard Micro-Soldering": "60,000 NGN", // Google Tensor (1st Gen) processing logic engine
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Pixel 7 Pro": {
    "Screen Replacement": "165,000 NGN", // 6.7-inch micro-curved QHD+ LTPO OLED element
    "Glass Only Repair": "28,000 NGN",
    "Back Glass Replacement": "20,000 NGN", // Polished aluminum-frame aligned back glass shield
    "Battery Replacement": "20,000 NGN", // 5000mAh structural single-cell lithium pack
    "Charging Port Repair": "16,000 NGN", // Type-C connection interface logic link
    "Wireless Charging Repair": "14,000 NGN", // Reverse-wireless capable induction plate
    "Rear Camera Repair": "38,000 NGN", // 50MP main + 12MP ultra-wide + 48MP 5x telephoto setup
    "Front Camera/FaceID Repair": "16,000 NGN", // 10.8MP wide-angle front optics group
    "Loudspeaker Repair": "11,000 NGN", // High-fidelity lower balance audio driver box
    "Microphone Repair": "10,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "14,000 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN", // Upgraded optical in-display sensor node
    "Water Damage Recovery": "18,000 NGN", // Precision moisture chemical decontamination bath
    "Motherboard Micro-Soldering": "75,000 NGN", // Google Tensor G2 core distribution mainboard
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Pixel 8 Pro": {
    "Screen Replacement": "210,000 NGN", // 6.7-inch flat Super Actua high-brightness OLED panel
    "Glass Only Repair": "35,000 NGN",
    "Back Glass Replacement": "24,000 NGN", // Matte finish Gorilla Glass Victus 2 shield
    "Battery Replacement": "24,000 NGN", // 5050mAh continuous draw battery assembly
    "Charging Port Repair": "20,000 NGN", // USB-C 3.2 fast-draw power sub-board array
    "Wireless Charging Repair": "15,000 NGN", // Dedicated internal charging induction ring
    "Rear Camera Repair": "48,000 NGN", // Pro-tier triple 50MP + 48MP + 48MP camera block
    "Front Camera/FaceID Repair": "20,000 NGN", // 10.5MP auto-focus front-facing camera module
    "Loudspeaker Repair": "12,000 NGN", // High-output stereo sound projection chamber
    "Microphone Repair": "11,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "15,000 NGN",
    "Fingerprint/Home Button Repair": "22,000 NGN", // Fast optical under-screen biometric sensor
    "Water Damage Recovery": "22,000 NGN", // Comprehensive fluid extraction and board treatment
    "Motherboard Micro-Soldering": "90,000 NGN", // Google Tensor G3 performance computing board
    "Software/Bootloop Flashing": "9,000 NGN",
    "Data Recovery": "30,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Pixel 9 Pro": {
    "Screen Replacement": "230,000 NGN", // 6.3-inch compact Super Actua LTPO OLED screen block
    "Glass Only Repair": "38,000 NGN",
    "Back Glass Replacement": "26,000 NGN", // Premium matte-textured protective glass shield
    "Battery Replacement": "26,000 NGN", // 4700mAh dense core power cell block
    "Charging Port Repair": "22,000 NGN", // Heavy duty Type-C communication interface board
    "Wireless Charging Repair": "16,000 NGN", // High-efficiency charging coil and thermal layer
    "Rear Camera Repair": "52,000 NGN", // Compact pro triple 50MP + 48MP + 48MP module assembly
    "Front Camera/FaceID Repair": "24,000 NGN", // 42MP high-definition auto-focus selfie camera
    "Loudspeaker Repair": "14,000 NGN", // Stereo acoustic output audio driver box
    "Microphone Repair": "12,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "16,000 NGN",
    "Fingerprint/Home Button Repair": "26,000 NGN", // Precision ultrasonic under-display scanner array
    "Water Damage Recovery": "25,000 NGN", // Specialized isolation cleaning and drying procedure
    "Motherboard Micro-Soldering": "110,000 NGN", // Google Tensor G4 integrated system logic board
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "35,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Pixel 10 Pro": {
    "Screen Replacement": "260,000 NGN", // Next-gen high refresh rate Actua OLED display assembly
    "Glass Only Repair": "42,000 NGN",
    "Back Glass Replacement": "30,000 NGN", // Premium custom matte-finish rear glass panel
    "Battery Replacement": "30,000 NGN", // Smart management dense architecture power unit
    "Charging Port Repair": "25,000 NGN", // Next-gen Type-C interface power dock assembly
    "Wireless Charging Repair": "18,000 NGN", // Fast induction receiver module with heat management
    "Rear Camera Repair": "65,000 NGN", // Pro-tier next-generation triple camera matrix block
    "Front Camera/FaceID Repair": "26,000 NGN", // Advanced punch-hole face unlock camera module
    "Loudspeaker Repair": "15,000 NGN", // High-fidelity stereo acoustics loudspeaker box
    "Microphone Repair": "14,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "18,000 NGN",
    "Fingerprint/Home Button Repair": "30,000 NGN", // Under-display scanning array tracking layer
    "Water Damage Recovery": "28,000 NGN", // Precision fluid evacuation and trace stabilization
    "Motherboard Micro-Soldering": "135,000 NGN", // Google Tensor G5 custom mobile processing platform
    "Software/Bootloop Flashing": "12,000 NGN",
    "Data Recovery": "40,000 NGN",
    "Network/Carrier Unlocking": "18,000 NGN"
},
"Pixel": {
    "Screen Replacement": "30,000 NGN", // Legacy 5.0-inch FHD AMOLED standard aspect panel
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "6,500 NGN", // Classic half-glass, half-aluminum rear accent cover
    "Battery Replacement": "8,500 NGN", // 2770mAh internal lithium storage module
    "Charging Port Repair": "6,000 NGN", // Early Type-C 1.0 interface docking sub-board
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "10,000 NGN", // 12.3MP legendary single lens rear camera block
    "Front Camera/FaceID Repair": "6,000 NGN", // 8MP fixed-focus front capture node
    "Loudspeaker Repair": "6,000 NGN", // Base mono audio transducer chamber assembly
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "5,500 NGN", // Native top-mounted 3.5mm analog audio socket
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN", // Imprint rear capacitive circular biometric sensor
    "Water Damage Recovery": "8,000 NGN", // Non-waterproof chassis moisture extraction service
    "Motherboard Micro-Soldering": "24,000 NGN", // Snapdragon 821 platform primary system board
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Pixel XL": {
    "Screen Replacement": "35,000 NGN", // 5.5-inch QHD AMOLED legacy widescreen module
    "Glass Only Repair": "9,000 NGN",
    "Back Glass Replacement": "7,000 NGN", // Half-glass accent split aluminum back plate
    "Battery Replacement": "9,000 NGN", // 3450mAh internal power core assembly
    "Charging Port Repair": "6,000 NGN", // First-gen Type-C power intake connector flex
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "10,000 NGN", // 12.3MP high-performance single optics node
    "Front Camera/FaceID Repair": "6,000 NGN", // 8MP standard selfie tracking camera block
    "Loudspeaker Repair": "6,000 NGN", // Bottom-firing classic mono sound driver box
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "5,500 NGN", // Top-rail 3.5mm analog auxiliary interface rail
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN", // Rear circular capacitive Imprint sensor link
    "Water Damage Recovery": "8,000 NGN", // Low-level moisture purging and corrosion control
    "Motherboard Micro-Soldering": "26,000 NGN", // Snapdragon 821 architecture core logic mainboard
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "13,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Pixel 2": {
    "Screen Replacement": "36,000 NGN", // 5.0-inch cinematic bezel AMOLED display screen
    "Glass Only Repair": "9,500 NGN",
    "Back Glass Replacement": "7,500 NGN", // Refined split glass accent aluminum enclosure
    "Battery Replacement": "9,500 NGN", // 2700mAh compact lithium system power cell
    "Charging Port Repair": "7,000 NGN", // USB-C digital interface connection port flex
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "12,000 NGN", // 12.2MP OIS-stabilized single lens camera asset
    "Front Camera/FaceID Repair": "6,500 NGN", // 8MP front portrait capture camera block
    "Loudspeaker Repair": "7,000 NGN", // Front-facing dual acoustic stereo speaker element
    "Microphone Repair": "5,500 NGN",
    "Headphone Jack Repair": "N/A", // Removal of analog jack; handled via Type-C interface
    "Power/Volume Button Repair": "6,500 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN", // Rear capacitive biometric fingerprint strip
    "Water Damage Recovery": "9,000 NGN", // IP67 trace washing and element stabilization
    "Motherboard Micro-Soldering": "28,000 NGN", // Snapdragon 835 high-tier legacy processing board
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "7,000 NGN"
},
"Pixel 2 XL": {
    "Screen Replacement": "48,000 NGN", // 6.0-inch pOLED 18:9 tall aspect ratio screen panel
    "Glass Only Repair": "11,000 NGN",
    "Back Glass Replacement": "8,000 NGN", // Extended metal casing with top glass cap piece
    "Battery Replacement": "10,000 NGN", // 3520mAh optimized form-factor power cell block
    "Charging Port Repair": "7,500 NGN", // Type-C terminal charging sub-board link
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "14,000 NGN", // 12.2MP primary smart capture camera sensor
    "Front Camera/FaceID Repair": "7,000 NGN", // 8MP front-facing wide field lens block
    "Loudspeaker Repair": "7,500 NGN", // Twin frontal stereo sound output system blocks
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "7,000 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN", // Fast response rear capacitive biometric chip
    "Water Damage Recovery": "10,000 NGN", // IP67 fluid isolation and contact drying procedure
    "Motherboard Micro-Soldering": "32,000 NGN", // Qualcomm Snapdragon 835 primary mainboard logic
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "7,000 NGN"
},
"Pixel 3": {
    "Screen Replacement": "45,000 NGN", // 5.5-inch notchless flexible OLED display element
    "Glass Only Repair": "11,000 NGN",
    "Back Glass Replacement": "9,000 NGN", // All-glass matte/gloss etched back panel assembly
    "Battery Replacement": "11,000 NGN", // 2915mAh thin profile internal power cell
    "Charging Port Repair": "8,000 NGN", // Type-C power distribution charging flex assembly
    "Wireless Charging Repair": "8,500 NGN", // Pixel Stand compatible Qi induction coil module
    "Rear Camera Repair": "15,000 NGN", // 12.2MP dual-pixel computational primary camera node
    "Front Camera/FaceID Repair": "9,500 NGN", // Dual 8MP standard + ultra-wide front optical bay
    "Loudspeaker Repair": "8,000 NGN", // Balanced front-firing dual speaker audio kit
    "Microphone Repair": "6,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "7,500 NGN",
    "Fingerprint/Home Button Repair": "8,500 NGN", // Circular rear capacitive biometric scanner unit
    "Water Damage Recovery": "11,000 NGN", // IP68 level multi-stage chemical decontamination bath
    "Motherboard Micro-Soldering": "35,000 NGN", // Qualcomm Snapdragon 845 main computational board
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Pixel 3 XL": {
    "Screen Replacement": "58,000 NGN", // 6.3-inch deep notch flexible OLED screen display
    "Glass Only Repair": "13,000 NGN",
    "Back Glass Replacement": "10,000 NGN", // Custom dual-texture chemically etched back glass
    "Battery Replacement": "12,000 NGN", // 3430mAh internal lithium polymer storage unit
    "Charging Port Repair": "8,500 NGN", // Single channel Type-C charging port sub-board
    "Wireless Charging Repair": "9,000 NGN", // Core Qi wireless receiver pad assembly
    "Rear Camera Repair": "16,000 NGN", // 12.2MP high dynamic range primary lens system
    "Front Camera/FaceID Repair": "10,000 NGN", // Dual 8MP selfie array housed within deep notch
    "Loudspeaker Repair": "8,500 NGN", // High-clear dual frontal stereo output speakers
    "Microphone Repair": "7,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "8,000 NGN",
    "Fingerprint/Home Button Repair": "8,500 NGN", // Pixel Imprint rear capacitive sensor line
    "Water Damage Recovery": "12,000 NGN", // Structural edge cleaning and fluid clearance routine
    "Motherboard Micro-Soldering": "38,000 NGN", // Snapdragon 845 with Titan M security co-processor board
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Pixel 4": {
    "Screen Replacement": "55,000 NGN", // 5.7-inch 90Hz Smooth Display OLED panel component
    "Glass Only Repair": "14,000 NGN",
    "Back Glass Replacement": "11,000 NGN", // Soft-touch matte finish treated rear glass shield
    "Battery Replacement": "12,000 NGN", // 2800mAh internal high-drain cell package
    "Charging Port Repair": "9,500 NGN", // USB-C port tracking line connector assembly
    "Wireless Charging Repair": "9,500 NGN", // Fast Qi charging circuit and logic trace
    "Rear Camera Repair": "22,000 NGN", // Dual setup: 12.2MP main + 16MP 2x telephoto camera block
    "Front Camera/FaceID Repair": "16,000 NGN", // 8MP camera + Soli Radar + Dot Projector biometric array
    "Loudspeaker Repair": "9,000 NGN", // Bottom audio routing acoustic transducer box
    "Microphone Repair": "7,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "8,500 NGN",
    "Fingerprint/Home Button Repair": "N/A", // Replaced entirely by Face Unlock hardware array
    "Water Damage Recovery": "14,000 NGN", // Multi-point moisture removal and logic treatment
    "Motherboard Micro-Soldering": "42,000 NGN", // Qualcomm Snapdragon 855 advanced processing board
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Pixel 4 XL": {
    "Screen Replacement": "72,000 NGN", // 6.3-inch 90Hz QHD+ Smooth Display OLED panel
    "Glass Only Repair": "16,000 NGN",
    "Back Glass Replacement": "13,000 NGN", // Clean accent matte/gloss hybrid back glass wrap
    "Battery Replacement": "14,000 NGN", // 3700mAh internal structural single-cell pack
    "Charging Port Repair": "10,000 NGN", // Type-C high power intake connection node
    "Wireless Charging Repair": "10,000 NGN", // Integrated wireless charging and NFC sub-circuit
    "Rear Camera Repair": "25,000 NGN", // Dual 12.2MP + 16MP telephoto camera tracking housing
    "Front Camera/FaceID Repair": "18,000 NGN", // Soli radar integrated secure Face Unlock optical set
    "Loudspeaker Repair": "10,000 NGN", // Lower stereo sound projection loudspeaker driver
    "Microphone Repair": "8,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "9,000 NGN",
    "Fingerprint/Home Button Repair": "N/A",
    "Water Damage Recovery": "15,000 NGN", // IP68 comprehensive fluid evacuation and clean
    "Motherboard Micro-Soldering": "48,000 NGN", // Snapdragon 855 platform primary core logic mainboard
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Pixel 5": {
    "Screen Replacement": "78,000 NGN", // 6.0-inch uniform bezel 90Hz flexible OLED screen assembly
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "N/A", // Bio-resin coated bio-aluminum chassis (Full back shell replacement required)
    "Battery Replacement": "15,000 NGN", // 4080mAh high-density power cell module
    "Charging Port Repair": "12,000 NGN", // Type-C docking node interface board link
    "Wireless Charging Repair": "12,000 NGN", // Under-resin bio-aluminum engineered Qi charging module
    "Rear Camera Repair": "26,000 NGN", // Dual module: 12.2MP main + 16MP ultra-wide optics set
    "Front Camera/FaceID Repair": "12,000 NGN", // 8MP standard punch-hole style selfie camera module
    "Loudspeaker Repair": "12,000 NGN", // Under-display acoustic screen vibration driver package
    "Microphone Repair": "9,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "10,000 NGN", // Rear-mounted design capacitive biometrics flex cord
    "Water Damage Recovery": "16,000 NGN", // IP68 ultrasonic chemical wash and structural stabilization
    "Motherboard Micro-Soldering": "52,000 NGN", // Qualcomm Snapdragon 765G 5G network logic engine
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "24,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Pixel 6": {
    "Screen Replacement": "85,000 NGN", // 6.4-inch flat 90Hz AMOLED display panel with rigid shield
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "15,000 NGN", // Distinct design camera bar split glass back panel
    "Battery Replacement": "16,000 NGN", // 4614mAh internal battery core unit assembly
    "Charging Port Repair": "14,000 NGN", // Type-C interface power dock assembly tracking layer
    "Wireless Charging Repair": "12,000 NGN", // Fast Qi wireless charging and reverse share module
    "Rear Camera Repair": "30,000 NGN", // Camera Bar configuration: 50MP main + 12MP wide lens block
    "Front Camera/FaceID Repair": "12,000 NGN", // 8MP central punch-hole layout camera node
    "Loudspeaker Repair": "11,000 NGN", // Lower structural acoustic frame audio driver
    "Microphone Repair": "9,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "11,000 NGN",
    "Fingerprint/Home Button Repair": "15,000 NGN", // Optical in-display fingerprint biometric scanning layer
    "Water Damage Recovery": "18,000 NGN", // Comprehensive fluid clearance and contact preservation
    "Motherboard Micro-Soldering": "58,000 NGN", // First-generation Google Tensor custom system board
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Pixel 7": {
    "Screen Replacement": "115,000 NGN", // 6.3-inch flat 90Hz high-brightness AMOLED module
    "Glass Only Repair": "22,000 NGN",
    "Back Glass Replacement": "18,000 NGN", // Matte aluminum accented structural rear glass cover
    "Battery Replacement": "18,000 NGN", // 4355mAh balanced lifecycle internal power cell
    "Charging Port Repair": "15,000 NGN", // USB-C high-speed communication terminal port
    "Wireless Charging Repair": "13,000 NGN", // Qi certified wireless receiving plate element
    "Rear Camera Repair": "35,000 NGN", // Dual array: 50MP primary + 12MP ultra-wide camera block
    "Front Camera/FaceID Repair": "14,000 NGN", // 10.8MP front-facing drop-notch selfie camera module
    "Loudspeaker Repair": "12,000 NGN", // High-fidelity lower balance audio block package
    "Microphone Repair": "10,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "16,000 NGN", // Advanced optical under-screen biometric matrix
    "Water Damage Recovery": "20,000 NGN", // Precision liquid evacuation and structural edge sealing
    "Motherboard Micro-Soldering": "68,000 NGN", // Google Tensor G2 integrated core logic unit mainboard
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "26,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Pixel 8": {
    "Screen Replacement": "155,000 NGN", // 6.2-inch flat 120Hz Actua display panel screen array
    "Glass Only Repair": "26,000 NGN",
    "Back Glass Replacement": "20,000 NGN", // High-gloss durable structural rear glass module
    "Battery Replacement": "20,000 NGN", // 4575mAh fast charge single-cell power core element
    "Charging Port Repair": "18,000 NGN", // Modern Type-C fast-charge sub-board logic link
    "Wireless Charging Repair": "14,000 NGN", // Advanced wireless charging and induction ring
    "Rear Camera Repair": "42,000 NGN", // Camera bar array: 50MP main + 12MP wide sensor package
    "Front Camera/FaceID Repair": "16,000 NGN", // 10.5MP high-definition punch-hole front camera set
    "Loudspeaker Repair": "13,000 NGN", // Clear audio single-channel loudspeaker block
    "Microphone Repair": "11,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "14,000 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN", // Upgraded high-speed optical under-screen biometrics
    "Water Damage Recovery": "22,000 NGN", // Multi-seal fluid removal and decontamination service
    "Motherboard Micro-Soldering": "80,000 NGN", // Google Tensor G3 performance entry processing logic board
    "Software/Bootloop Flashing": "8,500 NGN",
    "Data Recovery": "28,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Pixel 9": {
    "Screen Replacement": "195,000 NGN", // 6.3-inch Actua OLED high fluid rate display module
    "Glass Only Repair": "32,000 NGN",
    "Back Glass Replacement": "24,000 NGN", // Premium visual dynamic textured backing panel
    "Battery Replacement": "24,000 NGN", // 4700mAh single-cell battery optimized for fast draw
    "Charging Port Repair": "20,000 NGN", // Heavy-duty Type-C sub-assembly connector dock
    "Wireless Charging Repair": "15,000 NGN", // Device has wireless charging and power share support
    "Rear Camera Repair": "48,000 NGN", // 50MP primary + 48MP ultra-wide dual camera tracking housing block
    "Front Camera/FaceID Repair": "18,000 NGN", // 10.5MP clear front capture group with flash support
    "Loudspeaker Repair": "14,000 NGN", // High-output stereo dual-speaker audio chamber block
    "Microphone Repair": "12,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "15,000 NGN",
    "Fingerprint/Home Button Repair": "24,000 NGN", // Advanced side-frame/under-display ultrasonic biometric matrix array
    "Water Damage Recovery": "25,000 NGN", // Modern balance architecture multi-seal liquid extraction
    "Motherboard Micro-Soldering": "95,000 NGN", // Google Tensor G4 modern core mainboard logic unit
    "Software/Bootloop Flashing": "9,500 NGN",
    "Data Recovery": "32,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Pixel 10": {
    "Screen Replacement": "225,000 NGN", // Next-gen balanced high refresh rate Actua matrix element
    "Glass Only Repair": "36,000 NGN",
    "Back Glass Replacement": "28,000 NGN", // Ultra-modern aesthetic premium styled back casing panel
    "Battery Replacement": "28,000 NGN", // High-density smart discharge safety cell module
    "Charging Port Repair": "22,000 NGN", // Advanced fast-charging Type-C docking node interface
    "Wireless Charging Repair": "16,000 NGN", // High-speed induction array with thermal shielding trace
    "Rear Camera Repair": "55,000 NGN", // Next-generation primary AI-optimized camera sensor block
    "Front Camera/FaceID Repair": "20,000 NGN", // Pro-tier front-facing visual capture array module
    "Loudspeaker Repair": "15,000 NGN", // High-fidelity calibrated structural stereo sound drivers
    "Microphone Repair": "13,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "16,000 NGN",
    "Fingerprint/Home Button Repair": "28,000 NGN", // High-speed ultrasonic under-display biometric module layer
    "Water Damage Recovery": "28,000 NGN", // Professional fluid elimination and logic board stabilization
    "Motherboard Micro-Soldering": "120,000 NGN", // Android 16 entry-optimized Google Tensor G5 mainboard
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "35,000 NGN",
    "Network/Carrier Unlocking": "18,000 NGN"
},
"Pixel 3a": {
    "Screen Replacement": "32,000 NGN", // 5.6-inch budget OLED display screen module
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "N/A", // Unibody lightweight textured polycarbonate plastic casing
    "Battery Replacement": "8,500 NGN", // 3000mAh entry-level integrated power module
    "Charging Port Repair": "6,500 NGN", // Micro-soldered Type-C sub-board assembly link
    "Wireless Charging Repair": "N/A", // Device lacks wireless charging hardware support
    "Rear Camera Repair": "11,000 NGN", // 12.2MP flagship-tier single rear camera capture node
    "Front Camera/FaceID Repair": "6,000 NGN", // 8MP standard front portrait capture camera set
    "Loudspeaker Repair": "6,000 NGN", // Mono lower chassis acoustic output audio driver
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "5,500 NGN", // 3.5mm premium analog interface connector port
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Rear physical capacitive circular biometric scanner flex
    "Water Damage Recovery": "8,000 NGN", // Entry-level chemical decontamination bath service
    "Motherboard Micro-Soldering": "24,000 NGN", // Snapdragon 670 platform core logic unit mainboard
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Pixel 3a XL": {
    "Screen Replacement": "36,000 NGN", // Larger 6.0-inch notchless clear-view OLED panel
    "Glass Only Repair": "9,000 NGN",
    "Back Glass Replacement": "N/A", // Unibody durable matte polycarbonate plastic shell
    "Battery Replacement": "9,000 NGN", // 3700mAh structural single-cell lithium pack panel
    "Charging Port Repair": "6,500 NGN", // Type-C dock charging sub-board assembly line
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "11,000 NGN", // 12.2MP high dynamic range standalone camera block
    "Front Camera/FaceID Repair": "6,000 NGN", // 8MP standard entry selfie camera node layout
    "Loudspeaker Repair": "6,500 NGN", // Standard internal mono sound output driver box
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "5,500 NGN", // Top-mounted 3.5mm analog phone jack output assembly
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Rear-mounted design capacitive biometrics flex cord
    "Water Damage Recovery": "8,500 NGN", // Anti-corrosive multi-stage fluid clearance service
    "Motherboard Micro-Soldering": "26,000 NGN", // Qualcomm Snapdragon 670 architecture computing board
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "13,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Pixel 4a": {
    "Screen Replacement": "45,000 NGN", // 5.81-inch bezel-less punch-hole OLED display module
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "N/A", // Matte finish polycarbonate plastic unibody housing assembly
    "Battery Replacement": "10,000 NGN", // 3140mAh optimized compact design power cell block
    "Charging Port Repair": "7,500 NGN", // Single-channel Type-C power distribution node board
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "14,000 NGN", // 12.2MP OIS intelligent main camera sensor node block
    "Front Camera/FaceID Repair": "7,000 NGN", // 8MP punch-hole layout front capture camera assembly
    "Loudspeaker Repair": "7,000 NGN", // Bottom-firing acoustic output audio driver box assembly
    "Microphone Repair": "5,500 NGN",
    "Headphone Jack Repair": "6,000 NGN", // Top-rail 3.5mm analog audio interface port module
    "Power/Volume Button Repair": "7,000 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN", // Pixel Imprint rear capacitive sensor ribbon line
    "Water Damage Recovery": "10,000 NGN", // Specialized isolation cleaning and drying procedure array
    "Motherboard Micro-Soldering": "30,000 NGN", // Snapdragon 730G budget logic distribution mainboard trace
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "7,000 NGN"
},
"Pixel 4a (5G)": {
    "Screen Replacement": "52,000 NGN", // Larger 6.2-inch wide punch-hole OLED screen block
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "N/A", // Rigid black composite plastic unibody protection cover
    "Battery Replacement": "11,500 NGN", // 3885mAh high capacity power array pack module
    "Charging Port Repair": "8,000 NGN", // Type-C interface system connection docking flex board
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "18,000 NGN", // Dual setup: 12.2MP main + 16MP ultra-wide optics package
    "Front Camera/FaceID Repair": "7,500 NGN", // 8MP clear punch-hole layout front camera system module
    "Loudspeaker Repair": "7,500 NGN", // Clear audio dual-channel stereo driver component set
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "6,000 NGN", // Integrated 3.5mm analog hardware line port channel
    "Power/Volume Button Repair": "7,500 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN", // Rear capacitive biometric recognition scanning layer strip
    "Water Damage Recovery": "11,000 NGN", // Multi-point fluid clearance and contact preservation bath
    "Motherboard Micro-Soldering": "34,000 NGN", // Snapdragon 765G balanced 5G network logic board unit
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "7,000 NGN"
},
"Pixel 5a": {
    "Screen Replacement": "62,000 NGN", // 6.34-inch HDR punch-hole OLED display module panel
    "Glass Only Repair": "14,000 NGN",
    "Back Glass Replacement": "N/A", // Premium metal chassis structure coated with thin bio-resin layer
    "Battery Replacement": "13,500 NGN", // Heavy duty 4680mAh dense core single-cell power unit
    "Charging Port Repair": "9,000 NGN", // Type-C high power intake docking interface assembly board
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "20,000 NGN", // Dual array: 12.2MP primary + 16MP wide angle camera housing block
    "Front Camera/FaceID Repair": "8,000 NGN", // 8MP front-facing drop-notch optics set element strip
    "Loudspeaker Repair": "8,000 NGN", // Enhanced mono high-output audio block system unit package
    "Microphone Repair": "6,500 NGN",
    "Headphone Jack Repair": "6,500 NGN", // Standard 3.5mm analog hardware line port module element
    "Power/Volume Button Repair": "8,000 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN", // Rear physical capacitive biometric scanning flex circuit tracking
    "Water Damage Recovery": "12,000 NGN", // IP67 standard fluid extraction and internal tracing clean path
    "Motherboard Micro-Soldering": "40,000 NGN", // Snapdragon 765G platform primary mainboard core distribution block
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Pixel 6a": {
    "Screen Replacement": "68,000 NGN", // 6.1-inch flat OLED balanced compact display panel array
    "Glass Only Repair": "16,000 NGN",
    "Back Glass Replacement": "12,000 NGN", // 3D thermoformed tactile composite plastic backing plate
    "Battery Replacement": "14,000 NGN", // 4410mAh fast-charging internal battery block module set
    "Charging Port Repair": "10,000 NGN", // USB Type-C interface system connection sub-board link component
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "24,000 NGN", // Camera bar layout: Dual 12.2MP + 12MP ultra-wide tracking block
    "Front Camera/FaceID Repair": "8,500 NGN", // 8MP center punch-hole camera module element setup layout
    "Loudspeaker Repair": "8,500 NGN", // Balanced lower stereo sound output audio transducer package box
    "Microphone Repair": "7,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "8,500 NGN",
    "Fingerprint/Home Button Repair": "14,000 NGN", // Under-display optical biometric sensor matrix array link flex
    "Water Damage Recovery": "14,000 NGN", // IP67 precision fluid evacuation and trace stabilization cleaning bath
    "Motherboard Micro-Soldering": "46,000 NGN", // Google Tensor (1st Gen) processing logic mainboard framework structure
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Pixel 7a": {
    "Screen Replacement": "82,000 NGN", // Upgraded 6.1-inch 90Hz fast fluid rate OLED screen array matrix
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "14,000 NGN", // Refined high-gloss lightweight composite plastic rear panel plate
    "Battery Replacement": "15,500 NGN", // 4385mAh single-cell battery optimized for smart regular draw use
    "Charging Port Repair": "11,000 NGN", // Heavy-duty Type-C sub-assembly charging dock socket module interface
    "Wireless Charging Repair": "10,000 NGN", // Entry-tier low-wattage Qi wireless charging induction board line link
    "Rear Camera Repair": "30,000 NGN", // High-res dual array: 64MP primary + 13MP ultra-wide camera block set
    "Front Camera/FaceID Repair": "10,000 NGN", // 13MP high-definition wide selfie optics group module tracking setup
    "Loudspeaker Repair": "9,000 NGN", // High-output stereo dual-speaker audio chamber block distribution route
    "Microphone Repair": "7,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "9,000 NGN",
    "Fingerprint/Home Button Repair": "16,000 NGN", // Advanced responsive under-screen optical biometric sensor matrix ring
    "Water Damage Recovery": "15,000 NGN", // IP67 balance architecture multi-seal liquid evacuation moisture removal bath
    "Motherboard Micro-Soldering": "54,000 NGN", // Google Tensor G2 custom mobile system processing logic board platform units
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Pixel 8a": {
    "Screen Replacement": "110,000 NGN", // 6.1-inch Actua 120Hz smooth high fluid rate OLED display module assembly
    "Glass Only Repair": "22,000 NGN",
    "Back Glass Replacement": "16,000 NGN", // Durable matte-finish textured composite plastic shell backing cover plate
    "Battery Replacement": "18,000 NGN", // 4492mAh continuous high discharge power cell module array layer block
    "Charging Port Repair": "13,000 NGN", // Advanced Type-C charging docking node interface tracking sub-board line link
    "Wireless Charging Repair": "11,000 NGN", // Standard Qi certified wireless receiving plate element loop coil system
    "Rear Camera Repair": "36,000 NGN", // Camera bar tracking setup: Dual 64MP main + 13MP wide tracking sensor package units
    "Front Camera/FaceID Repair": "12,000 NGN", // 13MP clear punch-hole front capture group camera optics set layout structures
    "Loudspeaker Repair": "10,000 NGN", // High-fidelity calibrated structural stereo sound dual-speaker audio drivers framework
    "Microphone Repair": "8,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN", // High-speed responsive optical under-screen biometric scanner matrix layer rails
    "Water Damage Recovery": "16,000 NGN", // IP67 professional fluid elimination moisture removal trace stabilization procedures
    "Motherboard Micro-Soldering": "64,000 NGN", // Google Tensor G3 performance entry computing processing logic system board lines
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Pixel 9a": {
    "Screen Replacement": "130,000 NGN", // 6.1-inch next-gen smooth high-brightness Actua display matrix element panel
    "Glass Only Repair": "25,000 NGN",
    "Back Glass Replacement": "18,000 NGN", // Premium visual dynamic matte textured composite plastic back skin plate cover
    "Battery Replacement": "20,000 NGN", // High-density smart discharge single-cell power core package element array setups
    "Charging Port Repair": "15,000 NGN", // Heavy duty Type-C communication terminal interface fast-charging port dock flex tracking
    "Wireless Charging Repair": "12,000 NGN", // High-efficiency charging coil trace and thermal shield protection layout ring system
    "Rear Camera Repair": "42,000 NGN", // Flush/integrated modern camera module: Dual high-res primary sensor block tracker arrays
    "Front Camera/FaceID Repair": "14,000 NGN", // Pro-tier front punch-hole face unlock visual capture camera array module assemblies
    "Loudspeaker Repair": "11,000 NGN", // Stereo acoustic output audio transducer loudspeaker box chamber distribution networks sets
    "Microphone Repair": "9,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "11,000 NGN",
    "Fingerprint/Home Button Repair": "20,000 NGN", // Advanced high-speed under-display optical biometric scanning reader matrix assemblies
    "Water Damage Recovery": "18,000 NGN", // Precision moisture chemical decontamination fluid evacuation trace stabilization bath service
    "Motherboard Micro-Soldering": "78,000 NGN", // Google Tensor G4 integrated core system logic computing platform mainboards units array
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Pixel 10a": {
    "Screen Replacement": "150,000 NGN", // Advanced next-gen thin bezel fluid rate Actua OLED screen assembly modules panel
    "Glass Only Repair": "28,000 NGN",
    "Back Glass Replacement": "20,000 NGN", // Ultra-modern aesthetic premium styled composite backing panel case protective shields
    "Battery Replacement": "22,000 NGN", // Smart management high-capacity single-cell safety cell module power unit packages blocks
    "Charging Port Repair": "16,000 NGN", // Next-gen fast-charging Type-C docking node interface tracking sub-board wire lines assembly
    "Wireless Charging Repair": "13,000 NGN", // Upgraded wireless induction tracking receiver module plate with integrated heat shielding loops
    "Rear Camera Repair": "48,000 NGN", // Next-generation primary AI-optimized dual lens camera tracking matrix block sensor systems packages
    "Front Camera/FaceID Repair": "16,000 NGN", // Advanced punch-hole high-definition secure face unlock optics front capture camera group components
    "Loudspeaker Repair": "12,000 NGN", // High-fidelity calibrated structural stereo sound projection loudspeaker driver chamber blocks system
    "Microphone Repair": "10,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "22,000 NGN", // Next-generation responsive under-display scanning reader array sensory tracking layers matrix
    "Water Damage Recovery": "20,000 NGN", // Modern balance architecture professional fluid isolation extraction trace stabilization service routines
    "Motherboard Micro-Soldering": "92,000 NGN", // Android 16 optimized next-gen Google Tensor G5 custom mobile processing platform core system boards
    "Software/Bootloop Flashing": "8,500 NGN",
    "Data Recovery": "28,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Redmi K70 Ultra": {
    "Screen Replacement": "165,000 NGN", // Advanced next-gen thin bezel fluid rate high-frequency PWM dimming OLED screen assembly modules panel
    "Glass Only Repair": "32,000 NGN",
    "Back Glass Replacement": "24,000 NGN", // Ultra-modern aesthetic premium styled composite backing panel case protective shields
    "Battery Replacement": "25,000 NGN", // Smart management high-capacity single-cell safety cell module power unit packages blocks
    "Charging Port Repair": "18,000 NGN", // Next-gen fast-charging Type-C docking node interface tracking sub-board wire lines assembly
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "52,000 NGN", // Next-generation primary AI-optimized dual lens camera tracking matrix block sensor systems packages
    "Front Camera/FaceID Repair": "18,000 NGN", // Advanced punch-hole high-definition secure face unlock optics front capture camera group components
    "Loudspeaker Repair": "14,000 NGN", // High-fidelity calibrated structural stereo sound projection loudspeaker driver chamber blocks system
    "Microphone Repair": "11,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "13,000 NGN",
    "Fingerprint/Home Button Repair": "24,000 NGN", // Next-generation responsive under-display scanning reader array sensory tracking layers matrix
    "Water Damage Recovery": "22,000 NGN", // Modern balance architecture professional fluid isolation extraction trace stabilization service routines
    "Motherboard Micro-Soldering": "98,000 NGN", // High-performance optimized next-gen flagship custom mobile processing platform core system boards
    "Software/Bootloop Flashing": "9,000 NGN",
    "Data Recovery": "30,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Redmi K80 Ultra": {
    "Screen Replacement": "185,000 NGN", // Advanced next-gen thin bezel fluid rate high-frequency PWM dimming OLED screen assembly modules panel
    "Glass Only Repair": "35,000 NGN",
    "Back Glass Replacement": "26,000 NGN", // Ultra-modern aesthetic premium styled composite backing panel case protective shields
    "Battery Replacement": "28,000 NGN", // Smart management high-capacity single-cell safety cell module power unit packages blocks
    "Charging Port Repair": "20,000 NGN", // Next-gen fast-charging Type-C docking node interface tracking sub-board wire lines assembly
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "60,000 NGN", // Next-generation primary AI-optimized dual lens camera tracking matrix block sensor systems packages
    "Front Camera/FaceID Repair": "20,000 NGN", // Advanced punch-hole high-definition secure face unlock optics front capture camera group components
    "Loudspeaker Repair": "15,000 NGN", // High-fidelity calibrated structural stereo sound projection loudspeaker driver chamber blocks system
    "Microphone Repair": "12,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "14,000 NGN",
    "Fingerprint/Home Button Repair": "26,000 NGN", // Next-generation responsive under-display scanning reader array sensory tracking layers matrix
    "Water Damage Recovery": "25,000 NGN", // Modern balance architecture professional fluid isolation extraction trace stabilization service routines
    "Motherboard Micro-Soldering": "110,000 NGN", // High-performance optimized next-gen flagship custom mobile processing platform core system boards
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "35,000 NGN",
    "Network/Carrier Unlocking": "18,000 NGN"
},
"Redmi K20 Pro": {
    "Screen Replacement": "55,000 NGN", // Classic legacy full-screen bezel-free Super AMOLED screen assembly modules panel
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "12,000 NGN", // Sleek dual-curved dynamic flame texture premium styled glass backing panel case protective shields
    "Battery Replacement": "14,000 NGN", // Smart management high-capacity single-cell safety cell module power unit packages blocks
    "Charging Port Repair": "10,000 NGN", // Standard fast-charging Type-C docking node interface tracking sub-board wire lines assembly
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "22,000 NGN", // Triple-lens system high-definition primary sensor tracking matrix block sensor systems packages
    "Front Camera/FaceID Repair": "25,000 NGN", // Motorized mechanical pop-up high-definition secure front capture camera group components
    "Loudspeaker Repair": "8,000 NGN", // Calibrated structural stereo sound projection loudspeaker driver chamber blocks system
    "Microphone Repair": "7,000 NGN",
    "Headphone Jack Repair": "8,000 NGN",
    "Power/Volume Button Repair": "8,000 NGN",
    "Fingerprint/Home Button Repair": "15,000 NGN", // Optical responsive under-display scanning reader array sensory tracking layers matrix
    "Water Damage Recovery": "12,000 NGN", // Legacy balance architecture professional fluid isolation extraction trace stabilization service routines
    "Motherboard Micro-Soldering": "38,000 NGN", // Qualcomm Snapdragon flagship mobile processing platform core system boards
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Redmi K30 Pro": {
    "Screen Replacement": "65,000 NGN", // Bezel-free pop-up configuration Super AMOLED screen assembly modules panel
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "14,000 NGN", // AG frosted texture premium styled glass backing panel case protective shields
    "Battery Replacement": "16,000 NGN",
    "Charging Port Repair": "11,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "26,000 NGN",
    "Front Camera/FaceID Repair": "28,000 NGN", // Legacy mechanical pop-up front capture camera group components
    "Loudspeaker Repair": "9,000 NGN",
    "Microphone Repair": "7,500 NGN",
    "Headphone Jack Repair": "8,500 NGN",
    "Power/Volume Button Repair": "9,000 NGN",
    "Fingerprint/Home Button Repair": "16,000 NGN",
    "Water Damage Recovery": "14,000 NGN",
    "Motherboard Micro-Soldering": "45,000 NGN",
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Redmi K40 Pro": {
    "Screen Replacement": "75,000 NGN", // E4 generation fluid rate high-performance AMOLED screen assembly modules panel
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "15,000 NGN",
    "Battery Replacement": "17,000 NGN",
    "Charging Port Repair": "12,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "30,000 NGN",
    "Front Camera/FaceID Repair": "14,000 NGN", // Ultra-small punch-hole high-definition optics front capture camera group components
    "Loudspeaker Repair": "10,000 NGN",
    "Microphone Repair": "8,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "14,000 NGN", // Responsive side-mounted biometric scanning reader array sensory tracking layers matrix
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "52,000 NGN",
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Redmi K50 Pro": {
    "Screen Replacement": "95,000 NGN", // Advanced 2K high-resolution ultra-crisp fluid rate AMOLED screen assembly modules panel
    "Glass Only Repair": "22,000 NGN",
    "Back Glass Replacement": "16,000 NGN",
    "Battery Replacement": "19,000 NGN",
    "Charging Port Repair": "13,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "36,000 NGN", // OIS stabilized high-definition multi-lens camera tracking matrix block sensor systems packages
    "Front Camera/FaceID Repair": "15,000 NGN",
    "Loudspeaker Repair": "11,000 NGN",
    "Microphone Repair": "8,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "15,000 NGN",
    "Water Damage Recovery": "16,000 NGN",
    "Motherboard Micro-Soldering": "60,000 NGN",
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "24,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Redmi K60 Pro": {
    "Screen Replacement": "120,000 NGN", // Premium 2K flagship high-frequency PWM dimming OLED screen assembly modules panel
    "Glass Only Repair": "25,000 NGN",
    "Back Glass Replacement": "18,000 NGN",
    "Battery Replacement": "22,000 NGN",
    "Charging Port Repair": "15,000 NGN",
    "Wireless Charging Repair": "15,000 NGN", // Standard wireless induction tracking receiver module plate with integrated heat shielding loops
    "Rear Camera Repair": "44,000 NGN",
    "Front Camera/FaceID Repair": "16,000 NGN",
    "Loudspeaker Repair": "12,000 NGN",
    "Microphone Repair": "9,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "11,000 NGN",
    "Fingerprint/Home Button Repair": "20,000 NGN", // Under-display scanning reader array sensory tracking layers matrix
    "Water Damage Recovery": "18,000 NGN",
    "Motherboard Micro-Soldering": "75,000 NGN",
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "26,000 NGN",
    "Network/Carrier Unlocking": "14,000 NGN"
},
"Redmi K70 Pro": {
    "Screen Replacement": "150,000 NGN", // Ultra-modern thin bezel peak brightness fluid rate 2K OLED screen assembly modules panel
    "Glass Only Repair": "30,000 NGN",
    "Back Glass Replacement": "22,000 NGN",
    "Battery Replacement": "24,000 NGN",
    "Charging Port Repair": "17,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "50,000 NGN",
    "Front Camera/FaceID Repair": "17,000 NGN",
    "Loudspeaker Repair": "13,000 NGN",
    "Microphone Repair": "10,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "22,000 NGN",
    "Water Damage Recovery": "20,000 NGN",
    "Motherboard Micro-Soldering": "90,000 NGN",
    "Software/Bootloop Flashing": "8,500 NGN",
    "Data Recovery": "28,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Redmi K80 Pro": {
    "Screen Replacement": "180,000 NGN", // Advanced next-gen ultra-thin bezel structural fluid rate 2K OLED screen assembly modules panel
    "Glass Only Repair": "35,000 NGN",
    "Back Glass Replacement": "25,000 NGN",
    "Battery Replacement": "27,000 NGN",
    "Charging Port Repair": "20,000 NGN",
    "Wireless Charging Repair": "18,000 NGN",
    "Rear Camera Repair": "58,000 NGN",
    "Front Camera/FaceID Repair": "20,000 NGN",
    "Loudspeaker Repair": "15,000 NGN",
    "Microphone Repair": "11,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "14,000 NGN",
    "Fingerprint/Home Button Repair": "25,000 NGN",
    "Water Damage Recovery": "24,000 NGN",
    "Motherboard Micro-Soldering": "105,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "32,000 NGN",
    "Network/Carrier Unlocking": "18,000 NGN"
},
"Redmi K20": {
    "Screen Replacement": "48,000 NGN",
    "Glass Only Repair": "13,000 NGN",
    "Back Glass Replacement": "11,000 NGN",
    "Battery Replacement": "13,000 NGN",
    "Charging Port Repair": "9,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "18,000 NGN",
    "Front Camera/FaceID Repair": "23,000 NGN",
    "Loudspeaker Repair": "7,500 NGN",
    "Microphone Repair": "6,500 NGN",
    "Headphone Jack Repair": "7,500 NGN",
    "Power/Volume Button Repair": "7,500 NGN",
    "Fingerprint/Home Button Repair": "13,000 NGN",
    "Water Damage Recovery": "11,000 NGN",
    "Motherboard Micro-Soldering": "32,000 NGN",
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Redmi K30": {
    "Screen Replacement": "40,000 NGN", // Fluid rate dual punch-hole high-smoothness IPS LCD screen assembly modules panel
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "11,000 NGN",
    "Battery Replacement": "14,000 NGN",
    "Charging Port Repair": "9,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "18,000 NGN",
    "Front Camera/FaceID Repair": "12,000 NGN",
    "Loudspeaker Repair": "7,500 NGN",
    "Microphone Repair": "6,500 NGN",
    "Headphone Jack Repair": "7,500 NGN",
    "Power/Volume Button Repair": "8,000 NGN",
    "Fingerprint/Home Button Repair": "12,000 NGN", // Side-mounted fingerprint scanner assembly tracking layers
    "Water Damage Recovery": "12,000 NGN",
    "Motherboard Micro-Soldering": "30,000 NGN",
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Redmi K40": {
    "Screen Replacement": "68,000 NGN", // Fluid rate thin bezel high-definition E4 AMOLED screen assembly modules panel
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "13,000 NGN",
    "Battery Replacement": "16,000 NGN",
    "Charging Port Repair": "11,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "24,000 NGN",
    "Front Camera/FaceID Repair": "13,000 NGN",
    "Loudspeaker Repair": "9,000 NGN",
    "Microphone Repair": "7,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "9,000 NGN",
    "Fingerprint/Home Button Repair": "13,000 NGN",
    "Water Damage Recovery": "14,000 NGN",
    "Motherboard Micro-Soldering": "45,000 NGN",
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Redmi K50": {
    "Screen Replacement": "85,000 NGN", // Crisp high-density 2K resolution fluid rate OLED screen assembly modules panel
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "15,000 NGN",
    "Battery Replacement": "18,000 NGN",
    "Charging Port Repair": "12,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "32,000 NGN",
    "Front Camera/FaceID Repair": "14,000 NGN",
    "Loudspeaker Repair": "10,000 NGN",
    "Microphone Repair": "8,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "14,000 NGN",
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "55,000 NGN",
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Redmi K60": {
    "Screen Replacement": "105,000 NGN", // Dynamic high-definition 2K tracking layout fluid rate OLED screen assembly modules panel
    "Glass Only Repair": "24,000 NGN",
    "Back Glass Replacement": "17,000 NGN",
    "Battery Replacement": "20,000 NGN",
    "Charging Port Repair": "14,000 NGN",
    "Wireless Charging Repair": "14,000 NGN",
    "Rear Camera Repair": "38,000 NGN",
    "Front Camera/FaceID Repair": "15,000 NGN",
    "Loudspeaker Repair": "11,000 NGN",
    "Microphone Repair": "8,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "11,000 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN",
    "Water Damage Recovery": "17,000 NGN",
    "Motherboard Micro-Soldering": "68,000 NGN",
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "24,000 NGN",
    "Network/Carrier Unlocking": "14,000 NGN"
},
"Redmi K70": {
    "Screen Replacement": "135,000 NGN", // Next-gen precision peak brightness 2K dynamic OLED screen assembly modules panel
    "Glass Only Repair": "28,000 NGN",
    "Back Glass Replacement": "20,000 NGN",
    "Battery Replacement": "22,000 NGN",
    "Charging Port Repair": "16,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "45,000 NGN",
    "Front Camera/FaceID Repair": "16,000 NGN",
    "Loudspeaker Repair": "12,000 NGN",
    "Microphone Repair": "9,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "20,000 NGN",
    "Water Damage Recovery": "19,000 NGN",
    "Motherboard Micro-Soldering": "82,000 NGN",
    "Software/Bootloop Flashing": "8,500 NGN",
    "Data Recovery": "26,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Redmi K80": {
    "Screen Replacement": "160,000 NGN", // High-efficiency thin bezel structural 2K fluid rate OLED screen assembly modules panel
    "Glass Only Repair": "32,000 NGN",
    "Back Glass Replacement": "23,000 NGN",
    "Battery Replacement": "25,000 NGN",
    "Charging Port Repair": "18,000 NGN",
    "Wireless Charging Repair": "16,000 NGN",
    "Rear Camera Repair": "52,000 NGN",
    "Front Camera/FaceID Repair": "18,000 NGN",
    "Loudspeaker Repair": "14,000 NGN",
    "Microphone Repair": "10,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "13,000 NGN",
    "Fingerprint/Home Button Repair": "23,000 NGN",
    "Water Damage Recovery": "22,000 NGN",
    "Motherboard Micro-Soldering": "95,000 NGN",
    "Software/Bootloop Flashing": "9,500 NGN",
    "Data Recovery": "30,000 NGN",
    "Network/Carrier Unlocking": "16,000 NGN"
},
"Redmi Turbo 3": {
    "Screen Replacement": "90,000 NGN", // Performance optimized thin bezel high refresh rate OLED screen assembly modules panel
    "Glass Only Repair": "22,000 NGN",
    "Back Glass Replacement": "16,000 NGN",
    "Battery Replacement": "19,000 NGN",
    "Charging Port Repair": "13,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "34,000 NGN",
    "Front Camera/FaceID Repair": "14,000 NGN",
    "Loudspeaker Repair": "11,000 NGN",
    "Microphone Repair": "8,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "16,000 NGN",
    "Water Damage Recovery": "16,000 NGN",
    "Motherboard Micro-Soldering": "62,000 NGN",
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Redmi Turbo 4": {
    "Screen Replacement": "110,000 NGN", // Performance optimized thin bezel high refresh rate OLED screen assembly modules panel
    "Glass Only Repair": "25,000 NGN",
    "Back Glass Replacement": "18,000 NGN",
    "Battery Replacement": "21,000 NGN",
    "Charging Port Repair": "14,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "40,000 NGN",
    "Front Camera/FaceID Repair": "15,000 NGN",
    "Loudspeaker Repair": "12,000 NGN",
    "Microphone Repair": "9,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "11,000 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN",
    "Water Damage Recovery": "18,000 NGN",
    "Motherboard Micro-Soldering": "72,000 NGN",
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "14,000 NGN"
},
"Redmi Turbo 4 Pro": {
    "Screen Replacement": "130,000 NGN", // Enhanced top-tier flagship speed fluid tracking OLED screen assembly modules panel
    "Glass Only Repair": "28,000 NGN",
    "Back Glass Replacement": "20,000 NGN",
    "Battery Replacement": "23,000 NGN",
    "Charging Port Repair": "16,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "46,000 NGN",
    "Front Camera/FaceID Repair": "16,500 NGN",
    "Loudspeaker Repair": "13,000 NGN",
    "Microphone Repair": "9,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "20,000 NGN",
    "Water Damage Recovery": "20,000 NGN",
    "Motherboard Micro-Soldering": "85,000 NGN",
    "Software/Bootloop Flashing": "8,500 NGN",
    "Data Recovery": "28,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Redmi Note 10 Pro+": {
    "Screen Replacement": "58,000 NGN", // Vivid high refresh rate fluid layout AMOLED screen assembly modules panel
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "12,000 NGN",
    "Battery Replacement": "14,000 NGN",
    "Charging Port Repair": "10,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "24,000 NGN", // Ultra-clear high megapixel layout camera tracking matrix block sensor systems packages
    "Front Camera/FaceID Repair": "12,000 NGN",
    "Loudspeaker Repair": "8,500 NGN",
    "Microphone Repair": "7,000 NGN",
    "Headphone Jack Repair": "7,000 NGN",
    "Power/Volume Button Repair": "8,000 NGN",
    "Fingerprint/Home Button Repair": "12,000 NGN",
    "Water Damage Recovery": "13,000 NGN",
    "Motherboard Micro-Soldering": "38,000 NGN",
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Redmi Note 11 Pro+": {
    "Screen Replacement": "68,000 NGN", // Smooth fluid tracking high response AMOLED screen assembly modules panel
    "Glass Only Repair": "17,000 NGN",
    "Back Glass Replacement": "13,000 NGN",
    "Battery Replacement": "15,500 NGN",
    "Charging Port Repair": "11,000 NGN", // Fast charging technology integration sub-board assembly tracking
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "28,000 NGN",
    "Front Camera/FaceID Repair": "13,000 NGN",
    "Loudspeaker Repair": "9,000 NGN",
    "Microphone Repair": "7,500 NGN",
    "Headphone Jack Repair": "7,500 NGN",
    "Power/Volume Button Repair": "8,500 NGN",
    "Fingerprint/Home Button Repair": "13,000 NGN",
    "Water Damage Recovery": "14,000 NGN",
    "Motherboard Micro-Soldering": "44,000 NGN",
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "11,000 NGN"
},
"Redmi Note 12 Pro+": {
    "Screen Replacement": "80,000 NGN", // Advanced flexible high refresh frequency OLED screen assembly modules panel
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "15,000 NGN",
    "Battery Replacement": "17,500 NGN",
    "Charging Port Repair": "12,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "35,000 NGN", // Premium ultra-high resolution master lens camera tracking matrix block sensor systems packages
    "Front Camera/FaceID Repair": "14,000 NGN",
    "Loudspeaker Repair": "10,000 NGN",
    "Microphone Repair": "8,000 NGN",
    "Headphone Jack Repair": "8,000 NGN",
    "Power/Volume Button Repair": "9,500 NGN",
    "Fingerprint/Home Button Repair": "14,000 NGN",
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "52,000 NGN",
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Redmi Note 13 Pro+": {
    "Screen Replacement": "105,000 NGN", // Curved aesthetic high brightness dynamic fluid rate OLED screen assembly modules panel
    "Glass Only Repair": "24,000 NGN",
    "Back Glass Replacement": "18,000 NGN",
    "Battery Replacement": "20,000 NGN",
    "Charging Port Repair": "14,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "42,000 NGN",
    "Front Camera/FaceID Repair": "15,000 NGN",
    "Loudspeaker Repair": "11,000 NGN",
    "Microphone Repair": "8,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "11,000 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN", // Modern under-display scanning reader array sensory tracking layers matrix
    "Water Damage Recovery": "18,000 NGN",
    "Motherboard Micro-Soldering": "65,000 NGN",
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "24,000 NGN",
    "Network/Carrier Unlocking": "14,000 NGN"
},
"Redmi Note 14 Pro+": {
    "Screen Replacement": "125,000 NGN", // Curved design next-gen structured high fluid rate OLED screen assembly modules panel
    "Glass Only Repair": "28,000 NGN",
    "Back Glass Replacement": "20,000 NGN",
    "Battery Replacement": "22,500 NGN",
    "Charging Port Repair": "15,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "48,000 NGN",
    "Front Camera/FaceID Repair": "16,500 NGN",
    "Loudspeaker Repair": "12,500 NGN",
    "Microphone Repair": "9,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "20,000 NGN",
    "Water Damage Recovery": "20,000 NGN",
    "Motherboard Micro-Soldering": "78,000 NGN",
    "Software/Bootloop Flashing": "8,500 NGN",
    "Data Recovery": "26,500 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Redmi Note 15 Pro+": {
    "Screen Replacement": "145,000 NGN", // Advanced generation ultra-thin bezel flagship fluid rate OLED screen assembly modules panel
    "Glass Only Repair": "32,000 NGN",
    "Back Glass Replacement": "23,000 NGN",
    "Battery Replacement": "25,000 NGN",
    "Charging Port Repair": "17,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "54,000 NGN",
    "Front Camera/FaceID Repair": "18,500 NGN",
    "Loudspeaker Repair": "14,000 NGN",
    "Microphone Repair": "10,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "13,500 NGN",
    "Fingerprint/Home Button Repair": "23,000 NGN",
    "Water Damage Recovery": "22,000 NGN",
    "Motherboard Micro-Soldering": "88,000 NGN",
    "Software/Bootloop Flashing": "9,500 NGN",
    "Data Recovery": "29,000 NGN",
    "Network/Carrier Unlocking": "16,000 NGN"
},
"Redmi Note 8 Pro": {
    "Screen Replacement": "32,000 NGN", // Classic durable narrow border dynamic IPS LCD screen assembly modules panel
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "9,000 NGN",
    "Battery Replacement": "11,500 NGN",
    "Charging Port Repair": "7,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "15,000 NGN",
    "Front Camera/FaceID Repair": "10,000 NGN",
    "Loudspeaker Repair": "6,500 NGN",
    "Microphone Repair": "5,500 NGN",
    "Headphone Jack Repair": "6,500 NGN",
    "Power/Volume Button Repair": "6,500 NGN",
    "Fingerprint/Home Button Repair": "9,000 NGN", // Rear-mounted structural responsive scanning reader module array
    "Water Damage Recovery": "10,000 NGN",
    "Motherboard Micro-Soldering": "24,000 NGN",
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "8,500 NGN"
},
"Redmi Note 9 Pro": {
    "Screen Replacement": "35,000 NGN", // Punch-hole layout clear view IPS LCD screen assembly modules panel
    "Glass Only Repair": "11,000 NGN",
    "Back Glass Replacement": "10,000 NGN",
    "Battery Replacement": "12,500 NGN",
    "Charging Port Repair": "8,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "17,000 NGN",
    "Front Camera/FaceID Repair": "11,000 NGN",
    "Loudspeaker Repair": "7,000 NGN",
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "7,000 NGN",
    "Power/Volume Button Repair": "7,000 NGN",
    "Fingerprint/Home Button Repair": "11,000 NGN", // Side-mounted power button integrated reader array tracking layers
    "Water Damage Recovery": "11,000 NGN",
    "Motherboard Micro-Soldering": "28,000 NGN",
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "9,000 NGN"
},
"Redmi Note 10 Pro": {
    "Screen Replacement": "55,000 NGN", // Smooth high-fidelity fluid rate AMOLED screen assembly modules panel
    "Glass Only Repair": "14,000 NGN",
    "Back Glass Replacement": "11,000 NGN",
    "Battery Replacement": "13,500 NGN",
    "Charging Port Repair": "9,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "22,000 NGN",
    "Front Camera/FaceID Repair": "11,500 NGN",
    "Loudspeaker Repair": "8,000 NGN",
    "Microphone Repair": "6,500 NGN",
    "Headphone Jack Repair": "7,500 NGN",
    "Power/Volume Button Repair": "8,000 NGN",
    "Fingerprint/Home Button Repair": "12,000 NGN",
    "Water Damage Recovery": "12,000 NGN",
    "Motherboard Micro-Soldering": "35,000 NGN",
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "17,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Redmi Note 11 Pro": {
    "Screen Replacement": "62,000 NGN", // Sharp contrast fluid tracking AMOLED screen assembly modules panel
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "12,000 NGN",
    "Battery Replacement": "15,000 NGN",
    "Charging Port Repair": "10,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "25,000 NGN",
    "Front Camera/FaceID Repair": "12,000 NGN",
    "Loudspeaker Repair": "8,500 NGN",
    "Microphone Repair": "7,000 NGN",
    "Headphone Jack Repair": "7,500 NGN",
    "Power/Volume Button Repair": "8,500 NGN",
    "Fingerprint/Home Button Repair": "12,500 NGN",
    "Water Damage Recovery": "13,000 NGN",
    "Motherboard Micro-Soldering": "40,000 NGN",
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "19,000 NGN",
    "Network/Carrier Unlocking": "11,000 NGN"
},
"Redmi Note 12 Pro": {
    "Screen Replacement": "72,000 NGN", // Flexible structural fluid refresh rate OLED screen assembly modules panel
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "13,500 NGN",
    "Battery Replacement": "16,000 NGN",
    "Charging Port Repair": "11,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "30,000 NGN",
    "Front Camera/FaceID Repair": "13,000 NGN",
    "Loudspeaker Repair": "9,500 NGN",
    "Microphone Repair": "7,500 NGN",
    "Headphone Jack Repair": "8,000 NGN",
    "Power/Volume Button Repair": "9,000 NGN",
    "Fingerprint/Home Button Repair": "13,500 NGN",
    "Water Damage Recovery": "14,000 NGN",
    "Motherboard Micro-Soldering": "46,000 NGN",
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "21,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Redmi Note 13 Pro": {
    "Screen Replacement": "92,000 NGN", // Narrow border sharp crisp dynamic OLED screen assembly modules panel
    "Glass Only Repair": "22,000 NGN",
    "Back Glass Replacement": "16,000 NGN",
    "Battery Replacement": "18,500 NGN",
    "Charging Port Repair": "13,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "38,000 NGN",
    "Front Camera/FaceID Repair": "14,000 NGN",
    "Loudspeaker Repair": "10,500 NGN",
    "Microphone Repair": "8,000 NGN",
    "Headphone Jack Repair": "8,000 NGN",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "16,000 NGN", // Under-display scanning reader array sensory tracking layers matrix
    "Water Damage Recovery": "16,000 NGN",
    "Motherboard Micro-Soldering": "58,000 NGN",
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "23,000 NGN",
    "Network/Carrier Unlocking": "13,000 NGN"
},
"Redmi Note 14 Pro": {
    "Screen Replacement": "115,000 NGN", // Modern sleek finish high response OLED screen assembly modules panel
    "Glass Only Repair": "25,000 NGN",
    "Back Glass Replacement": "18,000 NGN",
    "Battery Replacement": "21,000 NGN",
    "Charging Port Repair": "14,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "44,000 NGN",
    "Front Camera/FaceID Repair": "15,500 NGN",
    "Loudspeaker Repair": "11,500 NGN",
    "Microphone Repair": "8,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "11,000 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN",
    "Water Damage Recovery": "18,000 NGN",
    "Motherboard Micro-Soldering": "70,000 NGN",
    "Software/Bootloop Flashing": "8,500 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "14,000 NGN"
},
"Redmi Note 15 Pro": {
    "Screen Replacement": "135,000 NGN", // Advanced next-gen thin bezel design OLED screen assembly modules panel
    "Glass Only Repair": "30,000 NGN",
    "Back Glass Replacement": "21,000 NGN",
    "Battery Replacement": "23,500 NGN",
    "Charging Port Repair": "16,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "50,000 NGN",
    "Front Camera/FaceID Repair": "17,000 NGN",
    "Loudspeaker Repair": "13,000 NGN",
    "Microphone Repair": "9,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "12,500 NGN",
    "Fingerprint/Home Button Repair": "21,000 NGN",
    "Water Damage Recovery": "20,000 NGN",
    "Motherboard Micro-Soldering": "80,000 NGN",
    "Software/Bootloop Flashing": "9,500 NGN",
    "Data Recovery": "28,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Redmi Note 7": {
    "Screen Replacement": "24,000 NGN", // Classic dot drop notch structural IPS LCD screen assembly modules panel
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "7,500 NGN",
    "Battery Replacement": "9,500 NGN",
    "Charging Port Repair": "6,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "11,000 NGN",
    "Front Camera/FaceID Repair": "8,000 NGN",
    "Loudspeaker Repair": "5,500 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "5,500 NGN",
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Rear circular scanner unit module tracking layout
    "Water Damage Recovery": "8,500 NGN",
    "Motherboard Micro-Soldering": "18,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "11,000 NGN",
    "Network/Carrier Unlocking": "7,000 NGN"
},
"Redmi Note 8": {
    "Screen Replacement": "26,000 NGN",
    "Glass Only Repair": "8,500 NGN",
    "Back Glass Replacement": "8,000 NGN",
    "Battery Replacement": "10,000 NGN",
    "Charging Port Repair": "6,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "12,000 NGN",
    "Front Camera/FaceID Repair": "8,500 NGN",
    "Loudspeaker Repair": "6,000 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "6,000 NGN",
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN",
    "Water Damage Recovery": "9,000 NGN",
    "Motherboard Micro-Soldering": "20,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "7,500 NGN"
},
"Redmi Note 9": {
    "Screen Replacement": "29,000 NGN", // Corner punch-hole configuration structural IPS LCD screen assembly modules panel
    "Glass Only Repair": "9,000 NGN",
    "Back Glass Replacement": "8,500 NGN",
    "Battery Replacement": "11,000 NGN",
    "Charging Port Repair": "7,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "14,000 NGN",
    "Front Camera/FaceID Repair": "9,000 NGN",
    "Loudspeaker Repair": "6,000 NGN",
    "Microphone Repair": "5,500 NGN",
    "Headphone Jack Repair": "6,500 NGN",
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN",
    "Water Damage Recovery": "10,000 NGN",
    "Motherboard Micro-Soldering": "22,000 NGN",
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "13,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Redmi Note 10": {
    "Screen Replacement": "44,000 NGN", // Vivid standard refresh rate Super AMOLED screen assembly modules panel
    "Glass Only Repair": "12,000 NGN",
    "Back Glass Replacement": "9,500 NGN",
    "Battery Replacement": "12,000 NGN",
    "Charging Port Repair": "8,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "18,000 NGN",
    "Front Camera/FaceID Repair": "10,000 NGN",
    "Loudspeaker Repair": "7,000 NGN",
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "7,000 NGN",
    "Power/Volume Button Repair": "7,000 NGN",
    "Fingerprint/Home Button Repair": "10,000 NGN",
    "Water Damage Recovery": "11,000 NGN",
    "Motherboard Micro-Soldering": "28,000 NGN",
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "9,000 NGN"
},
"Redmi Note 11": {
    "Screen Replacement": "48,000 NGN", // Fluid rate vibrant contrast AMOLED screen assembly modules panel
    "Glass Only Repair": "13,000 NGN",
    "Back Glass Replacement": "10,000 NGN",
    "Battery Replacement": "13,000 NGN",
    "Charging Port Repair": "8,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "20,000 NGN",
    "Front Camera/FaceID Repair": "11,000 NGN",
    "Loudspeaker Repair": "7,500 NGN",
    "Microphone Repair": "6,500 NGN",
    "Headphone Jack Repair": "7,000 NGN",
    "Power/Volume Button Repair": "7,500 NGN",
    "Fingerprint/Home Button Repair": "11,000 NGN",
    "Water Damage Recovery": "12,000 NGN",
    "Motherboard Micro-Soldering": "32,000 NGN",
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Redmi Note 12": {
    "Screen Replacement": "56,000 NGN", // High refresh responsive AMOLED screen assembly modules panel
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "11,000 NGN",
    "Battery Replacement": "14,500 NGN",
    "Charging Port Repair": "9,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "22,000 NGN",
    "Front Camera/FaceID Repair": "11,500 NGN",
    "Loudspeaker Repair": "8,000 NGN",
    "Microphone Repair": "7,000 NGN",
    "Headphone Jack Repair": "7,500 NGN",
    "Power/Volume Button Repair": "8,000 NGN",
    "Fingerprint/Home Button Repair": "12,000 NGN",
    "Water Damage Recovery": "13,000 NGN",
    "Motherboard Micro-Soldering": "36,000 NGN",
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "11,000 NGN"
},
"Redmi Note 13": {
    "Screen Replacement": "70,000 NGN", // Super thin border high fluid refresh AMOLED screen assembly modules panel
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "13,000 NGN",
    "Battery Replacement": "16,000 NGN",
    "Charging Port Repair": "10,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "28,000 NGN",
    "Front Camera/FaceID Repair": "12,500 NGN",
    "Loudspeaker Repair": "9,000 NGN",
    "Microphone Repair": "7,500 NGN",
    "Headphone Jack Repair": "7,500 NGN",
    "Power/Volume Button Repair": "9,000 NGN",
    "Fingerprint/Home Button Repair": "14,000 NGN", // Under-display scanning array tracking setup
    "Water Damage Recovery": "14,000 NGN",
    "Motherboard Micro-Soldering": "45,000 NGN",
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Redmi Note 14": {
    "Screen Replacement": "88,000 NGN", // Advanced narrow design fluid rate OLED screen assembly modules panel
    "Glass Only Repair": "22,000 NGN",
    "Back Glass Replacement": "15,000 NGN",
    "Battery Replacement": "18,000 NGN",
    "Charging Port Repair": "12,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "34,000 NGN",
    "Front Camera/FaceID Repair": "13,500 NGN",
    "Loudspeaker Repair": "10,000 NGN",
    "Microphone Repair": "8,000 NGN",
    "Headphone Jack Repair": "8,000 NGN",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "16,000 NGN",
    "Water Damage Recovery": "16,000 NGN",
    "Motherboard Micro-Soldering": "55,000 NGN",
    "Software/Bootloop Flashing": "8,000 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "13,000 NGN"
},
"Redmi Note 15": {
    "Screen Replacement": "105,000 NGN", // Ultra-modern thin bezel layout dynamic fluid OLED screen assembly modules panel
    "Glass Only Repair": "25,000 NGN",
    "Back Glass Replacement": "17,500 NGN",
    "Battery Replacement": "20,000 NGN",
    "Charging Port Repair": "13,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "40,000 NGN",
    "Front Camera/FaceID Repair": "15,000 NGN",
    "Loudspeaker Repair": "11,000 NGN",
    "Microphone Repair": "9,000 NGN",
    "Headphone Jack Repair": "8,500 NGN",
    "Power/Volume Button Repair": "11,000 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN",
    "Water Damage Recovery": "18,000 NGN",
    "Motherboard Micro-Soldering": "65,000 NGN",
    "Software/Bootloop Flashing": "9,000 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "14,000 NGN"
},
"Redmi 7": {
    "Screen Replacement": "18,000 NGN", // Standard entry level durable format IPS LCD screen assembly modules panel
    "Glass Only Repair": "6,500 NGN",
    "Back Glass Replacement": "5,000 NGN", // Lightweight styled composite backing panel case protective shields
    "Battery Replacement": "8,000 NGN",
    "Charging Port Repair": "5,000 NGN", // Legacy micro-USB connection docking node tracking line assembly
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "8,000 NGN",
    "Front Camera/FaceID Repair": "6,000 NGN",
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,500 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN",
    "Water Damage Recovery": "7,000 NGN",
    "Motherboard Micro-Soldering": "14,000 NGN",
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "9,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Redmi 8": {
    "Screen Replacement": "19,000 NGN",
    "Glass Only Repair": "7,000 NGN",
    "Back Glass Replacement": "5,500 NGN",
    "Battery Replacement": "8,500 NGN",
    "Charging Port Repair": "5,500 NGN", // Entry level Type-C interface docking node wire lines
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "9,000 NGN",
    "Front Camera/FaceID Repair": "6,500 NGN",
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,500 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "6,500 NGN",
    "Water Damage Recovery": "7,500 NGN",
    "Motherboard Micro-Soldering": "15,000 NGN",
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "9,500 NGN",
    "Network/Carrier Unlocking": "6,500 NGN"
},
"Redmi 9": {
    "Screen Replacement": "22,000 NGN", // High-definition balanced layout IPS LCD screen assembly modules panel
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "6,000 NGN",
    "Battery Replacement": "9,500 NGN",
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "11,000 NGN",
    "Front Camera/FaceID Repair": "7,500 NGN",
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "5,000 NGN",
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN",
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "18,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "11,000 NGN",
    "Network/Carrier Unlocking": "7,000 NGN"
},
"Redmi 10": {
    "Screen Replacement": "26,000 NGN", // Smooth fluid tracking high response IPS LCD screen assembly modules panel
    "Glass Only Repair": "9,000 NGN",
    "Back Glass Replacement": "6,500 NGN",
    "Battery Replacement": "10,500 NGN",
    "Charging Port Repair": "6,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "13,000 NGN",
    "Front Camera/FaceID Repair": "8,000 NGN",
    "Loudspeaker Repair": "5,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "5,000 NGN",
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN",
    "Water Damage Recovery": "9,000 NGN",
    "Motherboard Micro-Soldering": "22,000 NGN",
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Redmi 11": {
    "Screen Replacement": "28,000 NGN",
    "Glass Only Repair": "9,500 NGN",
    "Back Glass Replacement": "7,000 NGN",
    "Battery Replacement": "11,000 NGN",
    "Charging Port Repair": "7,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "14,000 NGN",
    "Front Camera/FaceID Repair": "8,500 NGN",
    "Loudspeaker Repair": "6,000 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "5,500 NGN",
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "8,500 NGN",
    "Water Damage Recovery": "9,500 NGN",
    "Motherboard Micro-Soldering": "24,000 NGN",
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "13,000 NGN",
    "Network/Carrier Unlocking": "8,500 NGN"
},
"Redmi 12": {
    "Screen Replacement": "32,000 NGN", // Large crisp aspect ratio fluid rate IPS LCD screen assembly modules panel
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "9,000 NGN", // Premium feel glass surface finish backing panel case protective shields
    "Battery Replacement": "12,000 NGN",
    "Charging Port Repair": "7,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "16,000 NGN",
    "Front Camera/FaceID Repair": "9,000 NGN",
    "Loudspeaker Repair": "6,500 NGN",
    "Microphone Repair": "5,500 NGN",
    "Headphone Jack Repair": "5,500 NGN",
    "Power/Volume Button Repair": "6,500 NGN",
    "Fingerprint/Home Button Repair": "9,500 NGN",
    "Water Damage Recovery": "10,000 NGN",
    "Motherboard Micro-Soldering": "26,000 NGN",
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "9,000 NGN"
},
"Redmi 13": {
    "Screen Replacement": "38,000 NGN", // Modern dynamic high resolution structural IPS LCD screen assembly modules panel
    "Glass Only Repair": "11,000 NGN",
    "Back Glass Replacement": "10,000 NGN",
    "Battery Replacement": "13,000 NGN",
    "Charging Port Repair": "8,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "19,000 NGN",
    "Front Camera/FaceID Repair": "10,000 NGN",
    "Loudspeaker Repair": "7,000 NGN",
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "6,000 NGN",
    "Power/Volume Button Repair": "7,000 NGN",
    "Fingerprint/Home Button Repair": "11,000 NGN",
    "Water Damage Recovery": "11,000 NGN",
    "Motherboard Micro-Soldering": "30,000 NGN",
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Redmi 14": {
    "Screen Replacement": "44,000 NGN", // Next-gen value performance balanced fluid display assembly modules panel
    "Glass Only Repair": "13,000 NGN",
    "Back Glass Replacement": "11,000 NGN",
    "Battery Replacement": "14,500 NGN",
    "Charging Port Repair": "8,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "22,000 NGN",
    "Front Camera/FaceID Repair": "11,000 NGN",
    "Loudspeaker Repair": "7,500 NGN",
    "Microphone Repair": "6,500 NGN",
    "Headphone Jack Repair": "6,000 NGN",
    "Power/Volume Button Repair": "7,500 NGN",
    "Fingerprint/Home Button Repair": "12,000 NGN",
    "Water Damage Recovery": "12,000 NGN",
    "Motherboard Micro-Soldering": "35,000 NGN",
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "17,000 NGN",
    "Network/Carrier Unlocking": "11,000 NGN"
},
"Redmi 15": {
    "Screen Replacement": "50,000 NGN", // Newest layout thin border high refresh structural assembly modules panel
    "Glass Only Repair": "15,000 NGN",
    "Back Glass Replacement": "12,000 NGN",
    "Battery Replacement": "16,000 NGN",
    "Charging Port Repair": "9,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "25,000 NGN",
    "Front Camera/FaceID Repair": "12,000 NGN",
    "Loudspeaker Repair": "8,000 NGN",
    "Microphone Repair": "7,000 NGN",
    "Headphone Jack Repair": "6,500 NGN",
    "Power/Volume Button Repair": "8,000 NGN",
    "Fingerprint/Home Button Repair": "13,000 NGN",
    "Water Damage Recovery": "13,000 NGN",
    "Motherboard Micro-Soldering": "40,000 NGN",
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "19,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Redmi 9C": {
    "Screen Replacement": "20,000 NGN", // Value structured immersive drop-notch IPS LCD screen assembly modules panel
    "Glass Only Repair": "7,500 NGN",
    "Back Glass Replacement": "5,500 NGN",
    "Battery Replacement": "9,000 NGN",
    "Charging Port Repair": "5,500 NGN", // Standard legacy docking tracking line sub-board wire lines
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "9,000 NGN",
    "Front Camera/FaceID Repair": "6,500 NGN",
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,500 NGN",
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "6,500 NGN",
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "15,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "10,000 NGN",
    "Network/Carrier Unlocking": "7,000 NGN"
},
"Redmi 10C": {
    "Screen Replacement": "24,000 NGN", // Large display configuration entry level IPS LCD screen assembly modules panel
    "Glass Only Repair": "8,500 NGN",
    "Back Glass Replacement": "6,000 NGN",
    "Battery Replacement": "10,000 NGN",
    "Charging Port Repair": "6,500 NGN", // Fast charging type-C node interface setup
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "11,000 NGN",
    "Front Camera/FaceID Repair": "7,000 NGN",
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "5,000 NGN",
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN",
    "Water Damage Recovery": "9,000 NGN",
    "Motherboard Micro-Soldering": "18,000 NGN",
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "11,500 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Redmi 12C": {
    "Screen Replacement": "26,000 NGN",
    "Glass Only Repair": "9,000 NGN",
    "Back Glass Replacement": "6,500 NGN",
    "Battery Replacement": "11,000 NGN",
    "Charging Port Repair": "6,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "12,000 NGN",
    "Front Camera/FaceID Repair": "7,500 NGN",
    "Loudspeaker Repair": "5,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "5,000 NGN",
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "7,500 NGN",
    "Water Damage Recovery": "9,000 NGN",
    "Motherboard Micro-Soldering": "20,000 NGN",
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "8,500 NGN"
},
"Redmi 13C": {
    "Screen Replacement": "30,000 NGN", // Fluid refresh rate balance structure entry option LCD screen assembly modules panel
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "7,500 NGN",
    "Battery Replacement": "12,000 NGN",
    "Charging Port Repair": "7,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "14,000 NGN",
    "Front Camera/FaceID Repair": "8,000 NGN",
    "Loudspeaker Repair": "6,000 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "5,500 NGN",
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "8,500 NGN",
    "Water Damage Recovery": "10,000 NGN",
    "Motherboard Micro-Soldering": "24,000 NGN",
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "13,500 NGN",
    "Network/Carrier Unlocking": "9,000 NGN"
},
"Redmi 14C": {
    "Screen Replacement": "35,000 NGN", // Large view modern thin finish entry fluid rate screen assembly modules panel
    "Glass Only Repair": "11,500 NGN",
    "Back Glass Replacement": "8,500 NGN",
    "Battery Replacement": "13,500 NGN",
    "Charging Port Repair": "8,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "17,000 NGN",
    "Front Camera/FaceID Repair": "9,000 NGN",
    "Loudspeaker Repair": "6,500 NGN",
    "Microphone Repair": "5,500 NGN",
    "Headphone Jack Repair": "5,500 NGN",
    "Power/Volume Button Repair": "6,500 NGN",
    "Fingerprint/Home Button Repair": "10,000 NGN",
    "Water Damage Recovery": "11,000 NGN",
    "Motherboard Micro-Soldering": "28,000 NGN",
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "15,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Redmi 15C": {
    "Screen Replacement": "40,000 NGN", // New generation budget entry responsive fluid rate screen assembly modules panel
    "Glass Only Repair": "13,000 NGN",
    "Back Glass Replacement": "9,500 NGN",
    "Battery Replacement": "15,000 NGN",
    "Charging Port Repair": "8,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "20,000 NGN",
    "Front Camera/FaceID Repair": "10,000 NGN",
    "Loudspeaker Repair": "7,000 NGN",
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "6,000 NGN",
    "Power/Volume Button Repair": "7,000 NGN",
    "Fingerprint/Home Button Repair": "11,500 NGN",
    "Water Damage Recovery": "12,000 NGN",
    "Motherboard Micro-Soldering": "32,000 NGN",
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "16,500 NGN",
    "Network/Carrier Unlocking": "11,000 NGN"
},
"Redmi A1": {
    "Screen Replacement": "17,000 NGN", // Pure basic standard drop notch IPS LCD screen assembly modules panel
    "Glass Only Repair": "6,000 NGN",
    "Back Glass Replacement": "4,500 NGN", // Light textured leather feel composite backing protective shields
    "Battery Replacement": "8,000 NGN",
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "7,000 NGN",
    "Front Camera/FaceID Repair": "5,500 NGN",
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "N/A",
    "Water Damage Recovery": "7,000 NGN",
    "Motherboard Micro-Soldering": "12,000 NGN",
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "8,000 NGN",
    "Network/Carrier Unlocking": "5,500 NGN"
},
"Redmi A1+": {
    "Screen Replacement": "17,500 NGN",
    "Glass Only Repair": "6,000 NGN",
    "Back Glass Replacement": "4,500 NGN",
    "Battery Replacement": "8,000 NGN",
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "7,000 NGN",
    "Front Camera/FaceID Repair": "5,500 NGN",
    "Loudspeaker Repair": "4,000 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,000 NGN",
    "Fingerprint/Home Button Repair": "5,500 NGN", // Basic rear circular scanner module setup
    "Water Damage Recovery": "7,000 NGN",
    "Motherboard Micro-Soldering": "13,000 NGN",
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "8,500 NGN",
    "Network/Carrier Unlocking": "5,500 NGN"
},
"Redmi A2": {
    "Screen Replacement": "18,000 NGN",
    "Glass Only Repair": "6,500 NGN",
    "Back Glass Replacement": "5,000 NGN",
    "Battery Replacement": "8,500 NGN",
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "7,500 NGN",
    "Front Camera/FaceID Repair": "6,000 NGN",
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,500 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "N/A",
    "Water Damage Recovery": "7,500 NGN",
    "Motherboard Micro-Soldering": "14,000 NGN",
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "9,000 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Redmi A2+": {
    "Screen Replacement": "18,500 NGN",
    "Glass Only Repair": "6,500 NGN",
    "Back Glass Replacement": "5,000 NGN",
    "Battery Replacement": "8,500 NGN",
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "7,500 NGN",
    "Front Camera/FaceID Repair": "6,000 NGN",
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "3,500 NGN",
    "Headphone Jack Repair": "4,500 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "6,000 NGN",
    "Water Damage Recovery": "7,500 NGN",
    "Motherboard Micro-Soldering": "14,500 NGN",
    "Software/Bootloop Flashing": "4,500 NGN",
    "Data Recovery": "9,500 NGN",
    "Network/Carrier Unlocking": "6,000 NGN"
},
"Redmi A3": {
    "Screen Replacement": "22,000 NGN", // Circular design premium look fluid 90Hz entry display assembly modules panel
    "Glass Only Repair": "7,500 NGN",
    "Back Glass Replacement": "6,000 NGN", // Sleek clean aesthetic composite styling backing plate
    "Battery Replacement": "9,500 NGN",
    "Charging Port Repair": "6,000 NGN", // Type-C upgrade implementation tracking board lines
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "9,000 NGN",
    "Front Camera/FaceID Repair": "6,500 NGN",
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,500 NGN",
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "7,000 NGN", // Side-mounted tracking reader array sensory layers
    "Water Damage Recovery": "8,500 NGN",
    "Motherboard Micro-Soldering": "18,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "11,000 NGN",
    "Network/Carrier Unlocking": "7,000 NGN"
},
"Redmi A3 Pro": {
    "Screen Replacement": "26,000 NGN", // Enhanced layout smooth fluid tracking entry class screen assembly modules panel
    "Glass Only Repair": "8,500 NGN",
    "Back Glass Replacement": "6,500 NGN",
    "Battery Replacement": "10,500 NGN",
    "Charging Port Repair": "6,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "11,000 NGN",
    "Front Camera/FaceID Repair": "7,000 NGN",
    "Loudspeaker Repair": "5,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "5,000 NGN",
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN",
    "Water Damage Recovery": "9,500 NGN",
    "Motherboard Micro-Soldering": "21,000 NGN",
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "12,500 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Redmi A4 5G": {
    "Screen Replacement": "30,000 NGN", // High speed network optimized high fluidity smooth IPS LCD screen assembly modules panel
    "Glass Only Repair": "9,500 NGN",
    "Back Glass Replacement": "7,000 NGN",
    "Battery Replacement": "11,500 NGN",
    "Charging Port Repair": "7,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "13,000 NGN",
    "Front Camera/FaceID Repair": "8,000 NGN",
    "Loudspeaker Repair": "6,000 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "5,000 NGN",
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "9,000 NGN",
    "Water Damage Recovery": "10,000 NGN",
    "Motherboard Micro-Soldering": "25,000 NGN", // Budget custom high-speed network support core processing platform system board
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "9,500 NGN"
},
"Redmi A5": {
    "Screen Replacement": "35,000 NGN", // Newest iteration crisp responsive entry level screen assembly modules panel
    "Glass Only Repair": "11,000 NGN",
    "Back Glass Replacement": "8,000 NGN",
    "Battery Replacement": "12,500 NGN",
    "Charging Port Repair": "7,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "15,000 NGN",
    "Front Camera/FaceID Repair": "8,500 NGN",
    "Loudspeaker Repair": "6,500 NGN",
    "Microphone Repair": "5,500 NGN",
    "Headphone Jack Repair": "5,500 NGN",
    "Power/Volume Button Repair": "6,500 NGN",
    "Fingerprint/Home Button Repair": "10,000 NGN",
    "Water Damage Recovery": "11,000 NGN",
    "Motherboard Micro-Soldering": "29,000 NGN",
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "15,500 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Mi MIX": {
    "Screen Replacement": "75,000 NGN",
    "Glass Only Repair": "25,000 NGN",
    "Back Glass Replacement": "18,000 NGN",
    "Battery Replacement": "16,500 NGN",
    "Charging Port Repair": "10,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "28,000 NGN",
    "Front Camera/FaceID Repair": "14,000 NGN",
    "Loudspeaker Repair": "9,500 NGN",
    "Microphone Repair": "8,500 NGN",
    "Headphone Jack Repair": "7,500 NGN",
    "Power/Volume Button Repair": "8,500 NGN",
    "Fingerprint/Home Button Repair": "12,000 NGN",
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "45,000 NGN",
    "Software/Bootloop Flashing": "8,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Mi MIX 2": {
    "Screen Replacement": "80,000 NGN",
    "Glass Only Repair": "28,000 NGN",
    "Back Glass Replacement": "20,000 NGN",
    "Battery Replacement": "16,500 NGN",
    "Charging Port Repair": "11,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "30,000 NGN",
    "Front Camera/FaceID Repair": "15,000 NGN",
    "Loudspeaker Repair": "9,500 NGN",
    "Microphone Repair": "8,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "9,000 NGN",
    "Fingerprint/Home Button Repair": "13,000 NGN",
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "48,000 NGN",
    "Software/Bootloop Flashing": "8,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Mi MIX 2S": {
    "Screen Replacement": "85,000 NGN",
    "Glass Only Repair": "30,000 NGN",
    "Back Glass Replacement": "22,000 NGN",
    "Battery Replacement": "18,000 NGN",
    "Charging Port Repair": "12,000 NGN",
    "Wireless Charging Repair": "15,000 NGN",
    "Rear Camera Repair": "35,000 NGN",
    "Front Camera/FaceID Repair": "15,000 NGN",
    "Loudspeaker Repair": "10,000 NGN",
    "Microphone Repair": "9,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "9,000 NGN",
    "Fingerprint/Home Button Repair": "13,500 NGN",
    "Water Damage Recovery": "18,000 NGN",
    "Motherboard Micro-Soldering": "52,000 NGN",
    "Software/Bootloop Flashing": "8,500 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Mi MIX 3": {
    "Screen Replacement": "110,000 NGN", // Slider mechanism screen assembly configuration
    "Glass Only Repair": "38,000 NGN",
    "Back Glass Replacement": "25,000 NGN",
    "Battery Replacement": "19,500 NGN",
    "Charging Port Repair": "14,500 NGN",
    "Wireless Charging Repair": "16,000 NGN",
    "Rear Camera Repair": "38,000 NGN",
    "Front Camera/FaceID Repair": "22,000 NGN",
    "Loudspeaker Repair": "12,000 NGN",
    "Microphone Repair": "10,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "11,000 NGN",
    "Fingerprint/Home Button Repair": "15,000 NGN",
    "Water Damage Recovery": "20,000 NGN",
    "Motherboard Micro-Soldering": "58,000 NGN",
    "Software/Bootloop Flashing": "8,500 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Mi MIX Alpha": {
    "Screen Replacement": "650,000 NGN", // Surround wrap-around flexible display premium module
    "Glass Only Repair": "180,000 NGN",
    "Back Glass Replacement": "N/A",
    "Battery Replacement": "45,000 NGN",
    "Charging Port Repair": "30,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "95,000 NGN",
    "Front Camera/FaceID Repair": "N/A",
    "Loudspeaker Repair": "25,000 NGN",
    "Microphone Repair": "20,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "25,000 NGN",
    "Fingerprint/Home Button Repair": "35,000 NGN",
    "Water Damage Recovery": "50,000 NGN",
    "Motherboard Micro-Soldering": "150,000 NGN",
    "Software/Bootloop Flashing": "20,000 NGN",
    "Data Recovery": "60,000 NGN",
    "Network/Carrier Unlocking": "35,000 NGN"
},
"Mi MIX Fold": {
    "Screen Replacement": "320,000 NGN", // Internal folding flexible panel module Assembly
    "Glass Only Repair": "85,000 NGN",
    "Back Glass Replacement": "35,000 NGN",
    "Battery Replacement": "32,000 NGN",
    "Charging Port Repair": "22,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "65,000 NGN",
    "Front Camera/FaceID Repair": "26,000 NGN",
    "Loudspeaker Repair": "18,000 NGN",
    "Microphone Repair": "15,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "16,000 NGN",
    "Fingerprint/Home Button Repair": "22,000 NGN",
    "Water Damage Recovery": "35,000 NGN",
    "Motherboard Micro-Soldering": "95,000 NGN",
    "Software/Bootloop Flashing": "12,000 NGN",
    "Data Recovery": "40,000 NGN",
    "Network/Carrier Unlocking": "25,000 NGN"
},
"Xiaomi MIX Fold 2": {
    "Screen Replacement": "380,000 NGN",
    "Glass Only Repair": "95,000 NGN",
    "Back Glass Replacement": "40,000 NGN",
    "Battery Replacement": "35,000 NGN",
    "Charging Port Repair": "25,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "80,000 NGN",
    "Front Camera/FaceID Repair": "28,000 NGN",
    "Loudspeaker Repair": "20,000 NGN",
    "Microphone Repair": "16,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "18,000 NGN",
    "Fingerprint/Home Button Repair": "25,000 NGN",
    "Water Damage Recovery": "40,000 NGN",
    "Motherboard Micro-Soldering": "110,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "45,000 NGN",
    "Network/Carrier Unlocking": "30,000 NGN"
},
"Xiaomi MIX Fold 3": {
    "Screen Replacement": "440,000 NGN",
    "Glass Only Repair": "110,000 NGN",
    "Back Glass Replacement": "45,000 NGN",
    "Battery Replacement": "38,000 NGN",
    "Charging Port Repair": "28,000 NGN",
    "Wireless Charging Repair": "26,000 NGN",
    "Rear Camera Repair": "95,000 NGN",
    "Front Camera/FaceID Repair": "32,000 NGN",
    "Loudspeaker Repair": "22,000 NGN",
    "Microphone Repair": "18,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "20,000 NGN",
    "Fingerprint/Home Button Repair": "28,000 NGN",
    "Water Damage Recovery": "45,000 NGN",
    "Motherboard Micro-Soldering": "130,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "50,000 NGN",
    "Network/Carrier Unlocking": "35,000 NGN"
},
"Xiaomi MIX Fold 4": {
    "Screen Replacement": "520,000 NGN",
    "Glass Only Repair": "130,000 NGN",
    "Back Glass Replacement": "55,000 NGN",
    "Battery Replacement": "42,000 NGN",
    "Charging Port Repair": "35,000 NGN",
    "Wireless Charging Repair": "30,000 NGN",
    "Rear Camera Repair": "115,000 NGN",
    "Front Camera/FaceID Repair": "38,000 NGN",
    "Loudspeaker Repair": "25,000 NGN",
    "Microphone Repair": "20,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "24,000 NGN",
    "Fingerprint/Home Button Repair": "32,000 NGN",
    "Water Damage Recovery": "50,000 NGN",
    "Motherboard Micro-Soldering": "150,000 NGN",
    "Software/Bootloop Flashing": "20,000 NGN",
    "Data Recovery": "60,000 NGN",
    "Network/Carrier Unlocking": "40,000 NGN"
},
"Xiaomi MIX Flip": {
    "Screen Replacement": "260,000 NGN", // Internal clamshell flexible OLED assembly panel
    "Glass Only Repair": "70,000 NGN",
    "Back Glass Replacement": "32,000 NGN",
    "Battery Replacement": "28,000 NGN",
    "Charging Port Repair": "20,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "55,000 NGN",
    "Front Camera/FaceID Repair": "25,000 NGN",
    "Loudspeaker Repair": "16,000 NGN",
    "Microphone Repair": "14,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "15,000 NGN",
    "Fingerprint/Home Button Repair": "22,000 NGN",
    "Water Damage Recovery": "30,000 NGN",
    "Motherboard Micro-Soldering": "85,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "40,000 NGN",
    "Network/Carrier Unlocking": "30,000 NGN"
},
"Xiaomi 11 Ultra": {
    "Screen Replacement": "165,000 NGN", // Curved premium AMOLED module with secondary rear display alignment
    "Glass Only Repair": "50,000 NGN",
    "Back Glass Replacement": "38,000 NGN",
    "Battery Replacement": "22,000 NGN",
    "Charging Port Repair": "16,500 NGN",
    "Wireless Charging Repair": "20,000 NGN",
    "Rear Camera Repair": "75,000 NGN",
    "Front Camera/FaceID Repair": "24,000 NGN",
    "Loudspeaker Repair": "14,000 NGN",
    "Microphone Repair": "12,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN",
    "Water Damage Recovery": "25,000 NGN",
    "Motherboard Micro-Soldering": "70,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "30,000 NGN",
    "Network/Carrier Unlocking": "18,000 NGN"
},
"Xiaomi 12S Ultra": {
    "Screen Replacement": "195,000 NGN",
    "Glass Only Repair": "60,000 NGN",
    "Back Glass Replacement": "42,000 NGN",
    "Battery Replacement": "25,000 NGN",
    "Charging Port Repair": "18,500 NGN",
    "Wireless Charging Repair": "22,000 NGN",
    "Rear Camera Repair": "90,000 NGN",
    "Front Camera/FaceID Repair": "26,000 NGN",
    "Loudspeaker Repair": "15,000 NGN",
    "Microphone Repair": "13,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "13,500 NGN",
    "Fingerprint/Home Button Repair": "20,000 NGN",
    "Water Damage Recovery": "28,000 NGN",
    "Motherboard Micro-Soldering": "80,000 NGN",
    "Software/Bootloop Flashing": "12,000 NGN",
    "Data Recovery": "35,000 NGN",
    "Network/Carrier Unlocking": "22,000 NGN"
},
"Xiaomi 13 Ultra": {
    "Screen Replacement": "240,000 NGN",
    "Glass Only Repair": "75,000 NGN",
    "Back Glass Replacement": "48,000 NGN",
    "Battery Replacement": "28,000 NGN",
    "Charging Port Repair": "22,000 NGN",
    "Wireless Charging Repair": "25,000 NGN",
    "Rear Camera Repair": "110,000 NGN",
    "Front Camera/FaceID Repair": "30,000 NGN",
    "Loudspeaker Repair": "18,000 NGN",
    "Microphone Repair": "15,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "15,000 NGN",
    "Fingerprint/Home Button Repair": "24,000 NGN",
    "Water Damage Recovery": "32,000 NGN",
    "Motherboard Micro-Soldering": "95,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "40,000 NGN",
    "Network/Carrier Unlocking": "25,000 NGN"
},
"Xiaomi 14 Ultra": {
    "Screen Replacement": "295,000 NGN",
    "Glass Only Repair": "90,000 NGN",
    "Back Glass Replacement": "55,000 NGN",
    "Battery Replacement": "32,000 NGN",
    "Charging Port Repair": "25,000 NGN",
    "Wireless Charging Repair": "28,000 NGN",
    "Rear Camera Repair": "135,000 NGN",
    "Front Camera/FaceID Repair": "35,000 NGN",
    "Loudspeaker Repair": "20,000 NGN",
    "Microphone Repair": "17,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "18,000 NGN",
    "Fingerprint/Home Button Repair": "28,000 NGN",
    "Water Damage Recovery": "40,000 NGN",
    "Motherboard Micro-Soldering": "115,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "45,000 NGN",
    "Network/Carrier Unlocking": "30,000 NGN"
},
"Xiaomi 15 Ultra": {
    "Screen Replacement": "360,000 NGN",
    "Glass Only Repair": "110,000 NGN",
    "Back Glass Replacement": "65,000 NGN",
    "Battery Replacement": "38,000 NGN",
    "Charging Port Repair": "30,000 NGN",
    "Wireless Charging Repair": "32,000 NGN",
    "Rear Camera Repair": "160,000 NGN",
    "Front Camera/FaceID Repair": "42,000 NGN",
    "Loudspeaker Repair": "24,000 NGN",
    "Microphone Repair": "20,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "22,000 NGN",
    "Fingerprint/Home Button Repair": "35,000 NGN",
    "Water Damage Recovery": "45,000 NGN",
    "Motherboard Micro-Soldering": "140,000 NGN",
    "Software/Bootloop Flashing": "20,000 NGN",
    "Data Recovery": "55,000 NGN",
    "Network/Carrier Unlocking": "35,000 NGN"
},
"Xiaomi 16 Ultra": {
    "Screen Replacement": "N/A",
    "Glass Only Repair": "N/A",
    "Back Glass Replacement": "N/A",
    "Battery Replacement": "N/A",
    "Charging Port Repair": "N/A",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "N/A",
    "Front Camera/FaceID Repair": "N/A",
    "Loudspeaker Repair": "N/A",
    "Microphone Repair": "N/A",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "N/A",
    "Fingerprint/Home Button Repair": "N/A",
    "Water Damage Recovery": "N/A",
    "Motherboard Micro-Soldering": "N/A",
    "Software/Bootloop Flashing": "N/A",
    "Data Recovery": "N/A",
    "Network/Carrier Unlocking": "N/A"
},
"Xiaomi Mi 10 Pro": {
    "Screen Replacement": "115,000 NGN", // High refresh rate curved panel assembly module
    "Glass Only Repair": "35,000 NGN",
    "Back Glass Replacement": "24,000 NGN",
    "Battery Replacement": "18,500 NGN",
    "Charging Port Repair": "13,500 NGN",
    "Wireless Charging Repair": "15,000 NGN",
    "Rear Camera Repair": "45,000 NGN",
    "Front Camera/FaceID Repair": "18,000 NGN",
    "Loudspeaker Repair": "11,000 NGN",
    "Microphone Repair": "9,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "15,000 NGN",
    "Water Damage Recovery": "20,000 NGN",
    "Motherboard Micro-Soldering": "55,000 NGN",
    "Software/Bootloop Flashing": "8,500 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Xiaomi Mi 11 Pro": {
    "Screen Replacement": "140,000 NGN",
    "Glass Only Repair": "45,000 NGN",
    "Back Glass Replacement": "28,000 NGN",
    "Battery Replacement": "20,000 NGN",
    "Charging Port Repair": "15,000 NGN",
    "Wireless Charging Repair": "18,000 NGN",
    "Rear Camera Repair": "55,000 NGN",
    "Front Camera/FaceID Repair": "20,000 NGN",
    "Loudspeaker Repair": "12,000 NGN",
    "Microphone Repair": "10,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "11,000 NGN",
    "Fingerprint/Home Button Repair": "16,500 NGN",
    "Water Damage Recovery": "22,000 NGN",
    "Motherboard Micro-Soldering": "65,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "28,000 NGN",
    "Network/Carrier Unlocking": "16,500 NGN"
},
"Xiaomi 12 Pro": {
    "Screen Replacement": "155,000 NGN",
    "Glass Only Repair": "48,000 NGN",
    "Back Glass Replacement": "30,000 NGN",
    "Battery Replacement": "22,000 NGN",
    "Charging Port Repair": "16,000 NGN",
    "Wireless Charging Repair": "18,000 NGN",
    "Rear Camera Repair": "65,000 NGN",
    "Front Camera/FaceID Repair": "22,000 NGN",
    "Loudspeaker Repair": "13,000 NGN",
    "Microphone Repair": "11,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "11,000 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN",
    "Water Damage Recovery": "24,000 NGN",
    "Motherboard Micro-Soldering": "70,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "30,000 NGN",
    "Network/Carrier Unlocking": "18,000 NGN"
},
"Xiaomi 13 Pro": {
    "Screen Replacement": "190,000 NGN",
    "Glass Only Repair": "58,000 NGN",
    "Back Glass Replacement": "36,000 NGN",
    "Battery Replacement": "25,000 NGN",
    "Charging Port Repair": "18,500 NGN",
    "Wireless Charging Repair": "22,000 NGN",
    "Rear Camera Repair": "85,000 NGN",
    "Front Camera/FaceID Repair": "25,000 NGN",
    "Loudspeaker Repair": "15,000 NGN",
    "Microphone Repair": "13,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "13,000 NGN",
    "Fingerprint/Home Button Repair": "22,000 NGN",
    "Water Damage Recovery": "26,000 NGN",
    "Motherboard Micro-Soldering": "85,000 NGN",
    "Software/Bootloop Flashing": "12,000 NGN",
    "Data Recovery": "35,000 NGN",
    "Network/Carrier Unlocking": "22,000 NGN"
},
"Xiaomi 14 Pro": {
    "Screen Replacement": "240,000 NGN",
    "Glass Only Repair": "75,000 NGN",
    "Back Glass Replacement": "45,000 NGN",
    "Battery Replacement": "28,000 NGN",
    "Charging Port Repair": "22,000 NGN",
    "Wireless Charging Repair": "25,000 NGN",
    "Rear Camera Repair": "105,000 NGN",
    "Front Camera/FaceID Repair": "30,000 NGN",
    "Loudspeaker Repair": "18,000 NGN",
    "Microphone Repair": "15,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "15,000 NGN",
    "Fingerprint/Home Button Repair": "25,000 NGN",
    "Water Damage Recovery": "30,000 NGN",
    "Motherboard Micro-Soldering": "100,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "40,000 NGN",
    "Network/Carrier Unlocking": "25,000 NGN"
},
"Xiaomi 15 Pro": {
    "Screen Replacement": "290,000 NGN",
    "Glass Only Repair": "90,000 NGN",
    "Back Glass Replacement": "55,000 NGN",
    "Battery Replacement": "32,000 NGN",
    "Charging Port Repair": "26,000 NGN",
    "Wireless Charging Repair": "28,000 NGN",
    "Rear Camera Repair": "125,000 NGN",
    "Front Camera/FaceID Repair": "35,000 NGN",
    "Loudspeaker Repair": "20,000 NGN",
    "Microphone Repair": "17,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "18,000 NGN",
    "Fingerprint/Home Button Repair": "30,000 NGN",
    "Water Damage Recovery": "35,000 NGN",
    "Motherboard Micro-Soldering": "125,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "45,000 NGN",
    "Network/Carrier Unlocking": "30,000 NGN"
},
"Xiaomi 16 Pro": {
    "Screen Replacement": "N/A",
    "Glass Only Repair": "N/A",
    "Back Glass Replacement": "N/A",
    "Battery Replacement": "N/A",
    "Charging Port Repair": "N/A",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "N/A",
    "Front Camera/FaceID Repair": "N/A",
    "Loudspeaker Repair": "N/A",
    "Microphone Repair": "N/A",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "N/A",
    "Fingerprint/Home Button Repair": "N/A",
    "Water Damage Recovery": "N/A",
    "Motherboard Micro-Soldering": "N/A",
    "Software/Bootloop Flashing": "N/A",
    "Data Recovery": "N/A",
    "Network/Carrier Unlocking": "N/A"
},
"Mi 1": {
    "Screen Replacement": "18,000 NGN", // Legacy baseline TFT/LCD screen module
    "Glass Only Repair": "6,000 NGN",
    "Back Glass Replacement": "4,500 NGN",
    "Battery Replacement": "9,000 NGN",
    "Charging Port Repair": "5,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "10,000 NGN",
    "Front Camera/FaceID Repair": "5,500 NGN",
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,000 NGN",
    "Headphone Jack Repair": "4,000 NGN",
    "Power/Volume Button Repair": "4,500 NGN",
    "Fingerprint/Home Button Repair": "N/A",
    "Water Damage Recovery": "8,000 NGN",
    "Motherboard Micro-Soldering": "18,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "6,500 NGN"
},
"Mi 2": {
    "Screen Replacement": "20,000 NGN",
    "Glass Only Repair": "6,500 NGN",
    "Back Glass Replacement": "5,000 NGN",
    "Battery Replacement": "9,500 NGN",
    "Charging Port Repair": "5,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "11,000 NGN",
    "Front Camera/FaceID Repair": "6,000 NGN",
    "Loudspeaker Repair": "4,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,500 NGN",
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "N/A",
    "Water Damage Recovery": "8,500 NGN",
    "Motherboard Micro-Soldering": "20,000 NGN",
    "Software/Bootloop Flashing": "5,000 NGN",
    "Data Recovery": "12,000 NGN",
    "Network/Carrier Unlocking": "6,500 NGN"
},
"Mi 3": {
    "Screen Replacement": "22,000 NGN",
    "Glass Only Repair": "7,000 NGN",
    "Back Glass Replacement": "5,500 NGN",
    "Battery Replacement": "10,000 NGN",
    "Charging Port Repair": "6,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "12,500 NGN",
    "Front Camera/FaceID Repair": "6,500 NGN",
    "Loudspeaker Repair": "5,000 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "4,500 NGN",
    "Power/Volume Button Repair": "5,000 NGN",
    "Fingerprint/Home Button Repair": "N/A",
    "Water Damage Recovery": "9,000 NGN",
    "Motherboard Micro-Soldering": "22,000 NGN",
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "7,500 NGN"
},
"Mi 4": {
    "Screen Replacement": "25,000 NGN",
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "6,000 NGN",
    "Battery Replacement": "11,000 NGN",
    "Charging Port Repair": "6,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "14,000 NGN",
    "Front Camera/FaceID Repair": "7,000 NGN",
    "Loudspeaker Repair": "5,500 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "5,000 NGN",
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "N/A",
    "Water Damage Recovery": "10,000 NGN",
    "Motherboard Micro-Soldering": "25,000 NGN",
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Mi 5": {
    "Screen Replacement": "28,000 NGN",
    "Glass Only Repair": "9,500 NGN",
    "Back Glass Replacement": "8,000 NGN",
    "Battery Replacement": "12,000 NGN",
    "Charging Port Repair": "7,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "16,500 NGN",
    "Front Camera/FaceID Repair": "8,000 NGN",
    "Loudspeaker Repair": "6,000 NGN",
    "Microphone Repair": "5,500 NGN",
    "Headphone Jack Repair": "5,500 NGN",
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "10,000 NGN",
    "Water Damage Recovery": "11,000 NGN",
    "Motherboard Micro-Soldering": "28,000 NGN",
    "Software/Bootloop Flashing": "6,000 NGN",
    "Data Recovery": "15,500 NGN",
    "Network/Carrier Unlocking": "9,000 NGN"
},
"Mi 6": {
    "Screen Replacement": "35,000 NGN",
    "Glass Only Repair": "11,000 NGN",
    "Back Glass Replacement": "10,000 NGN",
    "Battery Replacement": "13,500 NGN",
    "Charging Port Repair": "8,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "20,000 NGN",
    "Front Camera/FaceID Repair": "9,000 NGN",
    "Loudspeaker Repair": "6,500 NGN",
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "6,500 NGN",
    "Fingerprint/Home Button Repair": "11,500 NGN",
    "Water Damage Recovery": "12,000 NGN",
    "Motherboard Micro-Soldering": "32,000 NGN",
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Mi 8": {
    "Screen Replacement": "55,000 NGN", // Early generation OLED display panel standard assembly
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "12,000 NGN",
    "Battery Replacement": "14,500 NGN",
    "Charging Port Repair": "9,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "26,000 NGN",
    "Front Camera/FaceID Repair": "12,500 NGN",
    "Loudspeaker Repair": "7,500 NGN",
    "Microphone Repair": "6,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "7,500 NGN",
    "Fingerprint/Home Button Repair": "12,000 NGN",
    "Water Damage Recovery": "14,000 NGN",
    "Motherboard Micro-Soldering": "38,000 NGN",
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "11,000 NGN"
    },
"Mi 9": {
    "Screen Replacement": "65,000 NGN",
    "Glass Only Repair": "22,000 NGN",
    "Back Glass Replacement": "15,000 NGN",
    "Battery Replacement": "15,500 NGN",
    "Charging Port Repair": "10,500 NGN",
    "Wireless Charging Repair": "13,000 NGN",
    "Rear Camera Repair": "32,000 NGN",
    "Front Camera/FaceID Repair": "14,000 NGN",
    "Loudspeaker Repair": "8,000 NGN",
    "Microphone Repair": "7,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "8,000 NGN",
    "Fingerprint/Home Button Repair": "13,500 NGN",
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "42,000 NGN",
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Mi 10": {
    "Screen Replacement": "95,000 NGN", // Curved premium AMOLED assembly frame matrix
    "Glass Only Repair": "30,000 NGN",
    "Back Glass Replacement": "20,000 NGN",
    "Battery Replacement": "17,500 NGN",
    "Charging Port Repair": "12,000 NGN",
    "Wireless Charging Repair": "14,500 NGN",
    "Rear Camera Repair": "38,000 NGN",
    "Front Camera/FaceID Repair": "16,000 NGN",
    "Loudspeaker Repair": "9,500 NGN",
    "Microphone Repair": "8,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "9,000 NGN",
    "Fingerprint/Home Button Repair": "14,500 NGN",
    "Water Damage Recovery": "18,000 NGN",
    "Motherboard Micro-Soldering": "48,000 NGN",
    "Software/Bootloop Flashing": "8,500 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "14,000 NGN"
},
"Mi 11": {
    "Screen Replacement": "125,000 NGN",
    "Glass Only Repair": "40,000 NGN",
    "Back Glass Replacement": "25,000 NGN",
    "Battery Replacement": "19,000 NGN",
    "Charging Port Repair": "14,000 NGN",
    "Wireless Charging Repair": "16,500 NGN",
    "Rear Camera Repair": "48,000 NGN",
    "Front Camera/FaceID Repair": "18,500 NGN",
    "Loudspeaker Repair": "11,000 NGN",
    "Microphone Repair": "9,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "15,500 NGN",
    "Water Damage Recovery": "20,000 NGN",
    "Motherboard Micro-Soldering": "58,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "26,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Xiaomi 12": {
    "Screen Replacement": "135,000 NGN",
    "Glass Only Repair": "42,000 NGN",
    "Back Glass Replacement": "26,000 NGN",
    "Battery Replacement": "20,000 NGN",
    "Charging Port Repair": "15,000 NGN",
    "Wireless Charging Repair": "17,000 NGN",
    "Rear Camera Repair": "52,000 NGN",
    "Front Camera/FaceID Repair": "20,000 NGN",
    "Loudspeaker Repair": "12,000 NGN",
    "Microphone Repair": "9,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "16,000 NGN",
    "Water Damage Recovery": "22,000 NGN",
    "Motherboard Micro-Soldering": "62,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "28,000 NGN",
    "Network/Carrier Unlocking": "16,500 NGN"
},
"Xiaomi 13": {
    "Screen Replacement": "165,000 NGN",
    "Glass Only Repair": "52,000 NGN",
    "Back Glass Replacement": "32,000 NGN",
    "Battery Replacement": "23,000 NGN",
    "Charging Port Repair": "17,000 NGN",
    "Wireless Charging Repair": "20,000 NGN",
    "Rear Camera Repair": "70,000 NGN",
    "Front Camera/FaceID Repair": "24,000 NGN",
    "Loudspeaker Repair": "14,000 NGN",
    "Microphone Repair": "11,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "12,000 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN",
    "Water Damage Recovery": "25,000 NGN",
    "Motherboard Micro-Soldering": "75,000 NGN",
    "Software/Bootloop Flashing": "12,000 NGN",
    "Data Recovery": "32,000 NGN",
    "Network/Carrier Unlocking": "20,000 NGN"
},
"Xiaomi 14": {
    "Screen Replacement": "210,000 NGN",
    "Glass Only Repair": "68,000 NGN",
    "Back Glass Replacement": "40,000 NGN",
    "Battery Replacement": "26,000 NGN",
    "Charging Port Repair": "20,000 NGN",
    "Wireless Charging Repair": "22,000 NGN",
    "Rear Camera Repair": "90,000 NGN",
    "Front Camera/FaceID Repair": "28,000 NGN",
    "Loudspeaker Repair": "16,000 NGN",
    "Microphone Repair": "13,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "14,000 NGN",
    "Fingerprint/Home Button Repair": "22,000 NGN",
    "Water Damage Recovery": "28,000 NGN",
    "Motherboard Micro-Soldering": "90,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "38,000 NGN",
    "Network/Carrier Unlocking": "24,000 NGN"
},
"Xiaomi 15": {
    "Screen Replacement": "260,000 NGN",
    "Glass Only Repair": "80,000 NGN",
    "Back Glass Replacement": "48,000 NGN",
    "Battery Replacement": "30,000 NGN",
    "Charging Port Repair": "24,000 NGN",
    "Wireless Charging Repair": "25,000 NGN",
    "Rear Camera Repair": "110,000 NGN",
    "Front Camera/FaceID Repair": "32,000 NGN",
    "Loudspeaker Repair": "18,000 NGN",
    "Microphone Repair": "15,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "16,000 NGN",
    "Fingerprint/Home Button Repair": "26,000 NGN",
    "Water Damage Recovery": "32,000 NGN",
    "Motherboard Micro-Soldering": "110,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "42,000 NGN",
    "Network/Carrier Unlocking": "26,000 NGN"
},
"Xiaomi 16": {
    "Screen Replacement": "N/A",
    "Glass Only Repair": "N/A",
    "Back Glass Replacement": "N/A",
    "Battery Replacement": "N/A",
    "Charging Port Repair": "N/A",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "N/A",
    "Front Camera/FaceID Repair": "N/A",
    "Loudspeaker Repair": "N/A",
    "Microphone Repair": "N/A",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "N/A",
    "Fingerprint/Home Button Repair": "N/A",
    "Water Damage Recovery": "N/A",
    "Motherboard Micro-Soldering": "N/A",
    "Software/Bootloop Flashing": "N/A",
    "Data Recovery": "N/A",
    "Network/Carrier Unlocking": "N/A"
},
"Xiaomi 11T": {
    "Screen Replacement": "65,000 NGN", // Mid flagship flat AMOLED panel matrix unit
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "14,000 NGN",
    "Battery Replacement": "15,000 NGN",
    "Charging Port Repair": "9,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "30,000 NGN",
    "Front Camera/FaceID Repair": "13,000 NGN",
    "Loudspeaker Repair": "7,500 NGN",
    "Microphone Repair": "6,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "7,500 NGN",
    "Fingerprint/Home Button Repair": "12,000 NGN",
    "Water Damage Recovery": "14,000 NGN",
    "Motherboard Micro-Soldering": "38,000 NGN",
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Xiaomi 11T Pro": {
    "Screen Replacement": "72,000 NGN",
    "Glass Only Repair": "22,000 NGN",
    "Back Glass Replacement": "15,000 NGN",
    "Battery Replacement": "16,500 NGN",
    "Charging Port Repair": "11,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "35,000 NGN",
    "Front Camera/FaceID Repair": "14,500 NGN",
    "Loudspeaker Repair": "8,000 NGN",
    "Microphone Repair": "7,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "8,000 NGN",
    "Fingerprint/Home Button Repair": "12,500 NGN",
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "42,000 NGN",
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "19,500 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Xiaomi 12T": {
    "Screen Replacement": "78,000 NGN",
    "Glass Only Repair": "24,000 NGN",
    "Back Glass Replacement": "16,000 NGN",
    "Battery Replacement": "17,000 NGN",
    "Charging Port Repair": "11,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "38,000 NGN",
    "Front Camera/FaceID Repair": "15,000 NGN",
    "Loudspeaker Repair": "8,500 NGN",
    "Microphone Repair": "7,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "8,500 NGN",
    "Fingerprint/Home Button Repair": "13,000 NGN",
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "45,000 NGN",
    "Software/Bootloop Flashing": "8,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "13,500 NGN"
},
"Xiaomi 12T Pro": {
    "Screen Replacement": "88,000 NGN",
    "Glass Only Repair": "26,000 NGN",
    "Back Glass Replacement": "18,000 NGN",
    "Battery Replacement": "18,500 NGN",
    "Charging Port Repair": "12,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "45,000 NGN",
    "Front Camera/FaceID Repair": "16,500 NGN",
    "Loudspeaker Repair": "9,000 NGN",
    "Microphone Repair": "8,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "9,000 NGN",
    "Fingerprint/Home Button Repair": "14,000 NGN",
    "Water Damage Recovery": "16,500 NGN",
    "Motherboard Micro-Soldering": "50,000 NGN",
    "Software/Bootloop Flashing": "8,500 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "14,000 NGN"
},
"Xiaomi 13T": {
    "Screen Replacement": "95,000 NGN",
    "Glass Only Repair": "28,000 NGN",
    "Back Glass Replacement": "20,000 NGN",
    "Battery Replacement": "19,500 NGN",
    "Charging Port Repair": "13,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "48,000 NGN",
    "Front Camera/FaceID Repair": "18,000 NGN",
    "Loudspeaker Repair": "9,500 NGN",
    "Microphone Repair": "8,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "9,500 NGN",
    "Fingerprint/Home Button Repair": "15,000 NGN",
    "Water Damage Recovery": "18,000 NGN",
    "Motherboard Micro-Soldering": "55,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "24,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Xiaomi 13T Pro": {
    "Screen Replacement": "110,000 NGN",
    "Glass Only Repair": "32,000 NGN",
    "Back Glass Replacement": "22,000 NGN",
    "Battery Replacement": "21,000 NGN",
    "Charging Port Repair": "14,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "55,000 NGN",
    "Front Camera/FaceID Repair": "20,000 NGN",
    "Loudspeaker Repair": "10,000 NGN",
    "Microphone Repair": "9,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "16,000 NGN",
    "Water Damage Recovery": "20,000 NGN",
    "Motherboard Micro-Soldering": "60,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "26,000 NGN",
    "Network/Carrier Unlocking": "16,500 NGN"
},
"Xiaomi 14T": {
    "Screen Replacement": "130,000 NGN",
    "Glass Only Repair": "38,000 NGN",
    "Back Glass Replacement": "25,000 NGN",
    "Battery Replacement": "23,000 NGN",
    "Charging Port Repair": "16,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "65,000 NGN",
    "Front Camera/FaceID Repair": "22,000 NGN",
    "Loudspeaker Repair": "11,500 NGN",
    "Microphone Repair": "10,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "11,000 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN",
    "Water Damage Recovery": "22,000 NGN",
    "Motherboard Micro-Soldering": "70,000 NGN",
    "Software/Bootloop Flashing": "12,000 NGN",
    "Data Recovery": "30,000 NGN",
    "Network/Carrier Unlocking": "18,000 NGN"
},
"Xiaomi 14T Pro": {
    "Screen Replacement": "150,000 NGN",
    "Glass Only Repair": "45,000 NGN",
    "Back Glass Replacement": "28,000 NGN",
    "Battery Replacement": "25,500 NGN",
    "Charging Port Repair": "18,000 NGN",
    "Wireless Charging Repair": "15,000 NGN",
    "Rear Camera Repair": "75,000 NGN",
    "Front Camera/FaceID Repair": "25,000 NGN",
    "Loudspeaker Repair": "13,000 NGN",
    "Microphone Repair": "11,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "12,500 NGN",
    "Fingerprint/Home Button Repair": "20,000 NGN",
    "Water Damage Recovery": "25,000 NGN",
    "Motherboard Micro-Soldering": "80,000 NGN",
    "Software/Bootloop Flashing": "12,000 NGN",
    "Data Recovery": "34,000 NGN",
    "Network/Carrier Unlocking": "20,000 NGN"
},
"Xiaomi 15T": {
    "Screen Replacement": "175,000 NGN",
    "Glass Only Repair": "52,000 NGN",
    "Back Glass Replacement": "32,000 NGN",
    "Battery Replacement": "28,000 NGN",
    "Charging Port Repair": "20,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "85,000 NGN",
    "Front Camera/FaceID Repair": "28,000 NGN",
    "Loudspeaker Repair": "15,000 NGN",
    "Microphone Repair": "13,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "14,500 NGN",
    "Fingerprint/Home Button Repair": "22,000 NGN",
    "Water Damage Recovery": "28,000 NGN",
    "Motherboard Micro-Soldering": "95,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "38,000 NGN",
    "Network/Carrier Unlocking": "22,000 NGN"
},
"Xiaomi 15T Pro": {
    "Screen Replacement": "200,000 NGN",
    "Glass Only Repair": "60,000 NGN",
    "Back Glass Replacement": "36,000 NGN",
    "Battery Replacement": "30,000 NGN",
    "Charging Port Repair": "22,500 NGN",
    "Wireless Charging Repair": "18,000 NGN",
    "Rear Camera Repair": "98,000 NGN",
    "Front Camera/FaceID Repair": "32,000 NGN",
    "Loudspeaker Repair": "16,500 NGN",
    "Microphone Repair": "14,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "16,000 NGN",
    "Fingerprint/Home Button Repair": "25,000 NGN",
    "Water Damage Recovery": "32,000 NGN",
    "Motherboard Micro-Soldering": "110,000 NGN",
    "Software/Bootloop Flashing": "15,000 NGN",
    "Data Recovery": "42,000 NGN",
    "Network/Carrier Unlocking": "25,000 NGN"
},
"Xiaomi 16T": {
    "Screen Replacement": "N/A",
    "Glass Only Repair": "N/A",
    "Back Glass Replacement": "N/A",
    "Battery Replacement": "N/A",
    "Charging Port Repair": "N/A",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "N/A",
    "Front Camera/FaceID Repair": "N/A",
    "Loudspeaker Repair": "N/A",
    "Microphone Repair": "N/A",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "N/A",
    "Fingerprint/Home Button Repair": "N/A",
    "Water Damage Recovery": "N/A",
    "Motherboard Micro-Soldering": "N/A",
    "Software/Bootloop Flashing": "N/A",
    "Data Recovery": "N/A",
    "Network/Carrier Unlocking": "N/A"
},
"Xiaomi 16T Pro": {
    "Screen Replacement": "N/A",
    "Glass Only Repair": "N/A",
    "Back Glass Replacement": "N/A",
    "Battery Replacement": "N/A",
    "Charging Port Repair": "N/A",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "N/A",
    "Front Camera/FaceID Repair": "N/A",
    "Loudspeaker Repair": "N/A",
    "Microphone Repair": "N/A",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "N/A",
    "Fingerprint/Home Button Repair": "N/A",
    "Water Damage Recovery": "N/A",
    "Motherboard Micro-Soldering": "N/A",
    "Software/Bootloop Flashing": "N/A",
    "Data Recovery": "N/A",
    "Network/Carrier Unlocking": "N/A"
},
"Mi 8 Lite": {
    "Screen Replacement": "32,000 NGN", // Entry mid-tier crisp responsive IPS module panels
    "Glass Only Repair": "10,000 NGN",
    "Back Glass Replacement": "8,000 NGN",
    "Battery Replacement": "12,000 NGN",
    "Charging Port Repair": "7,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "15,000 NGN",
    "Front Camera/FaceID Repair": "8,500 NGN",
    "Loudspeaker Repair": "6,000 NGN",
    "Microphone Repair": "5,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "9,500 NGN",
    "Water Damage Recovery": "11,000 NGN",
    "Motherboard Micro-Soldering": "28,000 NGN",
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "15,500 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Mi 9 Lite": {
    "Screen Replacement": "45,000 NGN",
    "Glass Only Repair": "14,000 NGN",
    "Back Glass Replacement": "9,500 NGN",
    "Battery Replacement": "12,500 NGN",
    "Charging Port Repair": "7,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "18,000 NGN",
    "Front Camera/FaceID Repair": "10,000 NGN",
    "Loudspeaker Repair": "6,500 NGN",
    "Microphone Repair": "5,500 NGN",
    "Headphone Jack Repair": "5,500 NGN",
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "11,000 NGN",
    "Water Damage Recovery": "11,000 NGN",
    "Motherboard Micro-Soldering": "30,000 NGN",
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "16,000 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},
"Mi 10 Lite": {
    "Screen Replacement": "52,000 NGN",
    "Glass Only Repair": "16,000 NGN",
    "Back Glass Replacement": "11,000 NGN",
    "Battery Replacement": "13,500 NGN",
    "Charging Port Repair": "8,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "22,000 NGN",
    "Front Camera/FaceID Repair": "11,500 NGN",
    "Loudspeaker Repair": "7,000 NGN",
    "Microphone Repair": "6,000 NGN",
    "Headphone Jack Repair": "6,000 NGN",
    "Power/Volume Button Repair": "6,500 NGN",
    "Fingerprint/Home Button Repair": "12,000 NGN",
    "Water Damage Recovery": "12,000 NGN",
    "Motherboard Micro-Soldering": "34,000 NGN",
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "17,000 NGN",
    "Network/Carrier Unlocking": "11,500 NGN"
},
"Mi 11 Lite": {
    "Screen Replacement": "58,000 NGN",
    "Glass Only Repair": "18,000 NGN",
    "Back Glass Replacement": "12,000 NGN",
    "Battery Replacement": "14,500 NGN",
    "Charging Port Repair": "8,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "25,000 NGN",
    "Front Camera/FaceID Repair": "12,500 NGN",
    "Loudspeaker Repair": "7,500 NGN",
    "Microphone Repair": "6,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "7,000 NGN",
    "Fingerprint/Home Button Repair": "12,500 NGN",
    "Water Damage Recovery": "13,000 NGN",
    "Motherboard Micro-Soldering": "36,000 NGN",
    "Software/Bootloop Flashing": "7,000 NGN",
    "Data Recovery": "18,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Xiaomi 12 Lite": {
    "Screen Replacement": "68,000 NGN",
    "Glass Only Repair": "22,000 NGN",
    "Back Glass Replacement": "14,000 NGN",
    "Battery Replacement": "15,500 NGN",
    "Charging Port Repair": "9,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "28,000 NGN",
    "Front Camera/FaceID Repair": "14,000 NGN",
    "Loudspeaker Repair": "8,000 NGN",
    "Microphone Repair": "7,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "7,500 NGN",
    "Fingerprint/Home Button Repair": "13,500 NGN",
    "Water Damage Recovery": "14,000 NGN",
    "Motherboard Micro-Soldering": "40,000 NGN",
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "13,500 NGN"
},
"Xiaomi 13 Lite": {
    "Screen Replacement": "78,000 NGN",
    "Glass Only Repair": "25,000 NGN",
    "Back Glass Replacement": "16,000 NGN",
    "Battery Replacement": "16,500 NGN",
    "Charging Port Repair": "10,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "32,000 NGN",
    "Front Camera/FaceID Repair": "16,000 NGN",
    "Loudspeaker Repair": "8,500 NGN",
    "Microphone Repair": "7,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "8,000 NGN",
    "Fingerprint/Home Button Repair": "14,500 NGN",
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "44,000 NGN",
    "Software/Bootloop Flashing": "8,500 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Xiaomi 14 Lite": {
    "Screen Replacement": "92,000 NGN",
    "Glass Only Repair": "30,000 NGN",
    "Back Glass Replacement": "18,500 NGN",
    "Battery Replacement": "18,000 NGN",
    "Charging Port Repair": "12,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "38,000 NGN",
    "Front Camera/FaceID Repair": "18,500 NGN",
    "Loudspeaker Repair": "9,500 NGN",
    "Microphone Repair": "8,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "9,000 NGN",
    "Fingerprint/Home Button Repair": "16,000 NGN",
    "Water Damage Recovery": "16,500 NGN",
    "Motherboard Micro-Soldering": "50,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "16,500 NGN"
},
"Xiaomi 15 Lite": {
    "Screen Replacement": "115,000 NGN",
    "Glass Only Repair": "36,000 NGN",
    "Back Glass Replacement": "22,000 NGN",
    "Battery Replacement": "20,000 NGN",
    "Charging Port Repair": "14,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "45,000 NGN",
    "Front Camera/FaceID Repair": "22,000 NGN",
    "Loudspeaker Repair": "11,000 NGN",
    "Microphone Repair": "9,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "10,500 NGN",
    "Fingerprint/Home Button Repair": "18,000 NGN",
    "Water Damage Recovery": "18,000 NGN",
    "Motherboard Micro-Soldering": "58,000 NGN",
    "Software/Bootloop Flashing": "12,000 NGN",
    "Data Recovery": "28,000 NGN",
    "Network/Carrier Unlocking": "18,500 NGN"
},
"Xiaomi Civi": {
    "Screen Replacement": "65,000 NGN", // Lifestyle mid-tier aesthetic curved OLED profile assembly
    "Glass Only Repair": "20,000 NGN",
    "Back Glass Replacement": "15,000 NGN",
    "Battery Replacement": "14,000 NGN",
    "Charging Port Repair": "9,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "28,000 NGN",
    "Front Camera/FaceID Repair": "16,000 NGN",
    "Loudspeaker Repair": "7,500 NGN",
    "Microphone Repair": "6,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "7,500 NGN",
    "Fingerprint/Home Button Repair": "13,000 NGN",
    "Water Damage Recovery": "14,000 NGN",
    "Motherboard Micro-Soldering": "38,000 NGN",
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Civi 1S": {
    "Screen Replacement": "68,000 NGN",
    "Glass Only Repair": "22,000 NGN",
    "Back Glass Replacement": "15,500 NGN",
    "Battery Replacement": "14,500 NGN",
    "Charging Port Repair": "9,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "30,000 NGN",
    "Front Camera/FaceID Repair": "17,000 NGN",
    "Loudspeaker Repair": "8,000 NGN",
    "Microphone Repair": "6,500 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "7,500 NGN",
    "Fingerprint/Home Button Repair": "13,500 NGN",
    "Water Damage Recovery": "14,000 NGN",
    "Motherboard Micro-Soldering": "40,000 NGN",
    "Software/Bootloop Flashing": "7,500 NGN",
    "Data Recovery": "20,000 NGN",
    "Network/Carrier Unlocking": "12,000 NGN"
},
"Civi 2": {
    "Screen Replacement": "76,000 NGN",
    "Glass Only Repair": "24,000 NGN",
    "Back Glass Replacement": "16,500 NGN",
    "Battery Replacement": "15,500 NGN",
    "Charging Port Repair": "10,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "34,000 NGN",
    "Front Camera/FaceID Repair": "20,000 NGN",
    "Loudspeaker Repair": "8,500 NGN",
    "Microphone Repair": "7,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "8,000 NGN",
    "Fingerprint/Home Button Repair": "14,000 NGN",
    "Water Damage Recovery": "15,000 NGN",
    "Motherboard Micro-Soldering": "45,000 NGN",
    "Software/Bootloop Flashing": "8,500 NGN",
    "Data Recovery": "22,000 NGN",
    "Network/Carrier Unlocking": "14,000 NGN"
},
"Civi 3": {
    "Screen Replacement": "88,000 NGN",
    "Glass Only Repair": "28,000 NGN",
    "Back Glass Replacement": "18,000 NGN",
    "Battery Replacement": "17,000 NGN",
    "Charging Port Repair": "11,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "38,000 NGN",
    "Front Camera/FaceID Repair": "24,000 NGN",
    "Loudspeaker Repair": "9,000 NGN",
    "Microphone Repair": "8,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "9,000 NGN",
    "Fingerprint/Home Button Repair": "15,000 NGN",
    "Water Damage Recovery": "16,500 NGN",
    "Motherboard Micro-Soldering": "50,000 NGN",
    "Software/Bootloop Flashing": "10,000 NGN",
    "Data Recovery": "25,000 NGN",
    "Network/Carrier Unlocking": "15,000 NGN"
},
"Civi 4 Pro": {
    "Screen Replacement": "115,000 NGN",
    "Glass Only Repair": "36,000 NGN",
    "Back Glass Replacement": "22,000 NGN",
    "Battery Replacement": "19,500 NGN",
    "Charging Port Repair": "13,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "48,000 NGN",
    "Front Camera/FaceID Repair": "28,000 NGN",
    "Loudspeaker Repair": "10,500 NGN",
    "Microphone Repair": "9,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "10,000 NGN",
    "Fingerprint/Home Button Repair": "17,000 NGN",
    "Water Damage Recovery": "18,000 NGN",
    "Motherboard Micro-Soldering": "60,000 NGN",
    "Software/Bootloop Flashing": "12,000 NGN",
    "Data Recovery": "28,000 NGN",
    "Network/Carrier Unlocking": "16,500 NGN"
},
"Civi 5 Pro": {
    "Screen Replacement": "140,000 NGN",
    "Glass Only Repair": "44,000 NGN",
    "Back Glass Replacement": "26,000 NGN",
    "Battery Replacement": "22,000 NGN",
    "Charging Port Repair": "15,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "58,000 NGN",
    "Front Camera/FaceID Repair": "32,000 NGN",
    "Loudspeaker Repair": "12,000 NGN",
    "Microphone Repair": "10,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "11,500 NGN",
    "Fingerprint/Home Button Repair": "19,000 NGN",
    "Water Damage Recovery": "22,000 NGN",
    "Motherboard Micro-Soldering": "72,000 NGN",
    "Software/Bootloop Flashing": "12,000 NGN",
    "Data Recovery": "32,000 NGN",
    "Network/Carrier Unlocking": "18,500 NGN"
},
"Mi A1": {
    "Screen Replacement": "24,000 NGN", // Legacy baseline Android One standard LCD frame assembly
    "Glass Only Repair": "7,500 NGN",
    "Back Glass Replacement": "N/A",
    "Battery Replacement": "11,000 NGN",
    "Charging Port Repair": "6,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "12,500 NGN",
    "Front Camera/FaceID Repair": "6,500 NGN",
    "Loudspeaker Repair": "5,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "5,000 NGN",
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "8,000 NGN",
    "Water Damage Recovery": "9,500 NGN",
    "Motherboard Micro-Soldering": "24,000 NGN",
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "7,500 NGN"
},
"Mi A2": {
    "Screen Replacement": "26,000 NGN",
    "Glass Only Repair": "8,000 NGN",
    "Back Glass Replacement": "N/A",
    "Battery Replacement": "11,500 NGN",
    "Charging Port Repair": "7,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "14,000 NGN",
    "Front Camera/FaceID Repair": "7,000 NGN",
    "Loudspeaker Repair": "5,500 NGN",
    "Microphone Repair": "5,000 NGN",
    "Headphone Jack Repair": "N/A",
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "8,500 NGN",
    "Water Damage Recovery": "10,000 NGN",
    "Motherboard Micro-Soldering": "26,000 NGN",
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Mi A2 Lite": {
    "Screen Replacement": "25,000 NGN",
    "Glass Only Repair": "7,500 NGN",
    "Back Glass Replacement": "N/A",
    "Battery Replacement": "12,000 NGN",
    "Charging Port Repair": "6,500 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "13,000 NGN",
    "Front Camera/FaceID Repair": "6,500 NGN",
    "Loudspeaker Repair": "5,500 NGN",
    "Microphone Repair": "4,500 NGN",
    "Headphone Jack Repair": "5,000 NGN",
    "Power/Volume Button Repair": "5,500 NGN",
    "Fingerprint/Home Button Repair": "8,500 NGN",
    "Water Damage Recovery": "9,500 NGN",
    "Motherboard Micro-Soldering": "24,000 NGN",
    "Software/Bootloop Flashing": "5,500 NGN",
    "Data Recovery": "14,000 NGN",
    "Network/Carrier Unlocking": "8,000 NGN"
},
"Mi A3": {
    "Screen Replacement": "36,000 NGN", // Lower resolution AMOLED panel replacement unit
    "Glass Only Repair": "11,000 NGN",
    "Back Glass Replacement": "9,000 NGN",
    "Battery Replacement": "13,000 NGN",
    "Charging Port Repair": "8,000 NGN",
    "Wireless Charging Repair": "N/A",
    "Rear Camera Repair": "18,000 NGN",
    "Front Camera/FaceID Repair": "8,500 NGN",
    "Loudspeaker Repair": "6,500 NGN",
    "Microphone Repair": "5,500 NGN",
    "Headphone Jack Repair": "5,500 NGN",
    "Power/Volume Button Repair": "6,000 NGN",
    "Fingerprint/Home Button Repair": "11,000 NGN",
    "Water Damage Recovery": "11,000 NGN",
    "Motherboard Micro-Soldering": "30,000 NGN",
    "Software/Bootloop Flashing": "6,500 NGN",
    "Data Recovery": "15,500 NGN",
    "Network/Carrier Unlocking": "10,000 NGN"
},

};

estimateBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Stop any accidental form submission/refresh
    
    const selectedDevice = typeDevice.value;
    const selectedIssue = repairIssue.value;
    
    // The magic line: it safely drills down to find the exact price match
    const finalPrice = priceDatabase[selectedDevice]?.[selectedIssue] || "Contact for Quote";
    
    // Display it right inside your bottom "Estimated price" input field!
    estimateInput.value = finalPrice;
});

submitButton.addEventListener('submit', (event) => {
    event.preventDefault()

    const fullNameInput = fullName.value;
    const dateInput = date.value;
    const timeInput = time.value;
    const serviceInput = service.value;
    const deviceTypeInput = deviceType.value;
    const bookingDetailInput = bookingDetail.value;
    
    const message = `Hello SoluTech, I would like to book a repair appointment.\n` +
                  `*Name:* ${fullNameInput}` +
                  `\n` +
                  `*Device:* ${deviceTypeInput}` +
                  `\n` +
                  `*Service:* ${serviceInput}` +
                  `\n` +
                  `*Date:* ${dateInput}` +
                  `\n` +
                  `*Time:* ${timeInput}` +
                  `\n` +
                  `*Details:* ${bookingDetailInput}`;

                  const whatsappURL = `https://wa.me/2349134729702?text=${encodeURIComponent(message)}`;
                  window.open(whatsappURL, '_blank');               
});

    sun.forEach((sun) => {
    sun.addEventListener('click', () => {
    sun.classList.toggle('fa-sun');
    sun.classList.toggle('fa-moon');
    body.classList.toggle('bg-black');
    body.classList.toggle('bg-white');
    sideBar.classList.toggle('text-black');
    sideBar.classList.toggle('text-white');
    mainSpot.forEach((spot) => {
        spot.classList.toggle('text-white');
        spot.classList.toggle('text-black');
    });
    Border.forEach((border) => {
        border.classList.toggle('border-gray-600');
        border.classList.toggle('border-gray-300');
    });
    navBar.classList.toggle('bg-black');
    navBar.classList.toggle('bg-white');
    navBar.classList.toggle('text-white')
    });
});

bars.addEventListener('click', () => 
{
    bars.classList.toggle('fa-xmark');
    bars.classList.toggle('fa-bars');
    sideBar.classList.toggle('h-0');
    sideBar.classList.toggle('h-auto');
    sideBar.classList.toggle('p-8');
    sideBar.classList.toggle('border-white/20');
    sideBar.classList.toggle('bg-white/10');
    sideBar.classList.toggle('border');
});
