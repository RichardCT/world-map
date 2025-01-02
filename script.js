// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 2);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo(map);

// Add country markers
var countries = [
  { name: 'Paris', lat: 48.864716, lng: 2.349014 },
  { name: 'Los Angeles', lat: 34.052235, lng: -118.243683 },
  { name: 'Houston', lat: 29.749907, lng: -95.358421 },
  { name: 'Puerto Rico', lat: 18.200178, lng: -66.664513 },
  { name: 'Arizona', lat: 34.048927, lng: -111.093735 },
  { name: 'Amsterdam', lat: 52.377956, lng: 4.897070 },
  { name: 'Tallinn', lat: 59.436962, lng: 24.753574 },
  { name: 'Brussels', lat: 50.85045, lng: 4.34878 },
  { name: 'Las Vegas', lat: 36.188110, lng: -115.176468 },
  { name: 'Sayulita', lat: 20.86944, lng: -105.44083 },
  { name: 'Ixtapa-Zihuatanejo', lat: 17.64444, lng: -101.55111 },
  { name: 'La Paz', lat: 24.14231, lng: -110.31316 },
  { name: 'Toronto', lat: 43.70643, lng: -79.39864 },
  { name: 'Quebec', lat: 46.81228, lng: -71.21454 },
  { name: 'Montreal', lat: 45.50884, lng: -73.58781 },
  { name: 'Miami', lat: 25.77427, lng: -80.19366 },
  { name: 'Singapore', lat: 1.352083, lng: 103.819836 },
  { name: 'Bangkok', lat: 13.75398, lng: 100.50144 },
  { name: 'Chiang Mai', lat: 18.796143, lng: 98.979263 },
  { name: 'Phi Phi', lat: 7.73333, lng: 98.76667 },
  { name: 'Kuala Lumpur', lat: 3.140853, lng: 101.693207 },
  { name: 'El Nido', lat: 11.19556, lng: 119.4075 },
  { name: 'Tokyo', lat: 35.652832, lng: 139.839478 },
  { name: 'Kyoto', lat: 35.011665, lng: 135.768326 },
  { name: 'Osaka', lat: 34.672314, lng: 135.484802 },
  { name: 'Tapalpa', lat: 19.9476711, lng: -103.7607783 },
  { name: 'CDMX', lat: 19.432608, lng: -99.133209 },
  { name: 'Mazamitla', lat: 19.915556, lng: -103.019444 },
  { name: 'Mazatlan', lat: 23.249414, lng: -106.411140 },
  { name: 'Queretaro', lat: 20.58750, lng: -100.39278 },
  { name: 'Tequila', lat: 20.88278, lng: -103.83667 },
  { name: 'Melaka', lat: 2.2008448, lng: 102.240143 }
];

countries.forEach(function (country) {
  var marker = L.marker([country.lat, country.lng]).addTo(map);
  marker.bindPopup('<h2>' + country.name + '</h2><p>Click to view more info</p>');
  marker.on('click', function () {
    // Fetch country data and render the popup
    fetchCountryData(country.name, function (data) {
      var popupHtml = '<h2>' + country.name + '</h2><p>' + data.description + '</p>';
      
      // Render images
      if (data.images.length > 0) {
        popupHtml += '<div class="gallery">';
        data.images.forEach(function (image) {
          popupHtml += '<a href="' + image + '" data-lightbox="' + country.name + '"><img src="' + image + '" style="width:100px;height:100px;margin:5px;"></a>';
        });
        popupHtml += '</div>';
      }

      // Render videos
      if (data.videos.length > 0) {
        popupHtml += '<div class="videos">';
        data.videos.forEach(function (video) {
          popupHtml += '<iframe src="' + video + '" width="100" height="100" allow="autoplay" style="margin:5px;"></iframe>';
        });
        popupHtml += '</div>';
      }

      marker.setPopupContent(popupHtml);
    });
  });
})

