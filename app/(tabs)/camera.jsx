// import { View, Text, Image } from "react-native";
// import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import icons from "../../constants/icons";
import CameraBox from "../../components/CameraBox";
// import Gallery from "../../components/Gallery";

import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import {
  Alert,
  Image,
  Text,
  Pressable,
  View,
  // useWindowDimensions,
  StyleSheet,
} from "react-native";
// import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

// import NetInfo from "@react-native-community/netinfo";
import { StatusBar } from "expo-status-bar";
import * as DocumentPicker from "expo-document-picker";
// import { Link } from "expo-router";
import { useIsFocused } from "@react-navigation/native";

import Result from "../../components/result";
import { getResult } from "../../api/api";
import { AppColors } from "../../components/constColors";
import axios from "axios";
// import images from "../../constants/images";

const Detect = () => {
  const fetchImages = async (plantname) => {
    try {
      const images = await axios.get(
        `https://hono_test.yenekoo.workers.dev/geberekoo/img?plant=${plantname}`
      );
      return images.data;
    } catch (err) {
      console.log("err", err);
    }
  };

  // const [tourch, setTourch] = useState(false);
  const [camera, setCamera] = useState(null);
  const isFocused = useIsFocused();
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [active, setActive] = useState(0);
  const [labletext, setLableText] = useState(1);
  // const [showpopup, setShowPopup] = useState(false);
  const [showresult, setShowResult] = useState(false);
  const [imgurl, setImgUrl] = useState(null);
  const [localimgurl, setLocalImgUrl] = useState(null);
  // const [offline, setOffline] = useState(false);
  const [flash, setFlash] = useState(false);
  const [w, setWidth] = useState(0);
  const [h, setHeight] = useState(0);
  const [aiResult, setAIResult] = useState(null);
  // const [scrolledWidth, setScrolledWidth] = useState(0);

  const horizonal_lists1 =
    "botanist, Gardener, Ecologist, Horticulturist, Adventurer";
  // const horizonal_lists2 = "coffee, wheat, corn, bean, teff";

  const [maxd, setMaxD] = useState("3");
  const [st, setST] = useState(".95");
  const [planttype, setplantType] = useState(horizonal_lists1);
  const [domain, setDomain] = useState(
    "https://api-geberekoo.onrender.com/predict"
  );
  const [webdomain, setWebDomain] = useState(
    "https://api-geberekoo.onrender.com/docs#/default/upload_image_upload_image_post"
  );

  // const windowHeight = useWindowDimensions().height;

  function toggleTorch() {
    setFlash(!flash);
  }

  const detecttype = labletext == 1 ? "lable" : "text";

  const domain_w_query =
    domain +
    `?maxd=${maxd}&st=${st}&plant=${
      planttype.split(", ")[active]
    }&detecttype=${detecttype}&w=${w}&h=${h}`;

  const SendImg = async (imgurl) => {
    const formData = new FormData();
    formData.append("file", {
      uri: imgurl,
      name: "photo.png",
      type: "image/png",
    });
    const res = await getResult(domain_w_query, formData);

    console.log(res.data.message);
    if (res.data) {
      setImgUrl(imgurl);
      const aires = JSON.parse(res.data);
      const plantname = aires?.common_name ? aires?.common_name : "plant";

      if (plantname) {
        axios
          .get(
            `https://api-geberekoo.onrender.com/plant/img?plant=${plantname}`
          )
          .then((res) => {
            // setAIResult({ ...aires, res });
            console.log("lll res =====>>>>>> ?? ?????? ???", res);
          })
          .catch((err) => {
            console.log("err", err);
          });
      }
    } else {
      Alert.alert("sth went wronge try again");
    }
  };

  async function takePhoto() {
    if (camera) {
      setImgUrl(null);
      setShowResult(true);
      const data = await camera.takePictureAsync(null);
      if (data) {
        setHeight(data.height);
        setWidth(data.width);
        setLocalImgUrl(data.uri);
        SendImg(data.uri);
        // console.log(data);
      }
    }
  }

  const selectImg = async () => {
    DocumentPicker.getDocumentAsync({ type: "image/*" })
      .then((res) => {
        if (res.assets[0].uri) {
          setImgUrl(null);
          setShowResult(true);
          SendImg(res.assets[0].uri);
        }
      })
      .catch((err) => console.log(err));
  };

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View
        style={styles.container}
        className="felx h-full justify-center items-center"
      >
        <Text
          style={{ textAlign: "center" }}
          className="text-[#2B2A26] pb-[20px]"
        >
          GebereKoo needs access to the camera
        </Text>
        <Pressable
          onPress={requestPermission}
          className="flex justify-center items-center h-[7vh] w-1/2 rounded-[10px] border-2 border-[#44807a]"
          style={{ backgroundColor: AppColors.secondary }}
        >
          <Text style={{ color: AppColors.main }}>Grant Permission </Text>
        </Pressable>
        <StatusBar hidden={true} />
      </View>
    );
  }
  return (
    <SafeAreaView className="h-full">
      <View className="h-full flex-col items-center justify-end gap-2">
        <View className="min-h-[70%] min-w-[90%] rounded-2xl overflow-hidden">
          {isFocused && (
            <CameraBox
              cref={(ref) => setCamera(ref)}
              type={type}
              // flashMode={flash}
              tourchBool={flash}
            />
          )}
        </View>

        <View className="flex-row justify-around items-center px-4 w-[80%] py-4 rounded-2xl">
          <View className="bg-[#DDDDDD] p-3 rounded-3xl">
            <Pressable onPress={() => selectImg()}>
              <Image source={icons.gallery} className="w-8 h-8" />
            </Pressable>
          </View>
          <View className="border border-[#77B0AA] p-2 rounded-full">
            <Pressable onPress={() => takePhoto()}>
              <View className="bg-[#135D66] p-4 rounded-full">
                <Image source={icons.scanSecond} className="w-12 h-12" />
              </View>
            </Pressable>
          </View>
          <View className="bg-[#DDDDDD] p-3 rounded-3xl">
            <Pressable onPress={() => toggleTorch()}>
              <Image source={icons.tourch} className="w-8 h-8" />
            </Pressable>
          </View>
        </View>
      </View>
      {showresult && (
        <SafeAreaView className="absolute top-[0%] w-full">
          <Result
            data={aiResult}
            imgurl={imgurl}
            onClose={() => setShowResult(!showresult)}
            webdomain={webdomain}
          />
        </SafeAreaView>
      )}
      {/* <StatusBar hidden={true} /> */}
    </SafeAreaView>
  );
};

export default Detect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
