// Function to update the link
    function updateLink(newUrl) {
        document.getElementById('omsLink').href = newUrl;
        document.getElementById('calendatlink').href = newUrl;
    }  
      
      
   //MODAL FUNCTION  
    function openModal(content) {
      document.getElementById('modalText').innerText = content;
      document.getElementById('modalGrades').style.display = "none"; // Hide grades by default
      document.getElementById('modalOmsLink').style.display = "none"; // Hide OMS link by default
      document.getElementById('modalRVF').style.display = "none"; // Hide Teachers File by default
      document.getElementById('modalRawScore').style.display = "none"; // Hide Raw Score File by default
      document.getElementById('modalDocuments').style.display = "none"; // Hide Raw Score File by default
      document.getElementById('modalLIS').style.display = "none"; // Hide Raw Score File by default
      document.getElementById('modalECR').style.display = "none"; // Hide Raw Score File by default
//      document.getElementById('modalHYDRUS').style.display = "none";    
      if (content === 'CONSOLIDATED GRADES') {
        document.getElementById('modalGrades').style.display = "block"; // Show grades for consolidated
      }
      else if (content === 'ONLINE MONITORING SYSTEM (OMS)') {
        document.getElementById('modalOmsLink').style.display = "block"; // Show OMS link
      }
      else if (content === 'Record Video Folder') {
        document.getElementById('modalRVF').style.display = "block"; // Show Teacher's Files
      }
      else if (content === 'Raw Scores') {
        document.getElementById('modalRawScore').style.display = "block"; // Show ROW SCORE Files
      }
      else if (content === 'ECR') {
        document.getElementById('modalECR').style.display = "block"; // Show ROW SCORE Files
      }
      else if (content === 'DOCUMENTS') {
        document.getElementById('modalDocuments').style.display = "block"; // Show DOCUMENTS Files
      }
      else if (content === 'LIS COORDINATOR') {
        document.getElementById('modalLIS').style.display = "block"; // Show LIS Files
      }
        
        
     else if (content === 'HYDRUS') {
        document.getElementById('modalHYDRUS').style.display = "block"; // Show ROW SCORE Files
      } 
     else if (content === 'PHOENIX') {
        document.getElementById('modalPHOENIX').style.display = "block"; // Show ROW SCORE Files
      }   
        
    else if (content === 'AQUILA') {
        document.getElementById('modalAQUILA').style.display = "block"; // Show ROW SCORE Files
      } 
        
    else if (content === 'LYNX') {
        document.getElementById('modalLYNX').style.display = "block"; // Show ROW SCORE Files
      }    
        
   else if (content === 'AMETHYST') {
        document.getElementById('modalAMETHYST').style.display = "block"; // Show ROW SCORE Files
      }
        
    else if (content === 'SAPPHIRE') {
        document.getElementById('modalSAPPHIRE').style.display = "block"; // Show ROW SCORE Files
      }
    
    else if (content === 'GARNET') {
        document.getElementById('modalGARNET').style.display = "block"; // Show ROW SCORE Files
      }
        
    else if (content === 'CALLISTO') {
        document.getElementById('modalCALLISTO').style.display = "block"; // Show ROW SCORE Files
      }
        
    else if (content === 'GANYMEDE') {
        document.getElementById('modalGANYMEDE').style.display = "block"; // Show ROW SCORE Files
      } 
        
    else if (content === 'EUROPA') {
        document.getElementById('modalEUROPA').style.display = "block"; // Show ROW SCORE Files
      }     
    
    else if (content === 'ACHELOUS') {
        document.getElementById('modalACHELOUS').style.display = "block"; // Show ROW SCORE Files
      }
        
    else if (content === 'ARTEMIS') {
        document.getElementById('modalARTEMIS').style.display = "block"; // Show ROW SCORE Files
      } 
        
    else if (content === 'ARES') {
        document.getElementById('modalARES').style.display = "block"; // Show ROW SCORE Files
      }   
    else if (content === 'JOBS') {
        document.getElementById('modalJOBS').style.display = "block"; // Show ROW SCORE Files
      }     
    
    else if (content === 'FRANKLIN') {
        document.getElementById('modalFRANKLIN').style.display = "block"; // Show ROW SCORE Files
      }
        
    else if (content === 'RIZAL') {
        document.getElementById('modalRIZAL').style.display = "block"; // Show ROW SCORE Files
      } 
        
    else if (content === 'EINSTEIN') {
        document.getElementById('modalEINSTEIN').style.display = "block"; // Show ROW SCORE Files
      }    
        
     else if (content === 'EQUINOX') {
        document.getElementById('modalEQUINOX').style.display = "block"; // Show ROW SCORE Files
      } 
        
    else if (content === 'MERAKI') {
        document.getElementById('modalMERAKI').style.display = "block"; // Show ROW SCORE Files
      }   
        
    else if (content === 'VERITAS') {
        document.getElementById('modalVERITAS').style.display = "block"; // Show ROW SCORE Files
      }     
    
    else if (content === 'STELLARIS') {
        document.getElementById('modalSTELLARIS').style.display = "block"; // Show ROW SCORE Files
      }
        
    else if (content === 'NEXA') {
        document.getElementById('modalNEXA').style.display = "block"; // Show ROW SCORE Files
      } 
        
    else if (content === 'SOLANA') {
        document.getElementById('modalSOLANA').style.display = "block"; // Show ROW SCORE Files
      }     
        
        
        

      document.getElementById('myModal').style.display = "block";
    }
      
    

    function closeModal() {
      document.getElementById('myModal').style.display = "none";
      document.getElementById('modalHYDRUS').style.display = "none";
      document.getElementById('modalPHOENIX').style.display = "none";
      document.getElementById('modalAQUILA').style.display = "none";
      document.getElementById('modalLYNX').style.display = "none";
      document.getElementById('modalAMETHYST').style.display = "none";
      document.getElementById('modalSAPPHIRE').style.display = "none";
      document.getElementById('modalGARNET').style.display = "none";
      document.getElementById('modalCALLISTO').style.display = "none";
      document.getElementById('modalGANYMEDE').style.display = "none";
      document.getElementById('modalEUROPA').style.display = "none"; 
      document.getElementById('modalACHELOUS').style.display = "none";
      document.getElementById('modalARTEMIS').style.display = "none";
      document.getElementById('modalARES').style.display = "none"; 
      document.getElementById('modalJOBS').style.display = "none"; 
      document.getElementById('modalFRANKLIN').style.display = "none";
      document.getElementById('modalRIZAL').style.display = "none";
      document.getElementById('modalEINSTEIN').style.display = "none";   
      document.getElementById('modalMERAKI').style.display = "none";
      document.getElementById('modalEQUINOX').style.display = "none"; 
      document.getElementById('modalVERITAS').style.display = "none"; 
      document.getElementById('modalSTELLARIS').style.display = "none";
      document.getElementById('modalNEXA').style.display = "none";
      document.getElementById('modalSOLANA').style.display = "none";   
    }

    // Close the modal when clicking outside of it
    window.onclick = function(event) {
      if (event.target == document.getElementById('myModal')) {
        closeModal();
      }
    }

    function openTab(tabId) {
      // Hide all tab contents
      document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
      });
      
      // Remove active class from all buttons
      document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
      });
      
      // Show selected tab and make button active
      document.getElementById(tabId).classList.add('active');
      event.currentTarget.classList.add('active');

    }






