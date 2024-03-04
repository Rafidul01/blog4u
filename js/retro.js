console.log("hello ami aya porchii!");
const postContainer = document.getElementById("post-container");
// faching data
const allPosts = async (inputValue) => {
    postContainer.innerHTML=``;
    const result = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${inputValue}`);
    const data = await result.json();
    const posts = data.posts;
    posts.forEach(post => {
        appendPosts(post);

    });
    // appendPosts(posts);
    
} 
allPosts('');
const appendPosts = (post) => {
    // console.log(post);
    // const titleId = post.id +"Title";
    // const viewId = post.id +"View";
    // console.log(titleId, viewId);
    let color = "#FF3434";
    if(post.isActive){
        color = "#10B981";
    }
    const postCards = document.createElement('div');
    postCards.classList=`bg-[#F3F3F5] hover:bg-[#797DFC1A] p-[40px] flex flex-col lg:flex-row gap-[24px] rounded-[24px] max-w-[772px]`;
    postCards.innerHTML=`
    <div>
        <!-- Profile picture section  -->
        <div class="w-[72px] h-[72px] bg-[url('${post.image}')] bg-no-repeat bg-cover rounded-2xl relative">
            <div class="bg-[${color}] w-[18px] h-[18px] rounded-full absolute left-[57px] bottom-[57px] border-2" style=""> 
            </div>
        </div>
    </div>
    <div class="max-w-[596px]">
        <div class="flex gap-[20px] inter text-[#12132DCC] lg:font-medium text-sm mb-[12px]">
            <p># ${post.category}</p>
            <p>Author : ${post.author.name}</p>
        </div>
        <h1 id="${post.id}Title" class="mulish font-bold text-[20px] mb-[16px] text-[#12132D]">${post.title}</h1>
        <p class="inter text-base font-normal mb-[20px] text-[#12132D99] lg:w-[569px]">${post.description}</p>
        <hr class="border border-dashed mb-[20px]">
        <div class="flex items-center justify-between text-[#12132D99] inter font-normal">
            <div class="flex gap-[25px]">
                <p><i class="fa-regular fa-message"></i> ${post.comment_count}</p>
                <p id="${post.id}View"><i class="fa-regular fa-eye"></i> ${post.view_count}</p>
                <p><i class="fa-regular fa-clock"></i>${post.posted_time}</p>
            </div>
            <button  id="${post.id}" onclick="titleView(${post.id})" class="btn w-[50px] h-[50px]  text-[28px] bg-green-500 rounded-full text-white"><i class="fa-solid fa-envelope-open"></i></button>
        </div>
    </div>
    `;
    postContainer.appendChild(postCards);
}


const searchByCategory = () => {
    // console.log("vai guta diche");
    const inputFild = document.getElementById("search-value");
    const inputValue = inputFild.value;
    inputFild.value = '';
    allPosts(inputValue);
    console.log(inputValue);
}
const titleContainer = document.getElementById("title-container");
const titleView = (id) => {
    console.log(id);
    const titleCount = document.getElementById("title-count");
    const titleCountValue = parseInt(titleCount.innerText);
    titleCount.innerText=titleCountValue+1;
    const titleId = id +"Title";
    const viewId = id+"View";
    console.log(document.getElementById(titleId).innerText);
    const titleCards = document.createElement('div');
    titleCards.classList=`p-[16px] flex bg-white rounded-[16px]`;
    titleCards.innerHTML=`
    <h1 class="mulish font-semibold text-base  text-[#12132D]">${document.getElementById(titleId).innerText}</h1>
    <p class="text-[#12132D99] inter font-normal flex items-center gap-2"><i class="fa-regular fa-eye "></i> ${document.getElementById(viewId).innerText}</p>
    `;
    titleContainer.appendChild(titleCards);

}