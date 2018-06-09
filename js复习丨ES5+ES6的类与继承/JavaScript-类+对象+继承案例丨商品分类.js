class Clother{
    constructor(tag,size,price,count){
        this._tag=tag;
        this._size=size;
        this._price=price;
        this._count=count;
    }
    setCount(new_count){
        this._count=new_count;
    }
    updateImage(new_image_url){
        this._image_url=new_image_url;
    }
}
class Dress extends Clother{
    constructor(tag,size,price,count){
        super(tag,size,price,count);
    }
}
class TShirt extends Clother{
    constructor(tag,size,price,count){
        super(tag,size,price,count);
    }
}
let dress_lib=[];
dress_lib[0]=new Dress("个性风裙子","XXL","150","500");
dress_lib[1]=new Dress("简约风裙子","XXS","80","1000");

let tShirt_lib=[];
tShirt_lib[0]=new TShirt("清凉T恤","XL","38","800");
tShirt_lib[1]=new TShirt("韩版T恤","XS","25","300");
tShirt_lib[2]=new TShirt("男生T恤","S","15","500");
tShirt_lib[3]=new TShirt("女生T恤","M","45","700");
tShirt_lib[4]=new TShirt("个性T恤","L","28","650");

/*过滤器filter：找出个性的裙子和T恤*/
let object_style="个性";
let keyword_filter=(class_lib)=>{
    if(class_lib._tag.search(object_style) > -1){       //bug原因：属性名写错，养成习惯属性名用“_ + name”
        return true;
    }else{
        return false;
    }
};
let price_filter=(class_lib)=>{
    return (class_lib._price>30 && class_lib._price<100);
};

console.log("根据关键词‘个性’筛选后：");
console.log(dress_lib.filter(keyword_filter));
console.log(tShirt_lib.filter(keyword_filter));

console.log("根据价格筛选后：");
console.log(dress_lib.filter(price_filter));
console.log(tShirt_lib.filter(price_filter));







