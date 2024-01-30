const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
    user: "josh@digitalaccord.cloud",
    // Password optional, prompted if none given
    password: "Q}n(sr-T@X70",
    host: "ftp.digitalaccord.cloud",
    port: 21,
    localRoot: __dirname + "/build",
    remoteRoot: "/home/digitalaccordclo/public_html/da-2024/",
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["*"],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: false,
    // use sftp or ftp
    sftp: false,
};

async function connectonly()
{
    ftpDeploy
        .deploy(config)
        .then((res) => console.log("finished:", res))
        .catch((err) => console.log(err));
}
// Run the deploy function
//deploy();
connectonly();
