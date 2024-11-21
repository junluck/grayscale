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
                    tShirts:[],
                    hoodies:[],
                    sweatshirts:[],
                    jackets:[new Item("assests/images/jackets/one hoodie hang.png","White Premium Hoodie","A clean and versatile white premium hoodie, crafted for exceptional comfort and a sleek, minimalist style.",120),new Item("assests/images/jackets/one all high.png","GS LUX Leather Bomber","A sophisticated GS LUX leather bomber jacket, blending timeless style with premium craftsmanship for a sleek, modern look.",320),new Item("assests/images/jackets/Mask Group 2.png","GS Force Leather Bomber","The GS Force Leather Bomber is a high-performance jacket that blends a bold, military-inspired design with premium leather for a sleek, durable outerwear option.",320),new Item("assests/images/jackets/black hoodie.png","Premium Long Line Hoodie","The Premium Long Line Hoodie offers a contemporary, elongated fit with a smooth, luxurious feel, perfect for casual wear with a modern edge.",140),new Item("assests/images/jackets/one all grey fa.png","Leather Lux Biker ","The Leather Lux Biker jacket combines edgy biker aesthetics with premium leather craftsmanship for a sleek and timeless statement piece.",240),new Item("assests/images/jackets/one all grey.png","Faux Premium GS Jacket","The Faux Premium GS Jacket delivers a sophisticated look with high-quality faux leather, blending style, comfort, and sustainability.",270)],
                    accessories:[]
                },
            bottoms:{
                shorts:[],
                jeans:[],
                dressPants:[],
                trackPants:[],
                shoes:[]

            }
        },
    women:{
            tops:{
                tShirtsTees:[],
                blouses:[],
                sweatersCardigans:[],
                Bodysuits:[],
                jackets:[],
                accessories:[]

            },
            bottoms:{
                jeans:[],
                pantsTrousers:[],
                shorts:[],
                skirts:[],
                shoes:[]
            }
          }
}

export default inventory