const SHOP_DATA = [
    {
      id: 1,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 1,
          name: 'Brown ges',
          imgUrl:'https://images.pexels.com/photos/3226446/pexels-photo-3226446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 250,
          anim_items:[
            'https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300',
            'https://images.pexels.com/photos/3226447/pexels-photo-3226447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300',
            'https://images.pexels.com/photos/2307034/pexels-photo-2307034.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300',
            'https://images.pexels.com/photos/2181872/pexels-photo-2181872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300'
          ]
        }, 
        {
          id: 2,
          name: 'Grey sim',
          imgUrl:'https://images.pexels.com/photos/2747600/pexels-photo-2747600.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 180,
          anim_items:[
            'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/5821482/pexels-photo-5821482.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ]
        },
        {
          id: 3,
          name: 'Brown white',
          imgUrl: 'https://images.pexels.com/photos/2479146/pexels-photo-2479146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 350,
          anim_items:[
            'https://images.pexels.com/photos/54206/pexels-photo-54206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1476055/pexels-photo-1476055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1833082/pexels-photo-1833082.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/4026110/pexels-photo-4026110.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ]
        },
        {
          id: 4,
          name: 'Brown s',
          imgUrl: 'https://images.pexels.com/photos/1856319/pexels-photo-1856319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 125,
          anim_items:[
            'https://images.pexels.com/photos/1070970/pexels-photo-1070970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1460036/pexels-photo-1460036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/2245433/pexels-photo-2245433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ]
        },
        {
          id: 5,
          name: 'Green Beanie',
          imgUrl: 'https://images.pexels.com/photos/2960195/pexels-photo-2960195.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 180,
          anim_items:[
            'https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/663455/pexels-photo-663455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/983497/pexels-photo-983497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/826380/pexels-photo-826380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ]
        },
        {
          id: 6,
          name: 'Palm Tree Jack',
          imgUrl: 'https://images.pexels.com/photos/3242459/pexels-photo-3242459.jpeg?auto=compress&cs=tinysrgb&h=350https://th.bing.',
          price: 140,
            anim_items:[
              'https://images.pexels.com/photos/4541585/pexels-photo-4541585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              'https://images.pexels.com/photos/3253492/pexels-photo-3253492.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              'https://images.pexels.com/photos/196654/pexels-photo-196654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              'https://images.pexels.com/photos/3253492/pexels-photo-3253492.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ]
          
        },
        {
          id: 7,
          name: 'G Hasd',
          imgUrl: 'https://images.pexels.com/photos/3971649/pexels-photo-3971649.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 184,
          anim_items:[
            'https://images.pexels.com/photos/5905519/pexels-photo-5905519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/5821483/pexels-photo-5821483.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/5822220/pexels-photo-5822220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/5822543/pexels-photo-5822543.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ]
        },
        {
          id: 8,
          name: 'Wolf jeans',
          imgUrl: 'https://images.pexels.com/photos/5878808/pexels-photo-5878808.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 149,
          anim_items:[
            'https://images.pexels.com/photos/4541585/pexels-photo-4541585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/3253492/pexels-photo-3253492.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/196654/pexels-photo-196654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/3253492/pexels-photo-3253492.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Bags',
      routeName: 'bags',
      items: [
        {
          id: 9,
          name: 'Adidas ',
          imgUrl: 'https://images.pexels.com/photos/2090785/pexels-photo-2090785.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 220,
          anim_items:[
            'https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/167703/pexels-photo-167703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/4241704/pexels-photo-4241704.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/3661622/pexels-photo-3661622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ]
        },
        {
          id: 10,
          name: 'Adidas Yeezy',
          imgUrl: 'https://images.pexels.com/photos/1144838/pexels-photo-1144838.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 280,
          anim_items:[
            'https://images.pexels.com/photos/1394882/pexels-photo-1394882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
            'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1394882/pexels-photo-1394882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ]
        },
        {
          id: 11,
          name: 'Black Converse',
          imgUrl: 'https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 110,
          anim_items:[
            'https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/167703/pexels-photo-167703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/4241704/pexels-photo-4241704.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/3661622/pexels-photo-3661622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
         
          ]
        },
        {
          id: 12,
          name: 'Black X',
          imgUrl: 'https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 160,
          anim_items:[
            'https://images.pexels.com/photos/1394882/pexels-photo-1394882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
            'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1394882/pexels-photo-1394882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ]
        },
        {
          id: 13,
          name: 'Nike Red ',
          imgUrl: 'https://images.pexels.com/photos/2334906/pexels-photo-2334906.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 160,
          anim_items:[
            'https://images.pexels.com/photos/3645369/pexels-photo-3645369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/972937/pexels-photo-972937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/3645369/pexels-photo-3645369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/972937/pexels-photo-972937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ]
        },
        {
          id: 14,
          name: 'Brown High',
          imgUrl: 'https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 160,
          anim_items:[
            'https://images.pexels.com/photos/157888/fashion-glasses-go-pro-female-157888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/5743009/pexels-photo-5743009.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/3520653/pexels-photo-3520653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ]
        },
        {
          id: 15,
          name: 'Air Jordan Limited',
          imgUrl: 'https://images.pexels.com/photos/1039518/pexels-photo-1039518.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 190,
          anim_items:[
            'https://images.pexels.com/photos/1394882/pexels-photo-1394882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
            'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1394882/pexels-photo-1394882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ]
          },
        {
          id: 16,
          name: 'Timberlands',
          imgUrl: 'https://images.pexels.com/photos/2977304/pexels-photo-2977304.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 200,
          anim_items:[
            'https://images.pexels.com/photos/3645369/pexels-photo-3645369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/972937/pexels-photo-972937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/3645369/pexels-photo-3645369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/972937/pexels-photo-972937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
           ]
        }
      ]
    },
    {
      id: 3,
      title: 'Shoes',
      routeName: 'shoes',
      items: [
        {
          id: 17,
          name: 'Blue Snapback',
          imgUrl: 'https://images.pexels.com/photos/2285500/pexels-photo-2285500.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 106,
          anim_items:[
            'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ]
        },
        {
          id: 18,
          name: 'Black Sport',
          imgUrl: 'https://images.pexels.com/photos/175708/pexels-photo-175708.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 125,
          anim_items:[
            'https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          ]
        },
        {
          id: 19,
          name: 'Blue Jean ',
          imgUrl: 'https://images.pexels.com/photos/239362/pexels-photo-239362.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 90,
          anim_items:[
            'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
         
          ]
        },
        {
          id: 20,
          name: 'Grey Git',
          imgUrl: 'https://images.pexels.com/photos/1193945/pexels-photo-1193945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 90,
          anim_items:[
            'https://images.pexels.com/photos/2731977/pexels-photo-2731977.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/1904769/pexels-photo-1904769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/2731977/pexels-photo-2731977.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/847371/pexels-photo-847371.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          ]
        },
        {
          id: 21,
          name: 'Brown Shearling',
          imgUrl: 'https://images.pexels.com/photos/1488084/pexels-photo-1488084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 165,
          anim_items:[
            'https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          ]
        },
        {
          id: 22,
          name: 'Tan Nike',
          imgUrl: 'https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 185,
          anim_items:[
            'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
         
          ]
        },
        {
          id: 23,
          name: 'Grey Snapback',
          imgUrl: 'https://images.pexels.com/photos/1055275/pexels-photo-1055275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 128,
          anim_items:[
            'https://images.pexels.com/photos/2731977/pexels-photo-2731977.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/1904769/pexels-photo-1904769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/2731977/pexels-photo-2731977.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/847371/pexels-photo-847371.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          ]
        },
        {
          id: 24,
          name: 'White suoe',
          imgUrl: 'https://images.pexels.com/photos/1858407/pexels-photo-1858407.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 169,
          anim_items:[
            'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
         
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'Women',
      routeName: 'women',
      items: [
        {
          id: 25,
          name: 'Blue Tanktop',
          imgUrl: 'https://images.pexels.com/photos/3657429/pexels-photo-3657429.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 259,
          anim_items:[
            'https://images.pexels.com/photos/3657429/pexels-photo-3657429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/3778171/pexels-photo-3778171.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/4045599/pexels-photo-4045599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/4050888/pexels-photo-4050888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ]
        },
        {
          id: 26,
          name: 'Floral Blouse',
          imgUrl: 'https://images.pexels.com/photos/4550985/pexels-photo-4550985.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 209,
          anim_items:[
            'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ]
        },
        {
          id: 27,
          name: 'Floral Dress',
          imgUrl: 'https://images.pexels.com/photos/4045599/pexels-photo-4045599.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 80,
          anim_items:[
            'https://images.pexels.com/photos/3657429/pexels-photo-3657429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/3778171/pexels-photo-3778171.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/4045599/pexels-photo-4045599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/4050888/pexels-photo-4050888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
         
          ]
        },
        {
          id: 28,
          name: 'Red Dots Dress',
          imgUrl: 'https://images.pexels.com/photos/4050888/pexels-photo-4050888.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 80,
          anim_items:[
            'https://images.pexels.com/photos/952629/pexels-photo-952629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/2085118/pexels-photo-2085118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ]
        },
        {
          id: 29,
          name: 'Striped shoe',
          imgUrl: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 45,
          anim_items:[
            'https://images.pexels.com/photos/3657429/pexels-photo-3657429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/3778171/pexels-photo-3778171.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/4045599/pexels-photo-4045599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/4050888/pexels-photo-4050888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
           ]
        },
        {
          id: 30,
          name: 'Red Track Suit',
          imgUrl: 'https://images.pexels.com/photos/2005355/pexels-photo-2005355.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 135,
          anim_items:[
            'https://images.pexels.com/photos/952629/pexels-photo-952629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/2085118/pexels-photo-2085118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
           ]
        },
        {
          id: 31,
          name: 'White jack',
          imgUrl: 'https://images.pexels.com/photos/2896826/pexels-photo-2896826.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 120,
          anim_items:[
            'https://images.pexels.com/photos/3657429/pexels-photo-3657429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/3778171/pexels-photo-3778171.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/4045599/pexels-photo-4045599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/4050888/pexels-photo-4050888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
           ]
        },
        {
          id: 32,
          name: 'Blue Snapback',
          imgUrl: 'https://images.pexels.com/photos/3775532/pexels-photo-3775532.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 16,
          anim_items:[
            'https://images.pexels.com/photos/952629/pexels-photo-952629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/2085118/pexels-photo-2085118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          
          ]
        }
      ]
    },
    {
      id: 5,
      title: 'Men',
      routeName: 'men',
      items: [
        {
          id: 33,
          name: 'Camo Down Vest',
          imgUrl: 'https://images.pexels.com/photos/6147225/pexels-photo-6147225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 325,
          anim_items:[
            'https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ]
        },
        {
          id: 34,
          name: 'Floral T-shirt',
          imgUrl: 'https://images.pexels.com/photos/3290887/pexels-photo-3290887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 20,
          anim_items:[
            'https://images.pexels.com/photos/3317133/pexels-photo-3317133.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/2880799/pexels-photo-2880799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/3317133/pexels-photo-3317133.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/2880799/pexels-photo-2880799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ]
        },
        {
          id: 35,
          name: 'Black & White Longsleeve',
          imgUrl: 'https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 25,
          anim_items:[
            'https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
         ]
        },
        {
          id: 36,
          name: 'Pink T-shirt',
          imgUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 25,
          anim_items:[
            'https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          ]
        },
        {
          id: 37,
          name: 'Jean Long Sleeve',
          imgUrl: 'https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 40,
          anim_items:[
            'https://images.pexels.com/photos/3317133/pexels-photo-3317133.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/2880799/pexels-photo-2880799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/3317133/pexels-photo-3317133.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/2880799/pexels-photo-2880799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ]
        },
        {
          id: 38,
          name: 'Burgundy she',
          imgUrl: 'https://images.pexels.com/photos/5225415/pexels-photo-5225415.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 245,
          anim_items:[
            'https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
         ]
        },
        {
          id: 39,
          name: 'Blue shsis',
          imgUrl: 'https://images.pexels.com/photos/270968/pexels-photo-270968.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 16,
          anim_items:[
            'https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
           ]
        },
        {
          id: 40,
          name: 'Yellow Snapback',
          imgUrl: 'https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&h=350',
          price: 16,
          anim_items:[
            'https://images.pexels.com/photos/3317133/pexels-photo-3317133.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/2880799/pexels-photo-2880799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/3317133/pexels-photo-3317133.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/2880799/pexels-photo-2880799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
           ]
        }
      ]
    }
  ];
  
  export default SHOP_DATA;
  