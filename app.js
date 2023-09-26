const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/launch', async (req, res) => {
    const websiteURL = 'https://www.ritesinsp.com/rbs/Login_Form.aspx'
    const {
        CaseNumber, PODate, PONumber, calldate, section,
        grade, Raillen, railclass, rake, PO_Qty,
        Rate, Consignee_Code, BPO_Code, f_s, irfc, 
    } = req.body;

    console.log(req.body)
    
    try {

        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: false,
            executablePath:"c:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"
        });
        const [page] = await browser.pages();
        await page.goto(websiteURL);
        // await page.waitForTimeout(1000);
        await page.waitForSelector('#txtUname', { timeout: 10000 });

        await page.type('#txtUname', 'CRTECH');
        await page.type('#txtPwd', 'BSPINSCR');
        await page.keyboard.press('Enter');

        // await page.waitForTimeout(2000);
        await page.waitForNavigation({ waitUntil: 'networkidle2' });

        const allPages = await browser.pages();    
        let Main_Page = null;
        for (const page of allPages) {  
            const pageUrl = page.url();
            if(pageUrl === "https://www.ritesinsp.com/rbs/MainForm.aspx?Role=1"){
                Main_Page = page                
            }
        }        

        // // -----------------------------------------------------------------------------------------
        
        // await hoverAndClick(Main_Page, 'TRANSACTIONS', 'Inspection & Billing', 'Purchase Order Form');
       
        // await page.waitForTimeout(3000);
        // let PO_Page = null
        // for (const page of allPages) {
        //     const pageUrl = page.url();
        //     // console.log(pageUrl)
        //     if(pageUrl === "https://www.ritesinsp.com/rbs/PurchesOrder1_Form.aspx"){
        //         PO_Page = page
        //     }
        // }

        // await PO_Page.type('#txtCsNo',CaseNumber);
        // await PO_Page.click('#btnSearchPO');
        
        // await PO_Page.waitForSelector('a'); // Wait for at least one anchor element
        
        // // Use a selector to locate the anchor tag link you want to click
        
        // const linkSelector = `a[href*="PurchesOrder_Form"][href*="${CaseNumber}"]`;

        // // const linkSelector = 'a[href="PurchesOrder_Form.aspx?CASE_NO=${variableValue}"]'; // Replace with the href of the specific link you want to click
        
        // await PO_Page.waitForSelector(linkSelector);
        
        // await PO_Page.click(linkSelector);
        // // console.log(CaseNumber)        
        
        // await page.waitForTimeout(2000);

        // let PO_Page_Case = null;
        // const PO_Page_Case_url = `https://www.ritesinsp.com/rbs/PurchesOrder_Form.aspx?CASE_NO=${CaseNumber}`;
       
        // for (const page of allPages) {
        //     const pageUrl = page.url();
        //     // console.log(pageUrl)
        //     if(pageUrl === PO_Page_Case_url){
        //         PO_Page_Case = page
        //     }
        // }

        // const PO_Date_Box = await PO_Page_Case.$('#txtPOdate');
        // const PO_Date = await PO_Page_Case.evaluate(input => input.value, PO_Date_Box);
        // const tableId = 'grdCB'
        // const table = await PO_Page_Case.$(`#${tableId}`);
        // // console.log('yahan')
        // const rowCount = await PO_Page_Case.evaluate(table => {
        //     const rows = table.querySelectorAll('tr');
        //     return rows.length;
        // }, table);

        // for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        //     const columns = await PO_Page_Case.evaluate((table, rowIndex) => {
        //       const row = table.querySelectorAll('tr')[rowIndex];
        //       const columns = Array.from(row.querySelectorAll('td')).map(column => column.textContent.trim());
        //       return columns;
        //     }, table, rowIndex);
        //     const regex = new RegExp(Consignee_Code);
        //     if (regex.test(columns[1])) {                
        //         await PO_Page_Case.click('#btnPODetails'); 
        //         break;
        //     }
        // }

        // await PO_Page_Case.waitForTimeout(2000);
        
        // // console.log(PO_Details_url)
        // for (const page of allPages) {
        //     const pageUrl = page.url();
            
        //     if(pageUrl.includes(CaseNumber)){
        //         PO_Details = page  
        //         break;                
        //     }                    
        // }

        // await page.waitForTimeout(5000); // time for pressing okay on page

    
        // const [description,list_desc_num,PL_No] = IC_Description(section, grade, Raillen, railclass);
        

        // await PO_Details.select('select#lstItemDesc', list_desc_num);
        
        // await page.waitForTimeout(5000);
        // await PO_Details.type(`#txtItemDescpt`, description);
        // await PO_Details.type(`#txtPLNO`,PL_No);
        // await PO_Details.select('select#ddlConsigneeCD', Consignee_Code);
        // await PO_Details.type(`#txtQty`,PO_Qty);
        // await PO_Details.keyboard.press('Tab');
        // await PO_Details.type(`#txtRate`,Rate);
        // for (let i = 0; i < 6; i++) {
        //     await PO_Details.keyboard.press('Tab');
        // }
        // await PO_Details.type (`#txtSaleTaxPre`,'18');
        // for (let i = 0; i < 6; i++) {
        //     await PO_Details.keyboard.press('Tab');
        // }
        // await PO_Details.type (`#txtExtDelvDate`,'31-03-2024'); 

        // const outerTable = await PO_Details.$('table#Table1');
        // const innerTable = await outerTable.$('table#DgPO');

       
        // const rows = await innerTable.$$('tr');
        // const ic_made = (rows.length);
        
        
        
        // await PO_Details.click('#btnSave');
        // await page.waitForTimeout(5000);

        // // //Accessing last Part and deleting it.. till it goes real

        // // const last_part = `a[id*="DgPO_ctl"][id*="${ic_made + 1}"][id*="Hyperlink2"]`;   
        
        // // await PO_Details.click(last_part);    
        // // let PO_Part_Page = null;
        // // await page.waitForTimeout(2000);

        // // for (const page of allPages) {
        // //     const pageUrl = page.url();            
        // //     if(pageUrl.includes(CaseNumber)){
        // //         PO_Part_Page = page  
        // //         break;                
        // //     }                    
        // // } 
        // // await page.waitForTimeout(2000);
        // // await PO_Part_Page.click(`#btnDelete`);

        // // //Accessing last Part and deleting it.. till it goes real

        // // await page.waitForTimeout(4000);

        // // await PO_Part_Page.click(`#WebUserControl11_HyperLink1`) // Change PO_Part_page to PO_details when deleting part is commented
        // await PO_Details.click(`#WebUserControl11_HyperLink1`) 

        // await page.waitForTimeout(2000);

        // // --------------------------------------------------------

        await hoverAndClick(Main_Page, 'TRANSACTIONS', 'Inspection & Billing', 'Call Registration/Cancellation');

        const call_page_url = 'https://www.ritesinsp.com/rbs/Call_Register_Edit.aspx'
        let call_page = null;
        await page.waitForTimeout(2000);

        for (const page of allPages) {
            const pageUrl = page.url();            
            if(pageUrl === call_page_url){
                call_page = page  
                break;                
            }                    
        } 

        const format_call_date = calldate.split('-').reverse().join('-');
        await call_page.type(`#txtCaseNo`,CaseNumber)
        await call_page.type(`#txtDtOfReciept`,format_call_date)

        // // -------------------------------------------------------------------
        // await call_page.click(`#btnAdd`);

        // let new_call_page = null;

        // await page.waitForTimeout(2000);

        // for (const page of allPages) {
        //     const pageUrl = page.url();            
        //     if(pageUrl.includes(CaseNumber)){
        //         new_call_page = page  
        //         break;                
        //     }                    
        // } 
        
        
        // await new_call_page.select('select#lstIE', '557');
        // await new_call_page.select('select#ddlDept', 'C');
        // if (f_s === 'f') {
        //     await new_call_page.click('#rdbFinal');
        //   } else if (f_s === 's') {
        //     await new_call_page.click('#rdbStage');
        // }
        // await page.waitForTimeout(500);

        // const irfcSelect = await new_call_page.$('select#ddlIRFC');
        // if (irfcSelect) {
        
        //     if(irfc === 'funded'){
        //         await new_call_page.select('select#ddlIRFC', 'Y');
        //     }else{
        //         await new_call_page.select('select#ddlIRFC', 'N');
        //     }
        // }
        // await new_call_page.type('#txtMName','45338') ;  
        // await new_call_page.click('#btnFCList');
        // await page.waitForTimeout(1000)
        // await new_call_page.click (`#btnSave`); 
        // await page.waitForTimeout(3000)
        // await new_call_page.click (`#btnCDetails`);

        // // -------------------------------------------------------------------------
        

        await call_page.click(`#btnSearch`);
        await call_page.waitForSelector('#grdCNO_ctl02_Hyperlink2');
        await call_page.click('#grdCNO_ctl02_Hyperlink2');
        await call_page.waitForSelector('#btnMod');
        await call_page.click(`#btnMod`);

        

        


        await new_call_page.click(`#WebUserControl11_HyperLink2`)

        await page.waitForTimeout(3000)
        // await page.screenshot({ path: 'screenshot.png' });

        await ie_login(CaseNumber,format_call_date)






        await page.waitForTimeout(2000);
        await browser.close();
        res.send(`Launched ${CaseNumber} `);
    } catch (error) {
        res.status(500).send(`Error launching ${websiteURL}`);
    }
});



