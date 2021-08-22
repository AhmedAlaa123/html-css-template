var myname=document.getElementById('testemonial_name');
var mytext=document.getElementById('testemonial_text');


var mylist=[
    {text:'Lorem ipsum sit amet,ea doming untill epicuri iudicabit nam,le usu virtute placerat. Purto brute disputando cu est, Lorem ipsum sit amet,ea doming untill epicuri iudicabit nam,le usu virtute placerat. Purto brute disputando cu est, Lorem ipsum sit amet,ea doming untill epicuri iudicabit nam,le usu virtute placerat. Purto brute disputando cu est,Lorem ipsum sit amet,ea doming untill epicuri iudicabit nam,le usu virtute placerat. Purto brute disputando cu est.',name:'Ahmed Alaa'},
    {text:'Lorem ipsum sit amet,ea doming untill epicuri iudicabit nam,le usu virtute placerat. Purto brute disputando cu est, Lorem ipsum sit amet,ea doming untill epicuri iudicabit nam,le usu virtute placerat. Purto brute disputando cu est, Lorem ipsum sit amet,ea doming untill epicuri iudicabit nam,le usu virtute placerat. Purto brute disputando cu est,Lorem ipsum sit amet,ea doming untill epicuri iudicabit nam,le usu virtute placerat. Purto brute disputando cu est.',name:'Ahmed Ali'},
    {text:'Lorem ipsum sit amet,ea doming untill epicuri iudicabit nam,le usu virtute placerat. Purto brute disputando cu est, Lorem ipsum sit amet,ea doming untill epicuri iudicabit nam,le usu virtute placerat. Purto brute disputando cu est, Lorem ipsum sit amet,ea doming untill epicuri iudicabit nam,le usu virtute placerat. Purto brute disputando cu est,Lorem ipsum sit amet,ea doming untill epicuri iudicabit nam,le usu virtute placerat. Purto brute disputando cu est.',name:'Hessian Alaa'},
    {text:'Lorem ipsum sit amet,ea doming untill epicuri iudicabit nam,le usu virtute placerat. Purto brute disputando cu est, Lorem ipsum sit amet,ea doming untill epicuri iudicabit nam,le usu virtute placerat. Purto brute disputando cu est, Lorem ipsum sit amet,ea doming untill epicuri iudicabit nam,le usu virtute placerat. Purto brute disputando cu est,Lorem ipsum sit amet,ea doming untill epicuri iudicabit nam,le usu virtute placerat. Purto brute disputando cu est.',name:'Hassan Ibrahime'},

];
var myindex=0;
function showSlid()
{
    if(myindex+1==mylist.length)myindex=0;
    else myindex++;
    changeActive(myindex)
    // var list=document.getElementsByClassName('bolte');
    // for(var x=0;x<list.length;x++)
    // list[x].className='bolte';
    // list[myindex].className='bolte active';
  
    // myname.innerHTML=mylist[myindex].name;
    // mytext.innerHTML=mylist[myindex].text
    setTimeout(showSlid,3000);
}
showSlid();

function changeActive(index)
{


    var list=document.getElementsByClassName('bolte');
    for(var x=0;x<list.length;x++)
    list[x].classList.remove('active');
    list[index].classList.add('active');
    myname.innerHTML=mylist[index].name;
    mytext.innerHTML=mylist[index].text
    myindex=index
}