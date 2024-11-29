class Item{
    constructor(picture,title,itemDetails,price){
        this._picture = picture;
        this._title = title;
        this._itemDetails = itemDetails;
        this._price = price;

    }

    get picture(){
        return this._picture
    }
    get title(){
        return this._title
    }
    get itemDetails(){
        return this._itemDetails
    }
    get price(){
        return this._price
    }



}

const inventory = {
    men:{
            tops:{
                    tShirts:[{picture:"assests/images/man/T-shirts/image1_0 (1).jpg",title:"Reglet Logo T-Shirt",itemDetails:"Show off your style with the Reglet Logo T-Shirt, made from soft and breathable 100% cotton for all-day comfort.",price:80},{picture:"assests/images/man/T-shirts/image1_0 (2).jpg",title:"Classic White button T-Shirt",itemDetails:"Elevate your wardrobe with this Classic White button T-Shirt, a timeless essential that combines comfort and versatility. ",price:80},{picture:"assests/images/man/T-shirts/tshirt black si 46df3fab-b51f-4deb-82a4-e5250b898976.png",title:"Classic Black T-Shirt",itemDetails:"The Classic Black T-Shirt is a must-have staple for any wardrobe. Crafted from soft, high-quality cotton, it offers a perfect blend of comfort and durability.",price:80},{picture:"assests/images/man/T-shirts/tshirt blue sin f2386d33-7069-4d78-ace0-8435e6b625d3.png",title:"Classic Blue T-Shirt",itemDetails:"Add a pop of color to your wardrobe with the Classic Blue T-Shirt. Made from soft and breathable cotton, this tee provides a comfortable fit that’s perfect for everyday wear. ",price:70}],
                    hoodies:[{picture:"assests/images/man/Hoodies/hoodie  with pa 04d34c7b-0357-4ede-b21e-fd7ce3e881df.png",title:"Patterned Hoodie",itemDetails:"Stay cozy and stylish with our Patterned Hoodie, designed for both comfort and flair. Made from a soft cotton blend, this hoodie features a unique all-over pattern that adds a bold statement to your look.",price:80},{picture:"assests/images/man/Hoodies/hoodie black si 4cfc8853-598d-4395-87b8-2d817cb98746.png",title:"Classic Black Hoodie",itemDetails:"Elevate your casual wear with the Classic Black Hoodie, a timeless piece that combines comfort and style. Made from a cozy cotton blend, this hoodie features a soft fleece interior to keep you warm on cooler days. ",price:90},{picture:"assests/images/man/Hoodies/hoodie blue sin 3c6420ff-0748-4369-b82d-6d46eda7ba94.png",title:"Classic Blue Hoodie",itemDetails:"Refresh your wardrobe with the Classic Blue Hoodie, a comfortable and stylish essential for any season. Crafted from a soft cotton blend, this hoodie offers warmth and a cozy fit with its fleece-lined interior. ",price:60},{picture:"assests/images/man/Hoodies/hoodie green si e3db1fce-9ac0-4a18-9384-06d618ab5a24.png",title:"Classic Green Hoodie",itemDetails:"Bring a touch of nature to your wardrobe with the Classic Green Hoodie, perfect for effortless style and comfort. Made from a soft and durable cotton blend, this hoodie is designed to keep you cozy with its warm fleece lining.",price:80},{picture:"assests/images/man/Hoodies/hoodie white si 02ed7362-deb8-4c13-a921-5e34eb43f517.png",title:"Classic White Hoodie",itemDetails:"Sleek, simple, and effortlessly cool—the Classic White Hoodie is a wardrobe essential for any season. Crafted from a soft cotton blend with a cozy fleece interior, it offers warmth and comfort for everyday wear.",price:80}],
                    sweatshirts: [
                        {
                          picture: "assests/images/man/sweatshirt/sweatshirt blac dbe9ced1-272b-4013-9d51-db9ab11a701e.png",
                          title: "Black Sweatshirt",
                          itemDetails: "This cozy black sweatshirt is made from high-quality cotton blend fabric. It's perfect for casual outings or lounging at home.",
                          price: 35
                        },
                        {
                          picture: "assests/images/man/sweatshirt/sweatshirt blue 5c12c201-dca9-491b-8414-a95a5531f092.png",
                          title: "Blue Sweatshirt",
                          itemDetails: "Stay stylish with this classic blue sweatshirt. Designed for comfort and durability, it's a wardrobe essential for all seasons.",
                          price: 40
                        },
                        {
                          picture: "assests/images/man/sweatshirt/sweatshirt blue 70279e7f-edcf-48c8-a19e-64295aed1512.png",
                          title: "Light Blue Sweatshirt",
                          itemDetails: "This light blue sweatshirt adds a fresh touch to your outfit. Its soft fabric ensures a comfortable fit all day long.",
                          price: 38
                        },
                        {
                          picture: "assests/images/man/sweatshirt/sweatshirt red  cd0d7317-ee17-4cf5-928f-77bed3a75c61.png",
                          title: "Red Sweatshirt",
                          itemDetails: "Make a bold statement with this vibrant red sweatshirt. It's both stylish and practical for chilly weather.",
                          price: 42
                        }
                      ],
                    jackets:[{picture:"assests/images/man/jackets/one hoodie hang.png",title:"White Premium Hoodie",itemDetails:"A clean and versatile white premium hoodie, crafted for exceptional comfort and a sleek, minimalist style.",price:60},{picture:"assests/images/man/jackets/one all high.png",title:"GS LUX Leather Bomber",itemDetails:"A sophisticated GS LUX leather bomber jacket, blending timeless style with premium craftsmanship for a sleek, modern look.",price:50},{picture:"assests/images/man/jackets/Mask Group 2.png",title:"GS Force Leather Bomber",itemDetails:"The GS Force Leather Bomber is a high-performance jacket that blends a bold, military-inspired design with premium leather for a sleek, durable outerwear option.",price:60},{picture:"assests/images/man/jackets/black hoodie.png",title:"Premium Long Line Hoodie",itemDetails:"The Premium Long Line Hoodie offers a contemporary, elongated fit with a smooth, luxurious feel, perfect for casual wear with a modern edge.",price:40},{picture:"assests/images/man/jackets/one all grey fa.png",title:"Leather Lux Biker ",itemDetails:"The Leather Lux Biker jacket combines edgy biker aesthetics with premium leather craftsmanship for a sleek and timeless statement piece.",price:70},{picture:"assests/images/man/jackets/one all grey.png",title:"Faux Premium GS Jacket",itemDetails:"The Faux Premium GS Jacket delivers a sophisticated look with high-quality faux leather, blending style, comfort, and sustainability.",price:70}],
                    accessories:[
                        {
                          picture: "assests/images/man/accessories/bagpack white b 8489adf1-aed0-4545-a961-d2c296b52ef9.png",
                          title: "White Backpack",
                          itemDetails: "This sleek white backpack is perfect for school, work, or travel. It features multiple compartments for easy organization.",
                          price: 50
                        },
                        {
                          picture: "assests/images/man/accessories/bagpack white b 5c17b16b-c4b1-4f0f-9801-0c57ae6df025.png",
                          title: "Black Backpack",
                          itemDetails: "A durable black backpack designed for versatility. Ideal for daily use with a stylish and modern look.",
                          price: 55
                        },
                        {
                          picture: "assests/images/man/accessories/bagpack white b ba9ea666-4157-49ae-9e3c-6a56c140c773.png",
                          title: "Green Backpack",
                          itemDetails: "This vibrant green backpack combines functionality with style. Perfect for outdoor adventures and city commutes.",
                          price: 48
                        },
                        {
                          picture: "assests/images/man/accessories/watch white bac 8ffd32f3-9532-4bf8-8acf-12e8b0d46f24.png",
                          title: "Silver Watch with White Face",
                          itemDetails: "This elegant silver watch features a minimalist white face. A timeless accessory for any formal or casual outfit.",
                          price: 120
                        },
                        {
                          picture: "assests/images/man/accessories/watch white bac 9cda8b0f-6681-4e84-92f7-c0d3134388c6.png",
                          title: "Silver Watch with Black Face",
                          itemDetails: "A sophisticated silver watch with a bold black face. Ideal for making a classy and refined statement.",
                          price: 125
                        },
                        {
                          picture: "assests/images/man/accessories/watch white bac 569db2b7-0c84-4ae9-b3d1-3c6a195281ac.png",
                          title: "Black Watch",
                          itemDetails: "This all-black watch exudes modernity and elegance. It's lightweight and perfect for everyday wear.",
                          price: 90
                        },
                        {
                          picture: "assests/images/man/accessories/watch white bac d207fc3b-1099-448a-8d8d-04fd4c2880e9.png",
                          title: "Leather Strap Watch",
                          itemDetails: "A classic watch with a genuine leather strap. Combines comfort and style for any occasion.",
                          price: 110
                        }
                      ]
                },
            bottoms:{
                shorts:[
                    {
                      picture: "assests/images/man/shorts/beach shorts si 49a4979c-29f5-4f77-9e0a-c92bb78aecf5.png",
                      title: "Beach Shorts",
                      itemDetails: "These lightweight and breathable beach shorts are perfect for sunny days by the water. Designed with comfort and style in mind.",
                      price: 25
                    },
                    {
                      picture: "assests/images/man/shorts/beach shorts si 85bbd8d8-f136-479a-b297-4164a888161b.png",
                      title: "Beach Shorts Two",
                      itemDetails: "A vibrant pair of beach shorts with a bold pattern. Great for lounging on the sand or casual summer outings.",
                      price: 28
                    },
                    {
                      picture: "assests/images/man/shorts/shorts single w 84ba3a3b-949e-4497-bc4b-eccadb2c5add.png",
                      title: "White Shorts",
                      itemDetails: "These classic white shorts offer a clean and stylish look. Made with soft fabric for all-day comfort.",
                      price: 30
                    },
                    {
                      picture: "assests/images/man/shorts/sport shorts si 048f63eb-bce0-44c4-9ae9-ab8194caca7d.png",
                      title: "Sports Shorts Two Tone",
                      itemDetails: "These sporty two-tone shorts provide flexibility and durability. Ideal for workouts, runs, or casual wear.",
                      price: 35
                    },
                    {
                      picture: "assests/images/man/shorts/beach shorts si 49a4979c-29f5-4f77-9e0a-c92bb78aecf5.png",
                      title: "Blue Shorts",
                      itemDetails: "A versatile pair of blue shorts that can be dressed up or down. Designed with a tailored fit for a polished look.",
                      price: 27
                    }
                  ],
                jeans: [
                    {
                      picture: "assests/images/man/Jeans/entire  red jea d25ded30-5de5-496e-8377-09818719f486.png",
                      title: "Red Ripped Jeans",
                      itemDetails: "These bold red ripped jeans add a trendy edge to your outfit. Made from durable denim with a comfortable stretch.",
                      price: 45
                    },
                    {
                      picture: "assests/images/man/Jeans/entire jeans wi 7dfb5a97-b4d5-4a1b-b629-40bfffaa0bec.png",
                      title: "Blue Ripped Jeans",
                      itemDetails: "Classic blue ripped jeans with a distressed look. Perfect for casual outings with a touch of attitude.",
                      price: 50
                    },
                    {
                      picture: "assests/images/man/Jeans/image0_0.jpg",
                      title: "Blue Jeans",
                      itemDetails: "A pair of timeless blue jeans that are both stylish and practical. Crafted from premium denim for everyday wear.",
                      price: 40
                    },
                    {
                      picture: "assests/images/man/Jeans/image1_0 (4).jpg",
                      title: "Red Jeans",
                      itemDetails: "Make a bold statement with these striking red jeans. Designed for a snug fit and long-lasting comfort.",
                      price: 42
                    },
                    {
                      picture: "assests/images/man/Jeans/jeans brown sin 0e502e7d-6c1d-4504-ad85-4842d334ee7c.png",
                      title: "Brown Jeans",
                      itemDetails: "These versatile brown jeans offer a unique twist to your denim collection. Soft and durable for all-day wear.",
                      price: 38
                    }
                  ],
                dressPants: [
                    {
                      picture: "assests/images/man/dressPants/dresspants sing 89bdfe09-adf7-4867-a09b-4bccde079a75.png",
                      title: "Dresspants Shorts",
                      itemDetails: "These tailored dresspants shorts offer a modern take on classic formal wear. Perfect for a smart-casual summer look.",
                      price: 35
                    },
                    {
                      picture: "assests/images/man/dressPants/dresspants sing 950edca9-6b33-4c71-ab43-79ca75031a09.png",
                      title: "Grey Dresspants",
                      itemDetails: "Sophisticated grey dresspants with a sleek and professional fit. Ideal for office wear or formal occasions.",
                      price: 55
                    },
                    {
                      picture: "assests/images/man/dressPants/dresspants sing 97646794-8d2b-4a9a-83d4-38feb30125a1.png",
                      title: "Cream Dresspants",
                      itemDetails: "These cream-colored dresspants exude elegance and style. Made from premium fabric for exceptional comfort.",
                      price: 58
                    },
                    {
                      picture: "assests/images/man/dressPants/dresspants sing c96d0ead-6837-4f9d-ac2e-0255048a2411.png",
                      title: "White Dresspants",
                      itemDetails: "Crisp and stylish white dresspants for a refined look. Perfect for summer events and special occasions.",
                      price: 60
                    }
                  ],
                trackPants: [
                    {
                      picture: "assests/images/man/trackPants/track pants sin 5a720ce5-4fb3-440e-a754-836e737de22a.png",
                      title: "White Track Pants",
                      itemDetails: "Comfortable and stylish white track pants made from breathable fabric. Perfect for workouts or casual wear.",
                      price: 40
                    },
                    {
                      picture: "assests/images/man/trackPants/trackpants sing 2bb44c7d-1328-4d9e-afca-9ccee3c8bfec.png",
                      title: "Brown Track Pants",
                      itemDetails: "Trendy brown track pants with a modern fit. Great for both athletic activities and relaxed lounging.",
                      price: 42
                    },
                    {
                      picture: "assests/images/man/trackPants/trackpants sing 9a2a89f9-5472-46cc-b24c-1bd64e49eb36.png",
                      title: "Red Track Pants",
                      itemDetails: "Bold red track pants with a sporty design. Crafted for durability and ease of movement.",
                      price: 45
                    },
                    {
                      picture: "assests/images/man/trackPants/trackpants sing e9b0f28b-fc6e-482a-bca8-ae8620926404.png",
                      title: "Black Track Pants",
                      itemDetails: "Classic black track pants that combine functionality and style. A wardrobe essential for active lifestyles.",
                      price: 38
                    }
                  ],
                shoes:[
                    {
                      picture: "assests/images/man/shoes/shoes single wh 393e98a1-1595-494e-84e5-76446c870eb0.png",
                      title: "Brown Shoe",
                      itemDetails: "Elegant brown shoes crafted from high-quality leather. Perfect for formal occasions and professional settings.",
                      price: 65
                    },
                    {
                      picture: "assests/images/man/shoes/shoes sneaker   578b7d71-8d8a-41c0-b6ca-689fe1a256a7.png",
                      title: "Black and White Shoe",
                      itemDetails: "Trendy black and white shoes with a sleek design. Ideal for casual outings or adding a modern touch to your outfit.",
                      price: 50
                    },
                    {
                      picture: "assests/images/man/shoes/shoes sneaker s 2b38bc70-f4a2-408b-be57-032db0f34705.png",
                      title: "Brown Suede Shoe",
                      itemDetails: "Soft and stylish brown suede shoes that offer a luxurious feel. A versatile choice for semi-formal occasions.",
                      price: 70
                    },
                    {
                      picture: "assests/images/man/shoes/shoes sneaker s 6a171f82-f778-4158-a1b1-641bbb23fc35.png",
                      title: "White Sneaker",
                      itemDetails: "Classic white sneakers that pair well with any outfit. Designed for comfort and everyday wear.",
                      price: 55
                    },
                    {
                      picture: "assests/images/man/shoes/shoes sneaker s a9ed3bc8-7548-4de9-82d1-01f116b7f33c (1).png",
                      title: "Pink Sneaker",
                      itemDetails: "Vibrant pink sneakers with a fun and playful vibe. Lightweight and comfortable for all-day wear.",
                      price: 48
                    }
                  ]

            }
        },
    women:{
            tops:{
                tShirtsTees:[
                    {
                      picture: "assests/images/Women/tShirtsTees/tShirtsTees sin 1c6ae639-c4a2-4464-8051-7a35592e62ef.png",
                      title: "Green Shirt",
                      itemDetails: "A stylish green shirt made from breathable fabric. Perfect for casual and semi-formal occasions.",
                      price: 30
                    },
                    {
                      picture: "assests/images/Women/tShirtsTees/tShirtsTees sin 7be9690f-cf18-45c1-bd54-62a068ffa1e1.png",
                      title: "Black Shirt",
                      itemDetails: "A classic black shirt that pairs well with any outfit. Made with soft and durable material for comfort.",
                      price: 32
                    },
                    {
                      picture: "assests/images/Women/tShirtsTees/tShirtsTees sin be396050-8ef1-444e-8155-1ac5af2b202d.png",
                      title: "White Shirt",
                      itemDetails: "A crisp white shirt designed for a polished and timeless look. Ideal for both professional and casual settings.",
                      price: 28
                    }
                  ],
                blouses:[
                    {
                      picture: "assests/images/Women/blouses/blouse single w 9cec132e-4cf1-4e2a-ac4f-bb257b0ca871.png",
                      title: "Blue Blouse",
                      itemDetails: "This elegant blue blouse features a lightweight and flowy design. Perfect for pairing with skirts or pants for a chic look.",
                      price: 35
                    },
                    {
                      picture: "assests/images/Women/blouses/blouse single w 0081a58c-025d-4cd0-b9c2-3eebe5dcf918.png",
                      title: "White Blouse",
                      itemDetails: "A classic white blouse with a modern cut. Made from breathable fabric for all-day comfort and style.",
                      price: 38
                    },
                    {
                      picture: "assests/images/Women/blouses/blouse single w 3764375d-65d0-4343-aebc-85620ad6049d.png",
                      title: "Pink Blouse",
                      itemDetails: "This vibrant pink blouse adds a playful touch to any outfit. Soft and stylish, it's ideal for both work and casual wear.",
                      price: 34
                    },
                    {
                      picture: "assests/images/Women/blouses/bluse single wh 9e4d71b6-dbde-40f4-88bd-08724f75304d.png",
                      title: "White Blouse Two",
                      itemDetails: "A sophisticated white blouse with delicate detailing. Versatile enough for formal events or casual gatherings.",
                      price: 40
                    }
                  ],
                sweatersCardigans: [
                    {
                      picture: "assests/images/Women/sweatersCardigans/sweater Cardiga 36f5e1e4-f500-4963-8717-f8310c1c6906.png",
                      title: "Pink Sweater Cardigan",
                      itemDetails: "This cozy pink sweater cardigan adds a touch of warmth and elegance to your wardrobe. Perfect for layering on cooler days.",
                      price: 45
                    },
                    {
                      picture: "assests/images/Women/sweatersCardigans/sweater Cardiga 7470abfd-6385-40de-9cd6-3a1650b7cb5f.png",
                      title: "Green Sweater Cardigan",
                      itemDetails: "A stylish green sweater cardigan crafted from soft fabric. Ideal for casual outings or staying comfortable at home.",
                      price: 50
                    },
                    {
                      picture: "assests/images/Women/sweatersCardigans/sweater Cardiga a59ae94c-19ec-4fd4-a2de-05e7b523d2e6.png",
                      title: "Green Sweater Cardigan Two",
                      itemDetails: "Another chic option in green, this sweater cardigan features a relaxed fit and timeless design for everyday wear.",
                      price: 52
                    },
                    {
                      picture: "assests/images/Women/sweatersCardigans/sweater Cardiga fdd8fcd9-711b-4a90-b385-a90f9ecd6d6f.png",
                      title: "White Sweater Cardigan",
                      itemDetails: "This classic white sweater cardigan pairs effortlessly with any outfit. A must-have for your seasonal collection.",
                      price: 48
                    },
                    {
                      picture: "assests/images/Women/sweatersCardigans/sweater Cardiga ff233861-47ae-4b43-b084-6984bc38c07d.png",
                      title: "Two Colour Tone Sweater Cardigan",
                      itemDetails: "A unique two-tone sweater cardigan with contrasting colors. Perfect for making a bold fashion statement.",
                      price: 55
                    }
                  ],
                Bodysuits:[
                    {
                      picture: "assests/images/Women/Bodysuits/Bodysuit single 03dde065-f0ac-493d-add0-f142379ad641.png",
                      title: "White Bodysuit",
                      itemDetails: "This sleek white bodysuit is designed for a flawless fit. Made from stretchy, soft fabric, it's perfect for layering or wearing alone.",
                      price: 30
                    },
                    {
                      picture: "assests/images/Women/Bodysuits/Bodysuit single 10b93747-6c67-460d-80e3-68fb88a45ff1.png",
                      title: "Pink Bodysuit",
                      itemDetails: "This vibrant pink bodysuit adds a pop of color to your outfit. Crafted from breathable material for comfort and style.",
                      price: 32
                    },
                    {
                      picture: "assests/images/Women/Bodysuits/Bodysuit single c84d25f1-dfef-48d3-a6d2-16dc868e80a8.png",
                      title: "White Bodysuit Two",
                      itemDetails: "A classic white bodysuit with a chic neckline and tailored fit. Ideal for pairing with jeans or skirts for a polished look.",
                      price: 35
                    }
                  ],
                jackets:[
                    {
                      picture: "assests/images/Women/jackets/jacket for fema 6c4ac4c7-e810-4069-b483-a2108e5d4f3e.png",
                      title: "White Jacket",
                      itemDetails: "This stylish white jacket combines elegance and functionality. Perfect for cool weather and versatile layering.",
                      price: 60
                    },
                    {
                      picture: "assests/images/Women/jackets/jacket for fema 09e2ab2c-5f09-454e-97b0-e789fe211b61.png",
                      title: "Pink Jacket",
                      itemDetails: "A vibrant pink jacket that adds a playful touch to your wardrobe. Lightweight and comfortable for any season.",
                      price: 65
                    },
                    {
                      picture: "assests/images/Women/jackets/jacket for fema 31cc3b71-6e7b-4cb0-aedc-611f0a37e412.png",
                      title: "Grey Jacket",
                      itemDetails: "This timeless grey jacket is a wardrobe essential. Designed with a sleek fit and crafted from durable fabric.",
                      price: 58
                    },
                    {
                      picture: "assests/images/Women/jackets/jacket for fema 093df16b-f851-493c-9feb-902b770e5f76.png",
                      title: "Green Jacket",
                      itemDetails: "A trendy green jacket perfect for outdoor adventures. Its durable and breathable fabric ensures all-day comfort.",
                      price: 62
                    }
                  ],
                accessories:[
                    {
                      picture: "assests/images/Women/accessories/earing single w 6baf5214-f7ae-49c1-b3c8-a72e50e2ce54.png",
                      title: "Earring One",
                      itemDetails: "A stunning pair of earrings with an elegant design. Perfect for both casual and formal occasions.",
                      price: 20
                    },
                    {
                      picture: "assests/images/Women/accessories/earing single w 35a03afe-5caa-447e-8097-56e3a8165d30.png",
                      title: "Earring Two",
                      itemDetails: "Chic and minimalist earrings that add a touch of sophistication to any outfit. Lightweight and comfortable to wear.",
                      price: 25
                    },
                    {
                      picture: "assests/images/Women/accessories/handbag single  04d89409-eb15-4bc0-89ba-5f05f0f6d9d0.png",
                      title: "Brown Handbag",
                      itemDetails: "A classic brown handbag made from premium leather. Spacious and stylish for everyday use.",
                      price: 75
                    },
                    {
                      picture: "assests/images/Women/accessories/handbag single  691fea68-112d-4cb9-b625-1af52a31b07b.png",
                      title: "Dark Brown Handbag",
                      itemDetails: "A dark brown handbag with a sleek and timeless design. Features multiple compartments for convenience.",
                      price: 80
                    },
                    {
                      picture: "assests/images/Women/accessories/handbag single  dc4d5e1d-4edb-4cad-9248-252a69a911dc.png",
                      title: "Peach Handbag",
                      itemDetails: "This vibrant peach handbag adds a pop of color to your outfit. Crafted with care for a modern and chic look.",
                      price: 70
                    }
                  ]

            },
            bottoms:{
                jeans: [
                    {
                      picture: "assests/images/Women/jeans/jeans  single w 3e3c953b-8fa1-4a9d-93af-b9d0a9baf7d9.png",
                      title: "Classic Jeans",
                      itemDetails: "A timeless pair of classic jeans made from durable denim. Perfect for everyday wear with a comfortable fit.",
                      price: 40
                    },
                    {
                      picture: "assests/images/Women/jeans/jeans  single w 6279320b-5b93-41a4-b84f-6ca8b4039b54.png",
                      title: "Short Jeans",
                      itemDetails: "Trendy short jeans designed for casual outings. Made with premium denim for style and durability.",
                      price: 35
                    }
                  ],
                pantsTrousers:[
                    {
                      picture: "assests/images/Women/pantsTrousers/female pants tr 3a2158ca-9d8c-490c-af90-ddf547aaab7d.png",
                      title: "Brown Pants Trouser",
                      itemDetails: "Classic brown trousers designed for a polished and professional look. Made from comfortable, high-quality fabric.",
                      price: 45
                    },
                    {
                      picture: "assests/images/Women/pantsTrousers/female pants tr a472e057-3294-4cd4-b860-fb84f978affc.png",
                      title: "Peach Pants Trouser",
                      itemDetails: "Chic peach trousers with a modern fit. Perfect for adding a touch of elegance to your outfit.",
                      price: 50
                    },
                    {
                      picture: "assests/images/Women/pantsTrousers/jeans brown sin aab98c79-e1fe-4f17-9700-3d7c8d5c24e3.png",
                      title: "Red Pants Trouser",
                      itemDetails: "Bold and stylish red trousers that make a statement. Ideal for both casual and semi-formal occasions.",
                      price: 48
                    },
                    {
                      picture: "assests/images/Women/pantsTrousers/pants trouser s 9558b59b-28e8-426b-8bbd-40f5f2c1a0c7.png",
                      title: "White Pants Trouser",
                      itemDetails: "Crisp white trousers offering a clean and sophisticated look. A versatile addition to any wardrobe.",
                      price: 55
                    }
                  ],
                shorts:[
                    {
                      picture: "assests/images/Women/shorts/hot shorts sing ca732c7f-31b6-4270-9f30-6cf9139d8e67.png",
                      title: "White Shorts",
                      itemDetails: "These versatile white shorts are perfect for summer days. Lightweight and comfortable for casual outings.",
                      price: 30
                    },
                    {
                      picture: "assests/images/Women/shorts/shorts single w 1a1ac9df-e4b2-4f09-abb0-c45f693a601c.png",
                      title: "Light Grey Shorts",
                      itemDetails: "Light grey shorts with a modern and sleek design. Made from breathable fabric for all-day comfort.",
                      price: 28
                    },
                    {
                      picture: "assests/images/Women/shorts/shorts single w 3f01756a-529b-47c1-a78e-0b19cb2a6abf.png",
                      title: "Grey Shorts",
                      itemDetails: "Classic grey shorts with a relaxed fit. Ideal for workouts, lounging, or casual wear.",
                      price: 32
                    },
                    {
                      picture: "assests/images/Women/shorts/shorts single w 6451caa7-5a48-4a72-acd4-8e826097b856.png",
                      title: "Green Shorts",
                      itemDetails: "Trendy green shorts that bring a pop of color to your summer wardrobe. Durable and easy to pair with any top.",
                      price: 34
                    }
                  ],
                skirts:[
                    {
                      picture: "assests/images/Women/skirts/skirt single wh 74cd7066-17f8-42f4-9763-dd6c0678af3e.png",
                      title: "Skirt Pattern",
                      itemDetails: "A stylish patterned skirt that adds a fun touch to any outfit. Ideal for casual or semi-formal occasions.",
                      price: 40
                    },
                    {
                      picture: "assests/images/Women/skirts/skirt single wh 823d556c-51f7-4788-8d12-50c406e49cd4.png",
                      title: "Peach Skirt Pattern",
                      itemDetails: "A soft peach skirt with a unique pattern design. Perfect for warm weather and making a statement.",
                      price: 42
                    },
                    {
                      picture: "assests/images/Women/skirts/skirt single wh 09005c9b-272e-488e-a82d-886275ac9fcd.png",
                      title: "White Skirt",
                      itemDetails: "A classic white skirt that is both elegant and versatile. Easy to pair with any top for a polished look.",
                      price: 38
                    },
                    {
                      picture: "assests/images/Women/skirts/skirt single wh 859730ee-091c-46ed-9c37-aeb7363e622b.png",
                      title: "Green Skirt",
                      itemDetails: "A vibrant green skirt that adds a fresh touch to your wardrobe. Perfect for casual or semi-formal outings.",
                      price: 45
                    },
                    {
                      picture: "assests/images/Women/skirts/skirt single wh ac0adff1-836f-445e-a1d7-c9e3e661e3eb.png",
                      title: "Long White Skirt",
                      itemDetails: "An elegant long white skirt made for a flowing, sophisticated look. Ideal for formal or relaxed gatherings.",
                      price: 50
                    }
                  ],
                shoes:[
                    {
                      picture: "assests/images/Women/shoes/ankle strap sho a281c0ab-d000-480a-a3ec-be3ccf76f117.png",
                      title: "Leather High Heel",
                      itemDetails: "Elegant leather high heels crafted for a timeless look. Perfect for formal events or elevating any outfit.",
                      price: 70
                    },
                    {
                      picture: "assests/images/Women/shoes/ankle strap sho a740d9f7-499d-4d9b-8b92-ab9cd015178d.png",
                      title: "Blue Strap High Heel",
                      itemDetails: "Chic high heels with a bold blue strap design. Made for both comfort and style on special occasions.",
                      price: 65
                    },
                    {
                      picture: "assests/images/Women/shoes/ankle strap sho c4c7aa6a-1035-490f-85f8-8a7a1261ec81.png",
                      title: "Black Strap High Heel",
                      itemDetails: "Classic black strap high heels that pair effortlessly with any outfit. Durable and comfortable for long wear.",
                      price: 68
                    },
                    {
                      picture: "assests/images/Women/shoes/ankle strap sho d34dbeac-c898-4181-9cc4-a0b1ca462cd1.png",
                      title: "Brown Heel Strap",
                      itemDetails: "Stylish brown heels with a secure strap design. Ideal for casual outings or dressy events.",
                      price: 60
                    },
                    {
                      picture: "assests/images/Women/shoes/high heels whit bea61fb5-9463-4007-b169-033e1ec8803e.png",
                      title: "High Heels Pink",
                      itemDetails: "Vibrant pink high heels that make a bold statement. Designed for a comfortable fit and standout style.",
                      price: 75
                    },
                    {
                      picture: "assests/images/Women/shoes/shoes women whi a5a06458-f9f3-46fa-8479-b92254492822.png",
                      title: "White Vans",
                      itemDetails: "Casual and trendy white Vans sneakers, perfect for everyday wear. Durable and stylish for any occasion.",
                      price: 55
                    }
                  ]
            }
          }
}

export default inventory