async function ie_login(CaseNumber) {  
    
    const call_serial_num = '2'
    const call_serial_num_txt = "SNO="+ call_serial_num

    console.log(CaseNumber,"hello case")

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: false,
        executablePath:"c:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"
    });
    const [page] = await browser.pages();
    await page.goto("https://www.ritesinsp.com/RBS/IE_Login_Form.aspx");

    await page.waitForTimeout(2000);
    await page.type('#txtUserId','88888');
    await page.type('#txtPwd','88888');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);

    const allPages = await browser.pages();
    const pass_page1 = allPages.find((page) => page.url() === "https://www.ritesinsp.com/RBS/IE_Instructions.aspx?pIECD=908&pIENAME=CR/BHILAI");
    pass_page1.click('#btnNext')

    await page.waitForTimeout(3000)

    const allPages1 = await browser.pages();
    const ie_login_menu = allPages1.find((page) => page.url() === "https://www.ritesinsp.com/RBS/IE_Menu.aspx");

    await page.waitForTimeout(2000)   
    

    await hoverAndClick(ie_login_menu, 'Calls Status', 'Calls Status', 'Sorted on Call Date');

    await page.waitForTimeout(3000)
    

    const allPages2 = await browser.pages();
    const call_pending = allPages2.find((page) => page.url() === "https://www.ritesinsp.com/RBS/Calls_Marked_To_IE.aspx?ACTION=C");
    
    await call_pending.screenshot({ path: 'screenshot.png' });

    await page.waitForTimeout(3000)
    
    const call_table = await call_pending.$('body > table:nth-child(2)');
    
    const rows = await call_table.$$('tr');
    
    let shouldBreak = false; // Flag variable to control the outer loop
    let row_matching = null;

    for (let rowIndex = 1; rowIndex < rows.length && !shouldBreak; rowIndex++) {
        const row = rows[rowIndex];
        const columns = await row.$$('td'); // Get all columns in the row

        const row_data = [];

        for (const column of columns) {
            const text = await column.evaluate((cell) => cell.textContent); // Get the text content of the column
            row_data.push(text);
        }
        

        if (row_data[12].includes(CaseNumber) && row_data[14].includes("Accepted")) {
            shouldBreak = true; // Set the flag to true to break out of both loops 
            row_matching = rowIndex+1; 
        }
    }
    
    
    const rowSelector = `body > table:nth-child(2) > tbody > tr:nth-child(${row_matching})`;   
    const rowHandle = await call_pending.$(rowSelector);
    const linkSelector = `a:first-child`; // Assuming the link is in the first column
    const linkHandle = await rowHandle.$(linkSelector);
    await linkHandle.click();





    await page.waitForTimeout(5000)
    





    



    

    await browser.close();
    return;
}
  











