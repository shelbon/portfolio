  export default function rescaleCaptcha(parent,recaptcha){
   
          let width = parent.offsetWidth;
          let scale;
          if (width < 302) {
            scale = width / 302;
          } else{
            scale = 1.0; 
          }
      
          recaptcha.style.transform='scale(' + scale + ')';
          recaptcha.style.WebkitTransform= 'scale(' + scale + ')';
          recaptcha.style.transformOrigin='0 0';
          recaptcha.style.WebkitTransformOrigin= '0 0';
  }
 