import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon);

const svg = require.context('./svg', false, /\.svg$/);
const formIcon = require.context('./form-icon', false, /\.svg$/);

const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(svg);
requireAll(formIcon);
