async function doGetRequest() {
  try {
    let res = await axios.get("https://api.publicapis.org/entries");

    let data = await res.data;
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}
/*

async function doGetRequest() {
  try {
    let res = await axios.get("https://localhost:8080/getExternalRequest");
    
    let data = res.data;
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}
*/

async function getMainPage() {
  try {
    let res = await axios.get("http://localhost:8080/main");

    let data = await res.data;
    window.location = data;
  } catch (err) {
    console.log(err.message);
  }
}
async function getPage1() {
  try {
    let res = await axios.get("http://localhost:8080/page1");

    let data = await res.data;
    window.location = data;
  } catch (err) {
    console.log(err.message);
  }
}
async function getPage2() {
  try {
    let res = await axios.get("http://localhost:8080/page2");

    let data = await res.data;
    window.location = data;
  } catch (err) {
    console.log(err.message);
  }
}
