// Core Packages
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Assets 引入一些静态的部分 
// ** import icons 放在 icons 文件夹下
import BackSvg from "@icons/BackSvg";
import SearchSvg from "@icons/SearchSvg";

// ** import assets 放在 svg 文件夹下
import googleSvg from "@svg/google.svg";
import AbsoluteLogo from "@svg/AbsoluteLogo.svg";
import frontGirl from "@illustration/FrontGirl.svg";
import userImage from "@illustration/userImage.webp";

// Third-Party Packages 第三方包 
// ** import third party
import { toast } from "react-toastify";
import { CircularProgress } from "@nextui-org/react";

// Shared Components  分享组件 shared 相关的都放在 shared 文件夹下
// ** import shared components
import Image from "@shared/Image";
import Button from "@shared/Button";
import Typography from "@shared/Typography";

// Components 用的非常多  引用组件 
// ** import components
import AddFoodItem from "@components/AddFoodItem";
import CalendarPopup from "@components/CalendarPopup";

// Sub Pages/Sections
// ** import sub pages/sections
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

// 配置文件 Configuration Files （存放不想暴露给别人或者 不想暴露给线上的东西）
// ** import config
import env from "@src/config";


// State Management 状态管理
// ** import state manager
import { useDispatch } from "react-redux";
import { setLocale } from "@src/redux/slices/language";



// Utilities and Libraries 公共 库 
// ** import utils
import { useStorableState } from "@utils/useStorable";

// Custom Hooks  utils 也是用的非常多的  将公共的方法 汇集起来 
// ** import hooks
import useStorable from "@src/utils/useStorable";


// APIs 
// ** import apis
import { getUserProfileApi } from "@api/auth";
import { confirmOrderApi } from "@api/cart";