// Fetch country data
function fetchCountryData(countryName, callback) {
  // Define different sets of images for each country
  var countryMedia = {
    'Paris': {
      images: [
          'https://lh3.googleusercontent.com/d/1nAPdN4DuiXctYqjnKlHfCzPgUM3I67XS',
          'https://lh3.googleusercontent.com/d/1mNDyC4KhupdtIqMykxzbR6K1cAct5S_x',
          'https://lh3.googleusercontent.com/d/1gQI1nvg3kFOjyk2UoPUG_m-fG0TGIwbj',
          'https://lh3.googleusercontent.com/d/1A8gdVIfPszdI3KapdpLkdqCENAsSvavH',
          'https://lh3.googleusercontent.com/d/1jJc6C3M3flFLhqMQjQ6xbzS0jljU7J-c',
          'https://lh3.googleusercontent.com/d/1C6bmN60lIv3gJdQeIVoBnpiSK5Udq5Ns',
          'https://lh3.googleusercontent.com/d/1guW_ntSRdNiL06NwEMHSidyLmFoI9w_q'
      ],
      videos: [

      ]
    },
    'Los Angeles': {
      images: [
        'https://lh3.googleusercontent.com/d/13O3ILmdfdP5c0k_sHlW3NP4I7XOpfgK7',
        'https://lh3.googleusercontent.com/d/1wdMtHKL-O-j-az4tABVtAgzSlqrI-hIG',
        'https://lh3.googleusercontent.com/d/1v1GGqzU9KG_z3JbY7i11a67YgFMw-ay6',
        'https://lh3.googleusercontent.com/d/1ZdXUxeGXj6-_Dp1HFRyphONEeTtHRjI-',
        'https://lh3.googleusercontent.com/d/1i4sPRN5dwgvLU-67HMW9uiAuIptnO7xv',
        'https://lh3.googleusercontent.com/d/1T-_8q8RRSxqX7AaL6TJg3ZSE5MSBJ7Qp'
      ],
      videos: [
        'https://drive.google.com/file/d/132ZvdHXj_doC73x_lScG_e1u01KtcLr7/preview'
      ]
    },
    'Queretaro': {
      images: [
        'https://lh3.googleusercontent.com/d/13DNaTvpPP3c0FU7BNjhnK7FDG0kywtqJ',
        'https://lh3.googleusercontent.com/d/138KxEFT3gB8rXMd2-xZkq08CUgQ8d0UF',
        'https://lh3.googleusercontent.com/d/1S3UUjcVlqjax9t2OVjRlfqAjQP1pE2gV',
        'https://lh3.googleusercontent.com/d/1pIhSAqZ71Q5ac12YV4IlIBKCCzeiXUzq',
        'https://lh3.googleusercontent.com/d/1SIBmqDgf6VqaJ-nK1MSmPiym1iN8LsQ_',
        'https://lh3.googleusercontent.com/d/12ZMUsMRLaLyDMCXXk8XU8Z4qUuCpUVMs'
      ],
      videos: [

      ]
    },
    'Amsterdam': {
      images: [
        'https://lh3.googleusercontent.com/d/19wrL_JceXMKoPR_sY5BJpo3SdNim_KVK',
        'https://lh3.googleusercontent.com/d/1RDkfGNcNxQuHl5UQUVsbr8LJsJ0Hg95j',
        'https://lh3.googleusercontent.com/d/1e2Tb_YTWa-t0M7M5EI56GV_EV9H10ic9',
        'https://lh3.googleusercontent.com/d/1VRmlsRDWVp5fKoh7NlbhQJEb6E7NdQjX',
        'https://lh3.googleusercontent.com/d/1Z6pB6T-6P3h1Gl4csri2spj3daapB4I1',
        'https://lh3.googleusercontent.com/d/1qhNiC3MAt4_XxdeHFjZWxLitU99bwInb'
      ],
      videos: [

      ]
    },
    'Quebec': {
      images: [
        'https://lh3.googleusercontent.com/d/1_anc0Jcn079u4bPH698KT5fk_Uf_U8qu',
        'https://lh3.googleusercontent.com/d/1enTPdayzvMMVRV72bg5CiaS0c5dJ9y3o',
        'https://lh3.googleusercontent.com/d/1A8vvunJOY5ZSa2_4MJC75bqibQyVnxmT',
        'https://lh3.googleusercontent.com/d/1bgSDGsve4mazVXarKXWc74SPETY2QDzW',
        'https://lh3.googleusercontent.com/d/14jDlqCQbRzKy9Oge59U7aidZny0_7Nk-',
        'https://lh3.googleusercontent.com/d/1W836eeUHWHVlJEp8vArqOEdYfINt52Im'
      ],
      videos: [

      ]
    },
    'Phi Phi': {
      images: [
        'https://lh3.googleusercontent.com/d/1H-YvJraYEB_bsqygSKQ4tEYSHJUUlEDJ',
        'https://lh3.googleusercontent.com/d/1XHbM21TS4CvmUvoSMiwJuL4nFChFTOEx',
        'https://lh3.googleusercontent.com/d/1rbwz-c578Psu_M42_El2WTudavhh3af0',
        'https://lh3.googleusercontent.com/d/1Vug08qocjIBsJVupd3VQO0dQng6SdeSO',
        'https://lh3.googleusercontent.com/d/1Bq9imEyYOaIZmkrcvdCAsXmlC9c4xwI2',
        'https://lh3.googleusercontent.com/d/1EWmBtk1H2G78L3j7q1jklIzAFLuSg-EM'
      ],
      videos: [

      ]
    },
    'Bangkok': {
      images: [
        'https://lh3.googleusercontent.com/d/1glADEEYPgZd75Xf755tVqupMCT-xFP6K',
        'https://lh3.googleusercontent.com/d/16P2_WTKqB0jqQmcXIwH2qIPkc0qqNlH6',
        'https://lh3.googleusercontent.com/d/1y4zNNEw2pyhBcXieIps4RzWeXUidYyCm',
        'https://lh3.googleusercontent.com/d/1pN6B4-7KzYDuYK5IhWwPXBBQFSThwprb',
        'https://lh3.googleusercontent.com/d/1aU6iQXNiBGDW7WZhkyNioQwd6Zln86V-',
        'https://lh3.googleusercontent.com/d/1ZKmKlixYzvc5jQ19N7ug0ro31rUCvzsF',
        'https://lh3.googleusercontent.com/d/1Iqcq4nMQyCCwtXzBbp4E5D-wM09bwa-R'
      ],
      videos: [

      ]
    },
    'Las Vegas': {
      images: [
        'https://lh3.googleusercontent.com/d/12yiVSFq9suyMbW0rTBTvCNzR-n8_60xk',
        'https://lh3.googleusercontent.com/d/1DcjNjklw1EDsxvvdPurRLEs400TUQoLb',
        'https://lh3.googleusercontent.com/d/1ZCDGYa966JYYmSPozm1Vuu8Bm--PRa3G',
        'https://lh3.googleusercontent.com/d/1SlWq4j6m4ApBTGH62HS2IFeOJUw8kfNl',
        'https://lh3.googleusercontent.com/d/130FJ7Y1Gz66n9ER_WWeIa1WhROBoAnrZ',
        'https://lh3.googleusercontent.com/d/1sLwILTx-dyVhEI6229ER51jbpaGBqFVz'
      ],
      videos: [

      ]
    },
    'Miami': {
      images: [
        'https://lh3.googleusercontent.com/d/1gavwS4SB6yXNJ_sgrrx7uRq0xeH3tpDp',
        'https://lh3.googleusercontent.com/d/1Mpl1sTAcAJWILx3FfZggT3WhgbsTwNMR',
        'https://lh3.googleusercontent.com/d/1ccBh7stgd3TepGiH8NwQCZBApfDROp2a',
        'https://lh3.googleusercontent.com/d/1APG02-1Rsi8qfdGw8KSRBYXjSiQk3hP4',
        'https://lh3.googleusercontent.com/d/1bcgNF5sSev10_veYvvK54AeDiFgOfH2P'
      ],
      videos: [
        'https://drive.google.com/file/d/11UGTouh3emwd6dyFIctx6MNtjt82DbG2/preview'
      ]
    },
    'Chiang Mai': {
      images: [
        'https://lh3.googleusercontent.com/d/1GuhJjk3ci-ADd92i0g3M4kQmVlHl6rbl'
      ],
      videos: [

      ]
    },
    'Kuala Lumpur': {
      images: [
        'https://lh3.googleusercontent.com/d/1aRZeJ0hekY7nxVxIBWnWlTNWlgCUo3cK',
        'https://lh3.googleusercontent.com/d/10s-psfPtRjghSZecIYB3uF-9GssdvDRU',
        'https://lh3.googleusercontent.com/d/10oSbSK-SBBCBpeIstUhJrHVYxFJAwY4T',
        'https://lh3.googleusercontent.com/d/10cgb_nyFKx9_ac2zIGW8ndfrP3Qx6-Ez'
      ],
      videos: [

      ] 
    },
    'Sayulita': {
      images: [
        'https://lh3.googleusercontent.com/d/1Al7Vxp5wz9OJJgqOpIKEYY47EcbUV1kV',
        'https://lh3.googleusercontent.com/d/1dOEmEBp63ilt8OyiBuApec4Wht7CTEhS',
        'https://lh3.googleusercontent.com/d/1XctpbGCY2G1A2QopDucrWFOirwQXK2iA',
        'https://lh3.googleusercontent.com/d/15MDvlgEyfsaopyUhJRXO5_h-_ydojGTb',
        'https://lh3.googleusercontent.com/d/1GM35cgCDiE9s6MMGqoIOPPNndx1nq3pj',
        'https://lh3.googleusercontent.com/d/1JE7-_LwWY22wGUxffxqrF9FRY0JE_edf',
        'https://lh3.googleusercontent.com/d/1hWWp3efSEW_sUkxixcqLx9-_upnjtdNa'
      ],
      videos: [

      ] 
    },
    'Tokyo': {
      images: [
        'https://lh3.googleusercontent.com/d/10A6c9QZ3NuQ3oSvnVeziLnoVkUgpaEB8',
        'https://lh3.googleusercontent.com/d/1yamxXJlz9d5RADSVfKfHKeKLpEF9Mbuj',
        'https://lh3.googleusercontent.com/d/15Hy7_k-7CmKUbHH41vNLWSIMyqq_fPIR',
        'https://lh3.googleusercontent.com/d/1i99_pn4fm9-dZSSl0gxh5gyzOcyvGN9I'
      ],
      videos: [
        'https://drive.google.com/file/d/1kvRksbsnDKq-_PyUQGZf00XbvAHjHQSY/preview'
      ]
    },
    'Mazatlan': {
      images: [
        'https://lh3.googleusercontent.com/d/1QqhT0kguNWMDPLQa0UOzmu4x9r5FpmxR',
        'https://lh3.googleusercontent.com/d/1qCm-m3uOZvqSc8sFXVh6mzc5AhAi8CUX',
        'https://lh3.googleusercontent.com/d/1CSU37SbxF5DUBU-8stbe_wtEcVumD0zd',
        'https://lh3.googleusercontent.com/d/1UEVJoaxzI3ko0M23DNmPARceMoAf4MEE'
      ],
      videos: [

      ]
    },
    'Tallinn': {
      images: [
        'https://lh3.googleusercontent.com/d/1zZkq5T5mrqUcZVBEqUEA_ERYP43cB0Bc',
        'https://lh3.googleusercontent.com/d/17jlsJE3R0ckgJHMC4T5p_JOpzlV6IZSG',
        'https://lh3.googleusercontent.com/d/1lokiO6_26ZfzXsAAZq0Lpwl4--0-3saJ',
        'https://lh3.googleusercontent.com/d/1f-KD9jr2BiwyHFMIj9uqK3ljC44a1Kcx',
        'https://lh3.googleusercontent.com/d/1KAUkz6EvijcJDuXRdKNeBVk6H2a8trPn',
        'https://lh3.googleusercontent.com/d/1biQzSZ56MyRU5c6p8PyBpoOn9RDhntMj'
      ],
      videos: [

      ]
    },
    'Mazamitla': {
      images: [
        'https://lh3.googleusercontent.com/d/10m-uIM6TBSR2Sc6ohqX_wKqmiIHH6Nbp',
        'https://lh3.googleusercontent.com/d/11C9DnTh5wtKD9aNodH3EOMkF-2lbrUb_'
      ],
      videos: [

      ]
    },
    'CDMX': {
      images: [
        'https://lh3.googleusercontent.com/d/1Qs2vpzxp3ojGk8hiqlHSwtzALl860S2R',
        'https://lh3.googleusercontent.com/d/135MLahEiCy1qNK2WagY_X2gn0zNGxDDU',
        'https://lh3.googleusercontent.com/d/1Y-umPWgQE7OlUafY0VNGITbcP8HQsuHG',
        'https://lh3.googleusercontent.com/d/1IgOn7qlDkahnv2GRA0cmpiDS26SKhx-n'
      ],
      videos: [
        'https://drive.google.com/file/d/136dpLtLTpWG9SRrApDeeE2l4-Fx-hbPM/preview',
        'https://drive.google.com/file/d/1FN7gkLbBZfA8d7smOENBlJ-mG0y74BYT/preview'
      ]
    },
    'Tapalpa': {
      images: [
        'https://lh3.googleusercontent.com/d/14MICRPN3LnS8SBLrGMkVM7FwAc3DdAKi',
        'https://lh3.googleusercontent.com/d/16SJ9yWVRueBoj671iBIRdi1GNTfk8VpH',
        'https://lh3.googleusercontent.com/d/1YAEjdKaE6XIgXaB4gYSOdWeVjfPL4A_H',
        'https://lh3.googleusercontent.com/d/1YwezQSIdHkrrGVwe4KPuiiBpcefZtRdc',
        'https://lh3.googleusercontent.com/d/1HunHjr55gWSw2og9RSU4v6cbxCOvnzhy'
      ],
      videos: [
        'https://drive.google.com/file/d/1385ME3LdAqug0iB6lp-iOg-gN4xeydtyE/preview'
      ]
    },
    'Puerto Rico': {
      images: [
        'https://lh3.googleusercontent.com/d/12vEIDj0O3SBXnbwOKDToqxQxKXUqI1VB',
        'https://lh3.googleusercontent.com/d/1uMacjDJIFEmhZhvfhx7I9VMy2pw8ry-8',
        'https://lh3.googleusercontent.com/d/12BLW15ONqCRrxlqjMzSJuTHVJ2T-8DqC',
        'https://lh3.googleusercontent.com/d/12v5TFPYFdMJg7ix3pJPGz4QjZIwn9hLo'
      ],
      videos: [
        'https://drive.google.com/file/d/12twnAjvlgWrlOKD_zjJNM6opsmr6cbNa/preview'
      ] 
    },
    'Arizona': {
      images: [
        'https://lh3.googleusercontent.com/d/1EjqNduaiQUjdnFrrMszUOePJ16QmhSMr',
        'https://lh3.googleusercontent.com/d/1dGp_PCyA4YZNR3q1Nh3NEBs5llx1b3UR',
        'https://lh3.googleusercontent.com/d/1pK3vVfsV-9EZvHeRXMYiC9-rRYa5cHze',
        'https://lh3.googleusercontent.com/d/1jYwh21MPmto_hJqLJJ88trLAKVUkBl8E',
        'https://lh3.googleusercontent.com/d/1nylGjfDDuA9BogzSasW37pvkJVHFN9r2'
      ],
      videos: [
        'https://drive.google.com/file/d/13MvHC_Gx5-5hakPxxDEWKRScF8ThamXE/preview'
      ] 
    },
    'Houston': {
      images: [
        'https://lh3.googleusercontent.com/d/1LmzvOV5ji-TckCFrTQgW3ezMBEO-iDEQ',
        'https://lh3.googleusercontent.com/d/1tTs_bd-azbGKgqp0aJhf6pCyrRLp2b1s',
        'https://lh3.googleusercontent.com/d/15UR8hr4tCE-K7WraDViJeVVcszjxX5xN',
        'https://lh3.googleusercontent.com/d/1ukNdsPblVMpJfiT7Q4tyiACjN9Vq-QlV'
      ],
      videos: [

      ] 
    },
    'Brussels': {
      images: [
        'https://lh3.googleusercontent.com/d/1kqmijBunYNwNDbfhkid8DvHq8-PnR1mD',
        'https://lh3.googleusercontent.com/d/1sUfZm_HGkt70Xd0cPOVXpdhC9Ud9kPYm',
        'https://lh3.googleusercontent.com/d/1JhlyimunB6OQuKw91jXebyIOM1v9MHtK'
      ],
      videos: [
        'https://drive.google.com/file/d/1H9CUQcOUBdjhk4M2TstR6VeQBc75ROcI/preview'
      ] 
    },
    'Ixtapa-Zihuatanejo': {
      images: [
        'https://lh3.googleusercontent.com/d/1Kyni0j3GOfB1hQ3PjFEh8ICDTLX8pqwK',
        'https://lh3.googleusercontent.com/d/1RMWgvY6-RS3dl0KQ2daSoQhpbqz56LmC',
        'https://lh3.googleusercontent.com/d/1debWB7KinuEfQx0a6HLNb_VikXJskv1F',
        'https://lh3.googleusercontent.com/d/1nbcze4VG18RgEue0UpDwjwsg98c7xpmT',
        'https://lh3.googleusercontent.com/d/1LE6Jpt3tTaXRuuHn6o96h35jGyZwexfV',
        'https://lh3.googleusercontent.com/d/1SwI0L2ZgRZvWulFQ4ddEgq8BuDG6yMUQ'
      ],
      videos: [

      ]  
    },
    'Tequila': {
      images: [
        'https://lh3.googleusercontent.com/d/12sNwkkzJ9uVAQ1a1EKfVmUwVKd8cyTgM',
        'https://lh3.googleusercontent.com/d/1FfdhNgcMeWy9v-PxXDy4wylHYteambbz'
      ],
      videos: [
        'https://drive.google.com/file/d/13SvwFTia-rWyYFZNVU4jcs8c1MCsBG7D/preview'
      ]
    },
    'Singapore': {
      images: [
        'https://lh3.googleusercontent.com/d/113pl_JLZnw0qNgWqgCu38IhOVIUFyrUK',
        'https://lh3.googleusercontent.com/d/1126rsFymOLMcFIePe6lFP84qyFfaiXEU',
        'https://lh3.googleusercontent.com/d/1irAIebmhSa0cFK3R8InJu4hzSmSIYM8F'
      ],
      videos: [

      ]
    },
    'Melaka': {
      images: [
        'https://lh3.googleusercontent.com/d/10x0Aamro9cQ_gpqaj8q1W-0cqSp6tRvz',
        'https://lh3.googleusercontent.com/d/15NBIhaUn5YbbSnllUsGgLGru3oAyfzYC'
      ],
      videos: [

      ]
    },
    'Kyoto': {
      images: [
        'https://lh3.googleusercontent.com/d/10RT_y9kTl3AYfvEu8FyTgzH1kLsN4IIV',
        'https://lh3.googleusercontent.com/d/10Gdiokar_iuvcvRPPCOrc_0qMeYxkzDB',
        'https://lh3.googleusercontent.com/d/1whLIfVi_KqxkFm3bvUnL5T10_5KTYPg-',
        'https://lh3.googleusercontent.com/d/1_AkSR2aW8T5BGp6ogRPfxQ-biFuBiQn_'
      ],
      videos: [
        'https://drive.google.com/file/d/10H_3JSjAm34PkCdFYt2oezPDoivbcE07/preview'
      ]
    },
    'Osaka': {
      images: [
        'https://lh3.googleusercontent.com/d/10QU9lzRIH-Eegst-BdVKOQ0sVP8BaNzl',
        'https://lh3.googleusercontent.com/d/10MhdsS4PaO8arB66MTOdsrl-0qDQzJv5',
        'https://lh3.googleusercontent.com/d/1tv84vEOMpLhr1lsDKBaDMFmIjtcIG0fY'
      ],
      videos: [

      ]
    },
    'El Nido': {
      images: [
        'https://lh3.googleusercontent.com/d/1lUHFDQBBBjplC2f1M61EaidLH70zW4y4',
        'https://lh3.googleusercontent.com/d/1NZ2l7hbjNHU5LdlmLkX1kTb0VT5JORWv',
        'https://lh3.googleusercontent.com/d/1bdc_dWQu2U5BYuEwAUoMgx3h8MQMRAH2'
      ],
      videos: [

      ]
    },
    'Montreal': {
      images: [
        'https://lh3.googleusercontent.com/d/1SEq_p1TOuJ-mf-LVIstxTtqXdA_DW9ys',
        'https://lh3.googleusercontent.com/d/16YEPTfhJTAO9YUiOdVa0qGVmyzT25P7r',
        'https://lh3.googleusercontent.com/d/11NDZMWAZBlCpBNl8FUGeyOi7oqZNhwnz',
        'https://lh3.googleusercontent.com/d/1-HdYgWlMayJSvuodizG9PX7t0fLTfuRM',
        'https://lh3.googleusercontent.com/d/1VxCe0aLfRlexWQSJYI-CCiCPbLHUfXWG',
        'https://lh3.googleusercontent.com/d/1QOyR-hlgQllREQ6jK24Isfr4bmILYk-T'
      ],
      videos: [

      ]
    },
    'La Paz': {
      images: [
        'https://lh3.googleusercontent.com/d/1PXRx8cElfQ7vTp5zwqrSDYsSovsQnNCg',
        'https://lh3.googleusercontent.com/d/1Z4JrV-PO2qCK-VXDMBSElkADLR-7Q-6M',
        'https://lh3.googleusercontent.com/d/1Oi_XNR7aGlnIv0DYHmkye-VmtSDGOlqm',
        'https://lh3.googleusercontent.com/d/17p0pakBYFsEKZl19E0zlcLs47dSTZ7gU',
        'https://lh3.googleusercontent.com/d/1CL5lE3m7NQePF7106A9VUeVkdaFrw1QT',
        'https://lh3.googleusercontent.com/d/1DrMgzkLkJqVKKZn6Etr2tiqRek-Hqiir'
      ],
      videos: [

      ]
    },
    'Toronto': {
      images: [
        'https://lh3.googleusercontent.com/d/1GWCCyli1KGz-03mE7S2fphBggvfYg1dk',
        'https://lh3.googleusercontent.com/d/1GwTQwBhstE2K0CLd_n4ZcQxNWrP04jCL',
        'https://lh3.googleusercontent.com/d/16GYz2XymbbT3iNUYJFfM5dgsCUTTqD6h',
        'https://lh3.googleusercontent.com/d/1rOAxVr5IQYQKDfllz9HzbSo89tfuQ1ox',
        'https://lh3.googleusercontent.com/d/1HxnIUyERuMCDpRPpMxCgEpy7zB6DK3dF'
      ],
      videos: [

      ]
    }
  };

  // Get images for the selected country, or a default image if not found
  var media = countryMedia[countryName] || {
    images: ['https://media.timeout.com/images/106181719/1024/768/image.webp'],
    videos: []
  };

  var data = {
    description: 'This is a description of ' + countryName,
    images: media.images,
    videos: media.videos
  };
  callback(data);
}


