import { Routes, Route } from "react-router-dom";
import AuthForm from "./pages/AuthForm";
import Navbar from "./components/Navbar";
import AddBlog from "./pages/AddBlog";
import BlogPage from "./pages/BlogPage";
import VerifyUser from "./components/VerifyUser";
import ProfilePage from "./pages/ProfilePage";
import EditProfile from "./pages/EditProfile";
import SearchBlogs from "./components/SearchBlogs";
import Setting from "./components/Setting";
import Home1 from "./components/Home1";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home1 />} />
        <Route path="/signin" element={<AuthForm type={"signin"} />} />
        <Route path="/signup" element={<AuthForm type={"signup"} />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/edit/:id" element={<AddBlog />} />
        <Route path="/search" element={<SearchBlogs />} />
        <Route path="/tag/:tag" element={<SearchBlogs />} />
        <Route path="/verify-email/:verificationToken" element={<VerifyUser />} />
        <Route path="/:username" element={<ProfilePage />} />
        <Route path="/:username/saved-blogs" element={<ProfilePage />} />
        <Route path="/:username/liked-blogs" element={<ProfilePage />} />
        <Route path="/:username/draft-blogs" element={<ProfilePage />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/setting" element={<Setting />} />
      </Route>
    </Routes>
  );
}

export default App;
