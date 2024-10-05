import { EditSquare } from "@lnanhkhoa/react-native-iconly";
import React, { useEffect, useState } from "react";
import { Platform, Pressable, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import UserAvatar from "react-native-user-avatar";

type Props = {
  size: number;
  name: string;
  uploadable?: boolean;
};

const AvatarUpload = (props: Props) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const libraryStatus =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (libraryStatus.status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }

        const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
        if (cameraStatus.status !== "granted") {
          alert("Sorry, we need camera permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
      <Pressable onPress={pickImage}>
        <View
          style={{
            width: props.size,
            height: props.size,
            position: "relative",
          }}
        >
          <UserAvatar size={props.size} name={props.name} />
          {props.uploadable && (
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 30,
                height: 30,
                borderRadius: 4,
              }}
            >
              <EditSquare
                stroke="regular"
                set="bold"
                primaryColor="#17CE92"
                size={28}
              />
            </View>
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default AvatarUpload;
