import React from "react"
import { useState,useEffect } from "react"
import Scrollable from "~/components/Scrollable"
import { Box, TextArea, Text, Button, Image, Flex, Mask, TapArea, WashAnimated } from "gestalt"
import { motion } from "framer-motion"

export default function () {
  const [input, setInput] = useState("")
  const [hover, setHover] = useState("dark")

  useEffect(()=>{
    console.log(hover);
  },[hover])
  const selcetionsData = [
    {
      src: "https://d110hwq6svvzha.cloudfront.net/geru-by-me/uploads/Kpn_O23i8IS44861fc6COdownload%20(6).png",
      alt: "Horse-riding astronaut digital art",
      text: "Horse-riding astronaut digital art",
    },
    {
      src: "https://d110hwq6svvzha.cloudfront.net/dalle/generated/mt9nY6av0WjrNyV3sYF_Q.png",
      alt: "Modern mongolian man Depiction style of Lee Jeffries stylesscene is illuminated by Studio",
      text: "Modern mongolian man Depiction style of Lee Jeffries stylesscene is illuminated by Studio",
    },
    {
      src: "https://d110hwq6svvzha.cloudfront.net/dalle/generated/FWcsOvcMokxVsVDGg2ZLv.png",
      alt: "highly detailed mongolian woman with davinci style",
      text: "highly detailed mongolian woman with davinci style",
    },
    {
      src: "https://d110hwq6svvzha.cloudfront.net/dalle/generated/-XwbDiU7RxsVIFQRKjPWh.png",
      alt: "A serene lakeside scene with a solitary cabin nestled amidst tall pine trees, its reflection mirrored in the crystal-clear water.",
      text: "A serene lakeside scene with a solitary cabin nestled amidst tall pine trees, its reflection mirrored in the crystal-clear water.",
    },
  
  ]

  const renderBox = (item, index) => (
    <motion.div 
        key={index}
        style={{
            background: "#242424",
            cursor: "pointer"
        }}
        whileHover={{
            background: "#171717",
            borderRadius: 10,
          
        }}
    >
        <TapArea tapStyle="compress" onTap={()=>setInput(item.text)}>
        <Box key={index} display="flex" height={90}  padding={1} marginTop={2} onMouseEnter={()=>setHover("light")} onMouseLeave={()=>setHover("dark")}>
        {/*  */}
        {/* <WashAnimated> */}
            <Box column={4}  >
            <Mask rounding={3} width="100%" height="100%">
                <Image alt={item.alt} fit="cover" naturalHeight={1} naturalWidth={1} src={item.src} />
            </Mask>
            </Box>
            <Box width="100%" alignItems="center" display="flex" column={8} paddingX={3}>
            
            <Text size="300" lineClamp={2} color="light">
                {item.text}
            </Text>
            </Box>{" "}
        {/* </WashAnimated> */}
        {/* </TapArea> */}
        </Box>
        </TapArea>
    </motion.div>
  )

  return (
    <>
      <Box height="100%" width="100%" display="flex" paddingX={5} paddingY={5}>
        <Scrollable>
          <Text weight="bold" color="light" size="500">
            DALL·E
          </Text>
          <Box height={10} />
          <Text size="200" weight="bold" color="light">
            Let me turn your imagination into imagery.
          </Text>
          <Box height={10} />
          <TextArea
            id="headerExample"
            onChange={({ value }) => setInput(value)}
            placeholder="Юу зуруулмаар байна? Бүгдийг нь бичээрэй 🙌"
            value={input}
          />
          <Box height={6} />
          <Button color="red" size="lg" text="Generate" fullWidth />

          <Box height={12} />
          <Text size="300" color="light" weight="bold">
            Try an example made with DALL·E
          </Text>
          <Box width="100%" />
          <Box height={12} />
          {selcetionsData.map((item, index) => renderBox(item, index))}
        </Scrollable>
      </Box>
    </>
  )
}
