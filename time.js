const { ethers } = require("ethers");

async function timeStamp() {
  const providerUrl =
    "https://polygon-mumbai.g.alchemy.com/v2/Hmtbotyp9LZNFw0VE-zFsdk4MT_d8prM";
  const provider = new ethers.JsonRpcProvider(providerUrl);
  const block = await provider.getBlock(36835270);
  const timestamp = block.timestamp;
  const blockTimestamp = timestamp;

  const timestampInMilliseconds = blockTimestamp * 1000;

  const date = new Date(timestampInMilliseconds);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;

  console.log(formattedDate);
}

timeStamp();
