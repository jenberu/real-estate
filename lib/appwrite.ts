import { Avatars, Client, Account, OAuthProvider } from "react-native-appwrite";
import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";
export const config = {
  platform: "com.dev.restate",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
};

export const client = new Client();

client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform!);

export const avater = new Avatars(client);
export const account = new Account(client);

export async function login() {
  try {
    const redirecturl = Linking.createURL("/");
    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirecturl
    );
    if (!response) throw new Error("Failed to Login");
    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirecturl
    );
    if (browserResult.type !== "success") throw new Error("Failed to Login");
    const url = new URL(browserResult.url);

    const secret = url.searchParams.get("secret")?.toString();
    const userId = url.searchParams.get("userId")?.toString();
    if (!secret || !userId) throw new Error("Failed to Login");
    const session = await account.createSession(userId, secret);
    if (!session) throw new Error("Failed to Login");
    return true;
  } catch (error) {
    console.error("Error login:", error);
    return false;
  }
}

export async function logout() {
  try {
    await account.deleteSession("current");
    return true;
  } catch (error) {
    console.error("Error logout:", error);
    return false;
  }
}

export async function getUser() {
  try {
    const response = await account.get();
    if (response.$id) {
      const userAvatar = avater.getInitials(response.name);
      return {
        ...response,
        avater: userAvatar.toString(),
      };
    }
  } catch (error) {
    console.error("Error getUser:", error);
    return null;
  }
}
