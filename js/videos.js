// create loadCategories

const loadCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=> res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));   
};

//  creat DisplayCategoris
const displayCategories = (categories) => {
 categories.forEach((item) => {
    const categoryContainer = document.getElementById("categories");

    // creat  a button

    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;

    // add button

    categoryContainer.append(button);
});

};

// 
// videos load
const loadvideos = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res)=> res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));   
};
// card demo 
// const cardDemo = {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//       {
//         "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//         "profile_name": "Olivia Mitchell",
//         "verified": ""
//       }
//     ],
//     "others": {
//       "views": "100K",
//       "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
//   };
// display videos
const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');
    videos.forEach((videos) => {
        const card =document.createElement('div');
        card.classList = " card card-compact";
        card.innerHTML =`
          <figure class="h-[200px] relative">
    <img
      src=${videos.thumbnail} class="h-full w-full object-cover"
      alt="videos" />
      ${videos.others.posted_date?.length == 0 ? "" : `<span class="absolute right-2 bottom-2 bg-black text-white rounded p-1">
      ${videos.others.posted_date}
      </span>`}
      
  </figure>
  <div class="px-o py-2 flex gap-2">
      <div>
           <img class="w-10 h-10 rounded-full object-cover" src=${videos.authors[0].profile_picture} />  
           </img>  
      </div>
      <div>
         <h2 class="font-bold" >${videos.title}
         </h2>
         <div>
            <div class="flex gap-2">
            <p>${videos.authors[0].profile_name}
            </p>
            ${videos.authors[0].verified == true ? ` <img class="w-6 " src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>` : ""}
            </div>
         </div>
      </div>
        
   
  </div>
        `;
        videoContainer.append(card);
    });
}


loadCategories();
loadvideos();