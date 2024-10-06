import { global } from "@/constants/Globals";
import { textStyles } from "@/constants/Typography";
import { ArrowLeft } from "@lnanhkhoa/react-native-iconly";
import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FetchDialog from "@/components/ui/dialog/fetch-dialog";
import RegisterSvg from "./register-dialog.svg";
import AvatarUpload from "@/components/ui/upload/avatar-upload";
import {
  FormDate,
  FormInput,
  FormSelect,
} from "@/components/ui/input/form-input";
import { Dayjs } from "dayjs";

type Props = {};

const RegisterStepOne = (props: Props) => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [fullName, setFullName] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);
  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const [birthday, setBirthday] = useState<Dayjs | null>(null);
  const [adress, setAdress] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const { dark } = useTheme();

  const styles = StyleSheet.create({
    formContainer: {
      padding: 20,
      paddingTop: 16,
      paddingBottom: 16,
      flexDirection: "column",
      gap: 24,
      display: "flex",
      flex: 1,
      width: "100%",
    },
    button: {
      padding: 10,
      paddingLeft: 0,
    },
    divider: {
      flexDirection: "row",
      alignItems: "center",
    },
    dividerLine: {
      flex: 1,
      height: 1,
    },
    socialLoginContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 16,
      width: "100%",
    },
    socialLoginButton: {
      flex: 1,
      height: 60,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 9999,
    },
    actionButton: {
      width: "100%",
      height: 65,
      borderRadius: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    nextShadow: {
      shadowColor: "rgba(23, 206, 146, 1)", // Gölgenin rengi (alpha 1 olacak şekilde ayarladım)
      shadowOffset: {
        width: 4, // X eksenindeki kayma
        height: 8, // Y eksenindeki kayma
      },
      shadowOpacity: 0.25, // Renk opaklığı (gölgenin transparanlık seviyesi)
      shadowRadius: 12, // Gölgenin yayılma yarıçapı
      elevation: 12, // Android için ek olarak elevation ayarı
    },
  });

  const handleAvatarChange = (value: string) => {
    console.log(value);
    setAvatar(value);
  };

  const formatDate = (initialDate: Date) => {
    const date = new Date(initialDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleStepOneContinue = async () => {
    console.log({
      avatar,
      fullName,
      phone,
      gender,
      birthday: birthday?.locale("vi").format("DD/MM/YYYY"),
      adress,
    });

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setSuccess(true);
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={-200}
      style={global.container}
    >
      {loading && (
        <FetchDialog
          variant="register"
          promise={loading}
          success={success}
          Illustration={<RegisterSvg width={180} height={180} />}
        />
      )}

      <ScrollView
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
      >
        <View style={styles.formContainer}>
          <TouchableOpacity activeOpacity={0.75} style={styles.button}>
            <ArrowLeft
              stroke="regular"
              primaryColor={dark ? "#fff" : "#212121"}
              size={28}
            />
          </TouchableOpacity>

          <View style={{ gap: 16, display: "flex", flexDirection: "column" }}>
            <Text
              className="text-[#212121] dark:text-white"
              style={textStyles.h3Bold}
            >
              Complete your profile 📋
            </Text>
            <Text
              className="text-[#212121] dark:text-white"
              style={textStyles.bodyXlargeRegular}
            >
              Please enter your profile. Don't worry, only you can see your
              personal data. No one else will be able to see it. Or you can skip
              it for now.
            </Text>
          </View>

          <View
            style={{
              height: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AvatarUpload
              uploadable
              size={120}
              name={
                fullName === null || fullName === "" ? "John Doe" : fullName
              }
              onChange={handleAvatarChange}
              value={avatar}
            />
          </View>

          <FormInput
            label="Full Name"
            placeholder="John Doe"
            type="text"
            value={fullName ?? ""}
            onChange={setFullName}
          />

          <FormInput
            label="Phone"
            placeholder="0900000000"
            type="number"
            value={phone ?? ""}
            onChange={setPhone}
          />

          <FormSelect
            label="Gender"
            placeholder="Male"
            options={["Male", "Female"]}
            value={gender ?? ""}
            onChange={(value: string) =>
              setGender(value as "male" | "female" | null)
            }
          />

          <FormDate
            label="Birthday"
            placeholder="2000-01-01"
            value={formatDate(birthday ?? new Date())}
            onChange={(value: Dayjs) => setBirthday(value)}
          />

          <FormInput
            label="Address"
            placeholder="1234 Main St, Anytown, USA"
            type="text"
            value={adress ?? ""}
            onChange={setAdress}
          />
        </View>

        <View
          style={{
            width: Dimensions.get("window").width,
            padding: 24,
            paddingBottom: 36,
            display: "flex",
          }}
        >
          <TouchableOpacity
            onPress={handleStepOneContinue}
            disabled={!fullName || !phone || !gender || !birthday || !adress}
            activeOpacity={0.75}
            className="bg-[#17CE92]"
            style={[
              styles.actionButton,
              !!fullName && !!phone && !!gender && !!birthday && !!adress
                ? styles.nextShadow
                : { opacity: 0.5 },
            ]}
          >
            <Text className="text-white" style={textStyles.bodyXlargeBold}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterStepOne;
