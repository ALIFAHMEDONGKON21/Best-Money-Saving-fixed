function getvaluebyid(id)
{
    const inputvalue=document.getElementById(id).ariaValueMax;
    const parsenumber=parseFloat(inputvalue);
    return parsenumber;

}