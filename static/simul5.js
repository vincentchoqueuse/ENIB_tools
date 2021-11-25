document.addEventListener("DOMContentLoaded", function() {

    document.addEventListener('input', function (evt) {
    
        var element = evt.target
        var tr = element.closest('tr')
    
        if (tr !== null)
        {
        if (tr.classList.contains("order2"))
        {
          var fc = document.querySelector("#vfc").value;
          var FSF = tr.querySelector('.vFSF').value;
          var Q = tr.querySelector('.vQ').value;
          var alpha = tr.querySelector('.valpha').value;
          var C1 = 0.000000001*tr.querySelector('.vC1').value;
    
          var w0 = 2*Math.PI*FSF*fc;
          var f0 = FSF*fc;
          var m = 1/(2*Q);
          var term1 = 4*(Q*Q)
    
          //first affectation
          var element_4Q2 = tr.querySelector('.v4Q2');
          var element_m = tr.querySelector('.vm');
          var element_f0 = tr.querySelector('.vf0');
          element_4Q2.value = term1;
          element_m.value = m;
          element_f0.value = f0;
    
          if (alpha > term1)
          {
            element_4Q2.classList.remove('invalid');
            element_4Q2.classList.add('valid');
          }
          else
          {
            element_4Q2.classList.add('invalid');
            element_4Q2.classList.remove('valid');
          }
    
          //second affectation
          var C2 = C1*alpha;
          var k = (alpha-2*Q*Q-Math.sqrt(alpha*(alpha-term1)))/(2*Q*Q);
          var R2 = 1/(w0*C1*Math.sqrt(alpha*k));
          var R1 = k*R2;
    
          var element_k = tr.querySelector('.vk');
          var element_C2 = tr.querySelector('.vC2');
          var element_R2 = tr.querySelector('.vR2');
          var element_R1 = tr.querySelector('.vR1');
    
          element_C2.value = 1000000000*C2;
          element_R2.value = R2;
          element_R1.value = R1;
          element_k.value = k;
    
        }
        if (tr.classList.contains("order1"))
          {
    
            var fc = document.querySelector("#vfc").value;
            var FSF = tr.querySelector('.vFSF').value;
            var C1 = 0.000000001*tr.querySelector('.vC1').value;
    
            var w0 = 2*Math.PI*FSF*fc;
            var f0 = FSF*fc;
            var R1 = 1/(w0*C1)
    
            var element_f0 = tr.querySelector('.vf0');
            var element_R1 = tr.querySelector('.vR1');
            element_R1.value = R1;
            element_f0.value = f0;
          }
        }
    });
    
});
    