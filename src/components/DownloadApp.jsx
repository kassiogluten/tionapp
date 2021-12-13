import {
  Wrap,
  Image,
} from "@chakra-ui/react";


export function DownloadApp(props) {
  return (
    <Wrap w={'full'} py={{base:4, md:props.py || 0}} flex={1} justify={props.align || "center"} alignSelf="center" spacing={4}>
      <a target="_blank" rel="noreferrer" href="https://apps.apple.com/br/app/tion-passageiro/id1592219283?l=pt&ls=1&mt=8">
        <Image
          width={174}
          height={55}
          src="/AppleStore.png"
          alt="Download para iOS na Apple Store"
        />
      </a>
      <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=br.com.tion.passenger.drivermachine">
        <Image
          width={174}
          height={55}
          src="/AndroidStore.png"
          alt="Download para Android na Play Store"
        />
      </a>
    </Wrap>
  );
}
