<template>
    <navbar
        position="fixed"
        type="primary"
        :transparent="transparent"
        :color-on-scroll="colorOnScroll"
        menu-classes="ml-auto"
    >
        <template slot-scope="{ }" class="bar">
            <router-link v-popover:popover1 class="navbar-brand" to="/"><img class="img-fluid float-right" src="../assets/img/solablogo.png" alt="logo"></router-link>
            <el-popover
                ref="popover1"
                popper-class="popover"
                placement="bottom"
                width="200"
                trigger="hover"
            >
                <div class="popover-body">
                    Designed by SolabTechnologies. Coded by Moh
                </div>
            </el-popover>
        </template>
        <template slot="navbar-menu">
            <li class="nav-item">
                <a
                class="nav-link"
                href="/"
                >
                <p>Home</p>
                </a>
            </li>
            <li class="nav-item">
                <a
                class="nav-link"
                href="#"
                >
                <p>Features</p>
                </a>
            </li>
            <li class="nav-item">
                <a
                class="nav-link"
                href="#"
                >
                <p>Payment & Pricing</p>
                </a>
            </li>
            <drop-down
                tag="li"
                title="Help"
                class="nav-item"
            >
                <nav-link to="/">
                Download Apps
                </nav-link>
                <nav-link to="/">
                Blog
                </nav-link>
                <nav-link to="/">
                Faq
                </nav-link>
                <nav-link to="/">
                About us
                </nav-link>
                <nav-link to="/">
                Contact
                </nav-link>
                <nav-link to="/">
                Feedback Form
                </nav-link>                
            </drop-down>

            <drop-down
                tag="li"
                title="More"
                class="nav-item"
            >   
                <nav-link to="https://www.solabtechnologies.com">
                    Official Website
                </nav-link>
                <nav-link to="/">
                    WatuPay
                </nav-link>
                <nav-link to="/">
                    Trutypes
                </nav-link>
            </drop-down>

            <li class="nav-item">
                <a
                class="nav-link"
                href="/login"
                >
                <p>Log in </p>
                </a>
            </li>

            <li class="nav-item">
                <nav-link to="/signup" class="nav-link btn btn-neutral">
                   <p> Sign up </p>
                </nav-link>
            </li>          
        </template>
    </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped>
.img-fluid{
    width: 120px;
    height: 35px;
}
</style>