//allied functions

async function hoverAndClick(page, hoverText1, hoverText2, clickText) {
    await page.waitForTimeout(500)
    const hoverDiv1 = await page.$x(`//div[contains(text(), '${hoverText1}')]`);
    await hoverDiv1[0].hover();
    await page.waitForTimeout(500)
    const hoverDiv2 = await page.$x(`//div[contains(text(), '${hoverText2}')]`);
    await hoverDiv2[0].hover();
    await page.waitForTimeout(500)
    const clickDiv = await page.$x(`//div[contains(text(), '${clickText}')]`);
    await clickDiv[0].click();
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



function IC_Description(section, grade, Raillen, railclass) {
    let description = null; // Use 'let' instead of 'const' to allow reassignment
    let list_desc_num = null; 
    let PL_No = null; 
    
    if(section==="60E1"){
        PL_No='1'
    }else{PL_No='2'}

    if (Raillen === "260m" && section === '60E1') {        
        description = "(PRIORITY PROGRAMME- , RAKE NO. )   1)  60 E1 R-260 GRADE RAILS (260M) WITH 100% ULTRASONICALLY TESTED SATISFYING THE REQUIREMENTS OF IRS SPECIFICATION NO. IRS-T-12-2009 CL-A PRIME QUALITY RAILS WITH LATEST AMENDMENTS 2) ALL FLASH BUTT WELDED RAIL JOINTS AND THEIR USFD TESTING ARE SATISFYING THE REQUIREMENTS OF IRFBWM 2012 WITH LATEST AMENDMENTS";
        list_desc_num = '8'
        
    }else if(Raillen === "260m" && section === 'IRS52'){
        description = " 52 kg rake";
        list_desc_num = '7'
    }else if(section === "60E1" && grade === "R260" && Raillen == "26m" && railclass =="A"){
        description = " 60e1 r260 26m cl A";
        list_desc_num = '4'
    } else if(section === "60E1" && grade === "R260" && Raillen == "26m" && railclass =="B"){
        description = " 60e1 r260 26m cl B";
        list_desc_num = '4'
    }else if(section === "60E1" && grade === "R260" && Raillen == "13m" && railclass =="A"){
        description = "60e1 r260 13m cl A";
        list_desc_num = '2'
    }else if(section === "60E1" && grade === "R260" && Raillen == "13m" && railclass =="B"){
        description = "60e1 r260 13m cl B";
        list_desc_num = '2'
    }else if(section === "60E1" && grade === "880" && Raillen == "26m" && railclass =="A"){
        description = "60e1 880 26m cl A";
        list_desc_num = '4'
    } else if(section === "60E1" && grade === "880" && Raillen == "26m" && railclass =="B"){
        description = "60e1 880 26m cl B";
        list_desc_num = '4'
    }else if(section === "60E1" && grade === "880" && Raillen == "13m" && railclass =="A"){
        description = "60e1 880 13m cl A";
        list_desc_num = '2'
    }else if(section === "60E1" && grade === "880" && Raillen == "13m" && railclass =="B"){
        description = " 60e1 880 13m cl B";
        list_desc_num = '2'
    }else if(section === "IRS52" && grade === "R260" && Raillen == "26m" && railclass =="A"){
        description = "irs52 r260 26m cl A";
        list_desc_num = '3'
    } else if(section === "IRS52" && grade === "R260" && Raillen == "26m" && railclass =="B"){
        description = " irs5 r260 26m cl B";
        list_desc_num = '3'
    }else if(section === "IRS52" && grade === "R260" && Raillen == "13m" && railclass =="A"){
        description = "irs52 r260 13m cl A";
        list_desc_num = '1'
    }else if(section === "IRS52" && grade === "R260" && Raillen == "13m" && railclass =="B"){
        description = " irs52 r260 13m cl B";
        list_desc_num = '1'
    }else if(section === "IRS52" && grade === "880" && Raillen == "26m" && railclass =="A"){
        description = " irs52 880 26m cl A";
        list_desc_num = '3'
    } else if(section === "IRS52" && grade === "880" && Raillen == "26m" && railclass =="B"){
        description = "irs52 880 26m cl B";
        list_desc_num = '3'
    }else if(section === "6IRS52" && grade === "880" && Raillen == "13m" && railclass =="A"){
        description = " 52KG (13M) GR 880 RAILS TO IRS SPECIFICATION NO. IRS T-12-2009 CL B PRIME QUALITY RAILS 100% ULTRASONICALLY TESTED & FOUND SATISFACTORY";
        list_desc_num = '1'
    }else if(section === "IRS52" && grade === "880" && Raillen == "13m" && railclass =="B"){
        description = "irs52 880 13m cl B";
        list_desc_num = '1'
    }
    return [description,list_desc_num,PL_No]; // Return the description at the end
}




