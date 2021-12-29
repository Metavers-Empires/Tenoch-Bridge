const MaticPOSClient = require (`@maticnetwork/maticjs`).MaticPOSClient;

const provider = window.ether;

const maticPOSClient = new MaticPOSClient ( {
    network: "testner",
    version: "mumbai",
    parentProvider: <goerli-provider>,
    maticProvider: <mumbai-provider>
});