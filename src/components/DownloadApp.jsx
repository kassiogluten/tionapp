import {
  Wrap,
  Image,
} from "@chakra-ui/react";


export function DownloadApp(props) {
  return (
    <Wrap w={'full'} py={{base:4, md:props.py || 0}} flex={1} justify={props.align || "center"} alignSelf="center" spacing={4}>
      <Image
        width={174}
        height={55}
        src="/AppleStore.png"
        alt="Download para iOS na Apple Store"
      />
      <Image
        width={174}
        height={55}
        src="/AndroidStore.png"
        alt="Download para Android na Play Store"
      />
    </Wrap>
  );
}
