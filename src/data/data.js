const data = [
  {
    id: 'c1',
    title: 'French Fries',
    price: 106,
    pic: 'https://upload.wikimedia.org/wikipedia/commons/8/83/French_Fries.JPG',
    category: 'All Time Favourite',
  },
  {
    id: 'c2',
    title: 'Veg Burger',
    price: 70,
    pic:
      'https://media.gettyimages.com/id/166543019/photo/veggie-burger.jpg?s=612x612&w=0&k=20&c=KVuCxLgfY5lb59TBiEoZooj9UhRMSJtoUXH8dzkP4Bw=',
    category: 'Snacky Bites',
  },
  {
    id: 'c3',
    title: 'Garlic Bread',
    price: 115,
    pic:
      'https://media.gettyimages.com/id/1181825866/photo/garlic-bread-on-rustic-wooden-table.jpg?s=612x612&w=0&k=20&c=GOfd3Gv02NI8HKIvAfsitAVBpkxtZMhXHNIwlfogdi4=',
    category: 'All Time Favourite',
  },
  {
    id: 'c4',
    title: 'Chilli Cheese Toast',
    price: 115,
    pic: 'https://i.ytimg.com/vi/u86z8lEedr8/maxresdefault.jpg',
    category: 'All Time Favourite',
  },
  {
    id: 'c5',
    title: 'Plain Sandwich',
    price: 50,
    pic:
      'https://media.gettyimages.com/id/91846964/photo/plate-of-egg-and-watercress-sandwiches.jpg?s=612x612&w=0&k=20&c=IiQ4A8hOJnk0dDi7Erc9yacJkl6KzmkEs7nd0tSRXgo=',
    category: 'Snacky Bites',
  },
  {
    id: 'c6',
    title: 'Macaroni',
    price: 100,
    pic:
      'https://media.gettyimages.com/id/154946830/photo/penne-with-vegetables.jpg?s=612x612&w=0&k=20&c=7DRUBVq_4ZuJTbztLJV_OeuhWQojYULM5gqAPyhsh_8=',
    category: 'All Time Favourite',
  },
  {
    id: 'c7',
    title: 'Plain Cheese Pizza',
    price: 190,
    pic:
      'https://media.gettyimages.com/id/1362760904/photo/italian-food-close-up-of-pizza-in-cooking-pan-on-black-background-massachusetts-united-states.jpg?s=612x612&w=0&k=20&c=uhrFKkwOv42nWSRUPmxW87FkwAqs4kkP8qFR4BhK_HY=',
    category: 'Pizza',
  },
  {
    id: 'c8',
    title: 'Capsicum Onion Pizza',
    price: 210,
    category: 'Pizza',
    pic:
      'https://media.gettyimages.com/id/1209036460/photo/pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=DL_tnbvuV-EPAoJimYTa2FYJiEvveu4pJyKOmtkrQt8=',
  },
  {
    id: 'c9',
    title: 'Tomato Onion Pizza',
    price: 210,
    pic:
      'https://media.gettyimages.com/id/1023289930/photo/pizza-tuna.jpg?s=612x612&w=0&k=20&c=cR0_7aNt8Z8gcRMd7-HboOB-TQ9X5uyGJSryZ8HCdn8=',
    category: 'Pizza',
  },
  {
    id: 'c10',
    title: 'Hot and Sour',
    price: 80,
    pic:
      'https://media.gettyimages.com/id/86056231/photo/shiitake-mushroom-soup.jpg?s=612x612&w=0&k=20&c=MBDl-sk0yFwx3nnNP-lBJG-1FUHNgFje0OCppa-YPbc=',
    category: 'Soups',
  },
  {
    id: 'c11',
    title: 'Lemon Soup',
    price: 90,
    pic:
      'https://media.gettyimages.com/id/1367170974/photo/close-up-of-a-woman-serving-of-a-chicken-broth-with-wholegrain-bread.jpg?s=612x612&w=0&k=20&c=4IOOvaMPAx5RBQ38jHThvlxIdAQnfpBBZmU0kaZtq5w=',
    category: 'Starters',
  },
  {
    id: 'c12',
    title: 'Veg Noodles Soup',
    price: 109,
    pic:
      'https://media.gettyimages.com/id/813145172/photo/turmeric-soup.jpg?s=612x612&w=0&k=20&c=a5NIaEaX2CMHTuBmvWdehkfsfE7CdSg5OM9w93ptle0=',
    category: 'Starters',
  },
  {
    id: 'c13',
    title: 'Spring Roll',
    price: 145,
    pic: 'https://media.gettyimages.com/id/187138377/photo/plate-of-spring-rolls-sauce-and-salad.jpg?s=612x612&w=0&k=20&c=-G2rUGLNUQNo-gI5ryj8TYh9zFgCyp6TeDS4FXlI1LI=',
    category: 'Starters',
  },
  {
    id: 'c14',
    title: 'Chilly Paneer Dry',
    price: 195,
    pic: 'https://media.gettyimages.com/id/1382482014/photo/yummy-indian-food-directly-above-shot-of-various-food-in-bowls-on-table.jpg?s=612x612&w=0&k=20&c=K_I3vtWD3q1WufPsUQi-ZeoGdUpm6CknHGW1yaI37W4=',
    category: 'Starters',
  },
  {
    id: 'c15',
    title: 'Veg. Manchurian Dry',
    price: 153,
    pic: 'https://everbake.co/wp-content/uploads/2021/07/MANCHURIAN-DRY-CLOSE-UP.jpg',
    category: 'Starters',
  },
  {
    id: 'c16',
    title: 'Crispy Spinach',
    price: 198,
    pic: 'https://media.gettyimages.com/id/503337620/photo/grilled-halibut-with-spinach-leeks-and-pine-nuts.jpg?s=612x612&w=0&k=20&c=bcrySCiUxAEhyRm8Hd5W9wLvnivMUA7o2xkM-i_lpT8=',
    category: 'Starters',
  },
  {
    id: 'c17',
    title: 'Veg Hakka Noodles',
    price: 145,
    pic: 'https://media.gettyimages.com/id/1366709263/photo/traditional-asian-chinese-food-hakka-stir-fry-is-a-hakka-style-cuisine.jpg?s=612x612&w=0&k=20&c=RGD0ZbvxYRtpu2uW_DP47dlmuSMwPWburigCx-F8MX8=',
    category: 'Starters',
  },
  {
    id: 'c18',
    title: 'Pan Fried Noodles',
    price: 225,
    pic: 'https://media.gettyimages.com/id/184317874/photo/beef-broccoli-chow-mein.jpg?s=612x612&w=0&k=20&c=9be_amD3HYfFBiFhQxeb-AvHDFE4_e_8q_IRAusJ4TY=',
    category: 'Starters',
  },
  {
    id: 'c19',
    title: 'Pav Bhaji',
    price: 90,
    pic: 'https://media.gettyimages.com/id/670906905/photo/pav-bhaji-with-bread-onion-and-butter-indian-food.jpg?s=612x612&w=0&k=20&c=w157G4wcPYU5dQn8cnthScgxEVEPvk6KoE6UTrv1II0=',
    category: 'Snacky Bites',
  },
  {
    id: 'c20',
    title: 'Dosa',
    price: 200,
    pic: 'https://media.gettyimages.com/id/165462925/photo/sunday-must-eat-column-on-the-pav-bhaji-dosa-at-dosa-corner-please-shoot-this-dosa-exactly-as.jpg?s=612x612&w=0&k=20&c=ZG2gGDDl5SYworFyOnDpRFa4404WadbB3SMJ1V80HS8=',
    category: 'Snacky Bites',
  },
  {
    id: 'c21',
    title: 'Bombay Vada Pav',
    price: 109,
    pic: 'https://media.gettyimages.com/id/1329212743/photo/vada-pav.jpg?s=612x612&w=0&k=20&c=K08WlL8YxjjLC5MfmuiKhHI04RZ-UGsVAQVIBKdu-QM=',
    category: 'Snacky Bites',
  },
  {
    id: 'c22',
    title: 'Dahi Bhalla Papri',
    price: 90,
    pic: 'https://www.archanaskitchen.com/images/archanaskitchen/Indian_Street_Food/Dahi_Bhalla_Puri_Recipe-1.jpg',
    category: 'Snacky Bites',
  },
  {
    id: 'c23',
    title: 'Gol Gappa',
    price: 25,
    pic: 'https://media.gettyimages.com/id/1314329942/photo/goal-gappa-or-pani-puri.jpg?s=612x612&w=0&k=20&c=l6akiKMfTLE9nR4VonhiOZpZGDY4aEjimAN-BSskF-A=',
    category: 'Snacky Bites',
  },
  {
    id: 'c24',
    title: 'Tandoori Paneer Tikka',
    price: 220,
    pic: 'https://media.gettyimages.com/id/1311668516/photo/chilli-paneer-indian-snack-food.jpg?s=612x612&w=0&k=20&c=-N0DEY96xE9ArEtes4DlF3ke3meXeNQCOtr8QIWPh5Q=',
    category: 'North Indian',
  },
  {
    id: 'c25',
    title: 'Shahi Paneer',
    price: 210,
    pic: 'https://media.gettyimages.com/id/1305517229/photo/shahi-paneer-or-paneer-kadai.jpg?s=612x612&w=0&k=20&c=cGJ8LNDv2wWmyNSrW80jqccDIL7HywXbHNlvO5ka9Qs=',
    category: 'North Indian',
  },
  {
    id: 'c26',
    title: 'Kadhai Paneer',
    price: 240,
    pic: 'https://media.gettyimages.com/id/670906889/photo/paneer-makhani-or-shahi-paneer-indian-food.jpg?s=612x612&w=0&k=20&c=QBmKmo4JZNQmO4sQwlUub7KgOJDwUo2d0_EHtx4r-5c=',
    category: 'North Indian',
  },
  {
    id: 'c27',
    title: 'Dal Makhani',
    price: 120,
    pic: 'https://media.gettyimages.com/id/1338247303/photo/image-of-kadhai-style-serving-bowl-of-homemade-dal-makhani-curry-recipe-plate-of-garlic-naan.jpg?s=612x612&w=0&k=20&c=gyEeseTZ5nOTDK46cHfz0YGqK_ZiyJk6HBWICCJZpLM=',
    category: 'North Indian',
  },
  {
    id: 'c28',
    title: 'Rajma',
    price: 141,
    pic: 'https://media.gettyimages.com/id/1334103290/photo/garnished-rajma-curry-served-in-a-plate-along-with-jeera-rice.jpg?s=612x612&w=0&k=20&c=4GjQa0VcIW2mtE3ttwV4cHNsiNy5nwmxoVsc82Yu-WY=',
    category: 'North Indian',
  },
  {
    id: 'c29',
    title: 'Chole',
    price: 150,
    pic: 'data:image/jpeg;base64,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',
    category: 'North Indian',
  },
  {
    id: 'c30',
    title: 'Rice',
    price: 100,
    pic: 'https://media.gettyimages.com/id/1219359000/photo/eating-rice-by-using-chopsticks-on-wooden-background.jpg?s=612x612&w=0&k=20&c=Q1R-8EKnA-PyC7CjWOEtMKqZNYX-BBleBGPIDhviVTU=',
    category: 'North Indian',
  },
  {
    id: 'c31',
    title: 'Pulao',
    price: 160,
    pic: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/tawa-pulao-recipe.jpg',
    category: 'North Indian',
  },
  {
    id: 'c32',
    title: 'Tandoori Roti',
    price: 30,
    pic: 'https://media.gettyimages.com/id/636176428/photo/tandoori-roti.jpg?s=612x612&w=0&k=20&c=AlLMk2CDE95pkReCWAtf2svwTlJ3e7SWyGJ2H8cQRc4=',
    category: 'Breads',
  },
  {
    id: 'c33',
    title: 'Roomali Roti',
    price: 17,
    pic: 'https://kfoods.com/images1/newrecipeicon/roomali-roti_9098.jpg',
    category: 'Breads',
  },
  {
    id: 'c34',
    title: 'Butter Roti',
    price: 36,
    pic: 'https://anandschicken.com/wp-content/uploads/2021/06/Hotel-img-25.jpg',
    category: 'Breads',
  },
  {
    id: 'c35',
    title: 'Butter Naan',
    price: 50,
    pic: 'https://indianvegrecipe.com/wp-content/uploads/2019/06/butter-naan-recipe.jpg',
    category: 'Breads',
  },
  {
    id: 'c36',
    title: 'Papad',
    price: 25,
    pic: 'https://media.gettyimages.com/id/185280688/photo/poppadoms.jpg?s=612x612&w=0&k=20&c=xF1_6dZj1r-VWon5n9d4QnkJ8FLTyv-qq1LPAaUdgJ4=',
    category: 'Breads',
  },
  {
    id: 'c37',
    title: 'Gulab Jamun',
    price: 40,
    pic: 'https://media.gettyimages.com/id/1337213309/photo/gulab-jamun.jpg?s=612x612&w=0&k=20&c=NzDH9Om23hZyFsW6Kt5Z5UK2O_VQ7aho4H0xoHAG86M=',
    category: 'All Time Favourite',
  },
  {
    id: 'c38',
    title: 'Halwa',
    price: 150,
    pic: 'https://media.gettyimages.com/id/670907001/photo/gajar-ka-halwa-in-a-bowl-indian-sweets.jpg?s=612x612&w=0&k=20&c=Gmn3meirAGOe148UOk0E9UWkfl10gcTs25l9iJgDVWw=',
    category: 'All Time Favourite',
  },
]

export default data
