import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ParentRoute from './ParentRoute/ParentRoute'
import CourseList from './Pages/CourseList';
import data from './data.json'
import { useState } from 'react';

function App() {

  let [dataList, setDataList] = useState(data);
  const handleChange = (type) => {
    if (type !== 'All') {
      dataList = data.filter(element => element.courseType === type);
    } else {
      dataList = data;
    }
    setDataList(dataList)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ParentRoute handleChange={handleChange} />}>
            <Route
              path="/"
              element={
                <>
                  {/* <h1>All Courses</h1> */}
                  <CourseList dataList={dataList} action={'All'} />
                </>
              }
            />
            <Route
              path="/fsd"
              element={
                <>
                  {/* <h1>FSD Courses</h1> */}
                  <CourseList dataList={dataList} action={'FSD'} />
                </>
              }
            />
            <Route
              path="/dataScience"
              element={
                <>
                  {/* <h1>Data Science Courses</h1> */}
                  <CourseList dataList={dataList} action={'DataScience'} />
                </>
              }
            />
            <Route
              path="/cyberSecurity"
              element={
                <>
                  {/* <h1>Cyber Security Courses</h1> */}
                  <CourseList dataList={dataList} action={'CyberSecurity'} />
                </>
              }
            />
            <Route
              path="/career"
              element={
                <>
                  {/* <h1>Career Courses</h1> */}
                  <CourseList dataList={dataList} action={'Career'} />
                </>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App
