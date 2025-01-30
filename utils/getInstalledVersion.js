import Constants from "expo-constants";
import { Alert } from "react-native";
import axios from "axios";

// Get the installed version from the device
const getInstalledVersion = () => {
  let dataVersion;

  // Check if using EAS or classic manifest
  if (Constants.manifest2) {
    dataVersion = Constants.manifest2.extra?.expoClient?.version;
    console.log({
      ccc: dataVersion,
    });
  } else if (Constants.manifest) {
    dataVersion = Constants.manifest.version; // Classic workflow
  } else {
    dataVersion = "unknown"; // Handle missing data gracefully
  }

  console.log({ kkkk: dataVersion });
  // return dataVersion;
};

export const checkForUpdates = async (platform) => {
  try {
    // console.log(platform);
    const installedVersion = await getInstalledVersion(); // Get the installed version
    // const versionUrl = platform === 'android'
    //   ? 'http://yourbackend.com/api/version/latest-version/android'
    //   : 'http://yourbackend.com/api/version/latest-version/ios'; // Choose platform-specific URL
    // const response = await axios.get(versionUrl); // Fetch the latest version from the backend
    // const latestVersion = response.data.latestVersion;
    // // Compare versions
    // if (installedVersion !== latestVersion) {
    //   Alert(A new version is available for ${platform === 'android' ? 'Android' : 'iOS'}! Please update the app.);
    //   // You can display a modal or redirect to the App Store/Play Store
    // }
  } catch (error) {
    console.error("Error checking for updates:", error);
  }
};
