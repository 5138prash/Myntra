const products = [
  {
      id: 100,
      brand: "H&M",
      name: "Loose Fit Zip-Through Teddy Top",
      rating: "4.3",
      reviews: 221,
      wishList: false,
      qty: 1,
      price: "2299",
      MRP: "3490",
      discount: 14,
      category: "mens", // Mens, Womens, Shoes, Accessories
      imgURIs: [
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26145996/2023/11/30/9d34b005-90be-4cc0-9f8d-bd0de9f8a2dc1701349057061LooseFitZip-throughteddytop1.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26145996/2023/11/30/09594df2-8b76-4968-bec4-f941b5b41e8b1701349057056LooseFitZip-throughteddytop2.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26145996/2023/11/30/ba50e7c2-52ff-426c-a3f3-0ab2f62535471701349057050LooseFitZip-throughteddytop3.jpg"
      ]
  },
  {
      id: 101,
      brand: "H&M",
      name: "Relaxed Fit Hoodie",
      rating: "4.4",
      reviews: 649,
      wishList: false,
      qty: 1,
      price: "1499",
      MRP: "2099",
      discount: 28,
      category: "mens", // Mens, Womens, Shoes, Accessories
      imgURIs: [
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25745276/2023/11/3/b8b87138-3fe0-40f2-a8bc-a71f2649c1231699006740525RelaxedFitHoodie1.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25745276/2023/11/3/7146d21b-7840-434f-936a-b46b0155b7231699006740542RelaxedFitHoodie2.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25745276/2023/11/3/daa7c924-4ec7-4b59-b89b-76d706558b971699006740547RelaxedFitHoodie3.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25745276/2023/11/3/0db87e27-738f-4524-9b05-3d43f65c24b51699006740531RelaxedFitHoodie4.jpg"
      ]
  },
  {
      id: 102,
      brand: "Roadster",
      name: "Men Blue Solid Sweatshirt",
      rating: "4.2",
      reviews: 1100,
      wishList: false,
      qty: 1,
      price: "584",
      MRP: "1499",
      discount: 61,
      category: "mens", // Mens, Womens, Shoes, Accessories
      imgURIs: [
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11955510/2020/10/15/42a0a833-7d0b-4f03-b544-6eace204f4131602760152021-Roadster-Men-Sweatshirts-1441602760150480-1.jpg", "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11955510/2020/10/15/7515d82e-9645-4e49-988f-5ce8caf91f9d1602760151969-Roadster-Men-Sweatshirts-1441602760150480-2.jpg", "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11955510/2020/10/15/8a62f420-ff9d-407c-ba5f-0436b82fe5471602760151911-Roadster-Men-Sweatshirts-1441602760150480-3.jpg", "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11955510/2020/10/15/72a60db7-b03c-46e3-802c-e508d94e5bdb1602760151860-Roadster-Men-Sweatshirts-1441602760150480-4.jpg"]
  },
  {
      id: 103,
      brand: "Roadster",
      name: "Men Mauve Solid Hooded Sweatshirt",
      rating: "4.3",
      reviews: 1400,
      wishList: false,
      qty: 1,
      price: "623",
      MRP: "1299",
      discount: 52,
      category: "mens", // Mens, Womens, Shoes, Accessories
      imgURIs: [
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11959200/2020/12/3/0cd98bae-70cd-45e0-8947-3db00cf22e481606988695239-Roadster-Men-Sweatshirts-2041606988693450-1.jpg", "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11959200/2020/12/3/762dad39-93de-4c97-81af-1c5780387f0c1606988695186-Roadster-Men-Sweatshirts-2041606988693450-2.jpg", "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11959200/2020/12/3/ab9cb400-d3e7-4673-ae0e-684e63de6d571606988695126-Roadster-Men-Sweatshirts-2041606988693450-3.jpg", "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/11959200/2020/12/3/ee16a657-f87b-4e59-b05f-0b14805810071606988695061-Roadster-Men-Sweatshirts-2041606988693450-4.jpg"]
  },
  {
      id: 104,
      brand: "anayna",
      name: "Ethnic Motifs Printed Kurta",
      rating: "4.2",
      reviews: 16902,
      wishList: false,
      qty: 1,
      price: "665",
      MRP: "1799",
      discount: 63,
      category: "womens", // Mens, Womens, Shoes, Accessories
      imgURIs: [
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22143838/2023/10/4/fc5eab91-6911-4dff-aac3-bd8771cf03371696411495676-anayna-Ethnic-Motifs-Printed-Kurta-9951696411495609-6.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22143838/2023/3/9/4bc3566e-7203-4e03-8902-ebf32ed95fb91678359322659-anayna-Ethnic-Motifs-Printed-Kurta-5981678359322070-2.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22143838/2023/3/9/19485e92-d4cf-4d2e-8e10-01dacc0d4b4d1678359322683-anayna-Ethnic-Motifs-Printed-Kurta-5981678359322070-1.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22143838/2023/3/9/4d51ccaf-43ae-4d6d-b0d9-ae7ab636ac241678359322636-anayna-Ethnic-Motifs-Printed-Kurta-5981678359322070-3.jpg"
      ],
  },
  {
      id: 105,
      brand: "KALINI",
      name: "Geometric Printed Anarkali Kurta",
      rating: "4.2",
      reviews: 273,
      wishList: false,
      qty: 1,
      price: "799",
      MRP: "3199",
      discount: 75,
      category: "womens", // Mens, Womens, Shoes, Accessories
      imgURIs: ["https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28591838/2024/3/30/1ded5b0a-6944-40d3-9499-192aca4c70f01711796966726KALINIWomenQuirkyEmbroideredFlaredSleevesAnarkaliKurta1.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28591838/2024/3/30/5aea8c9f-9df3-45d2-917f-325789b21efc1711796966743KALINIWomenQuirkyEmbroideredFlaredSleevesAnarkaliKurta2.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28591838/2024/3/30/a20cff87-e876-4a10-bef2-bc75adc4821c1711796966762KALINIWomenQuirkyEmbroideredFlaredSleevesAnarkaliKurta3.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28591838/2024/3/30/b9616a5d-14b8-4d6d-a450-6bf4a9b4bc7f1711796966734KALINIWomenQuirkyEmbroideredFlaredSleevesAnarkaliKurta4.jpg"

      ]
  },
  {
      id: 106,
      brand: "anayna",
      name: "Women Ethnic Motifs Printed Kurta",
      rating: "4.3",
      reviews: 22690,
      wishList: false,
      qty: 1,
      price: "949",
      MRP: "2498",
      discount: 62,
      category: "womens", // Mens, Womens, Shoes, Accessories
      imgURIs: [
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26972234/2024/1/22/e97f9a74-5068-4f11-9558-1443cce9251a1705917791983-Anayna-Womens-Angrakha-Kurta-1481705917791627-1.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26972234/2024/1/22/9baa0857-8b0d-4fbb-a0a2-431b3b2688f11705917791972-Anayna-Womens-Angrakha-Kurta-1481705917791627-2.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26972234/2024/1/22/38e2ee26-70ab-484e-b767-7674b6977e3b1705917791961-Anayna-Womens-Angrakha-Kurta-1481705917791627-3.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26972234/2024/1/22/23046c2e-4e07-4d84-9cf5-836ad3f2ed241705917791950-Anayna-Womens-Angrakha-Kurta-1481705917791627-4.jpg"
      ]
  },
  {
      id: 107,
      brand: "KALINI",
      name: "Floral Printed Straight Kurta with Trousers & Dupatta",
      rating: "3.8",
      reviews: 806,
      wishList: false,
      qty: 1,
      price: "999",
      MRP: "4345",
      discount: 77,
      category: "womens", // Mens, Womens, Shoes, Accessories
      imgURIs: [
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30259206/2024/7/18/f80ea795-83c1-4244-94c2-c2fd0a16a3681721313394427KALINIWomensPeachRayonBlendPrintedStraightKurtaSetWithDupatt1.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30259206/2024/7/18/b2619a97-b31a-426c-8716-3b6590f867851721313394453KALINIWomensPeachRayonBlendPrintedStraightKurtaSetWithDupatt3.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30259206/2024/7/18/6db32171-3ec7-47be-b772-e55f1694fc871721313394508KALINIWomensPeachRayonBlendPrintedStraightKurtaSetWithDupatt4.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30259206/2024/7/18/4d8fdcb3-0079-42ab-be7b-d5bd7dfe10c01721313394400KALINIWomensPeachRayonBlendPrintedStraightKurtaSetWithDupatt5.jpg"
      ]
  },
  {
      id: 108,
      brand: "U.S. Polo Assn.",
      name: "Men White Clarkin Sneakers",
      rating: "4.2",
      reviews: 49000,
      wishList: false,
      qty: 1,
      price: "1499",
      MRP: "2999",
      discount: 50,
      category: "shoes", // Mens, Womens, Shoes, Accessories
      imgURIs: [
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10339033/2023/8/28/cddbcb00-a90c-43a9-8c63-d69dbaa0b2bb1693219412898-US-Polo-Assn-Men-White-Clarkin-Sneakers-6251693219412794-6.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10339033/2022/4/25/3170e623-ab80-4678-9628-14cb6033ab171650883660619USPoloAssnMenWhiteClarkinSneakers1.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10339033/2022/4/25/0f0d0736-0f23-4851-8dae-d38eb69b5e141650883660642USPoloAssnMenWhiteClarkinSneakers3.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10339033/2022/4/25/684d38fa-ab0a-4388-ae17-3cc45affbc141650883660627USPoloAssnMenWhiteClarkinSneakers15.jpg"
      ]
  },
  {
      id: 109,
      brand: "U.S. Polo Assn.",
      name: "U.S. Polo Assn Men Grey Solid Sneakers",
      rating: "4.2",
      reviews: 49293,
      wishList: false,
      qty: 1,
      price: "1499",
      MRP: "2999",
      discount: 50,
      category: "shoes", // Mens, Womens, Shoes, Accessories
      imgURIs: [
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13855576/2023/8/28/b2c7a038-a4e5-4387-8798-8759d94e4de51693219815855-US-Polo-Assn-Men-Grey-Solid-Sneakers-3841693219815756-6.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13855576/2022/4/25/1d9760b4-c33e-4d72-a6af-8e81970fd0161650883622705USPoloAssnMenGreySolidSneakers1.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13855576/2022/4/25/ca45205b-e2e5-42f8-b4af-12126cd8b3bc1650883622730USPoloAssnMenGreySolidSneakers3.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13855576/2022/4/25/5e1ace64-da58-440b-8e70-4f80cd9cc7c41650883622713USPoloAssnMenGreySolidSneakers15.jpg"
      ]
  },
  {
      id: 110,
      brand: "Campus",
      name: "Men Lace-Ups Sneakers",
      rating: "4.2",
      reviews: 66,
      wishList: false,
      qty: 1,
      price: "2049",
      MRP: "2499",
      discount: 18,
      category: "shoes", // Mens, Womens, Shoes, Accessories
      imgURIs: [
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30125739/2024/8/5/b091a121-764d-4181-bda9-234eddc517c71722846089169-Campus-Men-Lace-Ups-Sneakers-4731722846089058-11.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30125739/2024/7/6/cd777ce9-69ed-4096-85b5-4b283d0b897a1720265693801CampusMenPUSneakers1.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30125739/2024/7/6/eea8e62f-5c81-4053-b93e-8374090bb7bc1720265693831CampusMenPUSneakers4.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30125739/2024/7/6/a0fc78b0-89fb-445b-86ea-19699bd6721d1720265693771CampusMenPUSneakers5.jpg"
      ],
  },
  {
      id: 111,
      brand: "AfroJack",
      name: "Men Textured Sneakers",
      rating: "3.3",
      reviews: 546,
      wishList: false,
      qty: 1,
      price: "899",
      MRP: "4495",
      discount: 80,
      category: "shoes", // Mens, Womens, Shoes, Accessories
      imgURIs: [
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28731176/2024/4/8/a51de3f3-0dd1-4404-acaf-6c780adb4d901712547149941AfroJackMenSneakers1.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28731176/2024/4/8/4086eaa4-6c93-4046-a7ea-358d98b41c091712547149978AfroJackMenSneakers2.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28731176/2024/4/8/6a58f2a3-cc20-411b-af98-2e321555f93c1712547150017AfroJackMenSneakers5.jpg",
          "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28731176/2024/4/8/f74d24bf-7914-4512-94bf-d40b34e467551712547149997AfroJackMenSneakers6.jpg"
      ]
  }
]
  
  export default products;
  