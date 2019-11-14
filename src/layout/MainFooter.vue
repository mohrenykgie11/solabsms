<template>
    <footer
        class="footer"
        :class="{ [`footer-${type}`]: type }"
        :data-background-color="backgroundColor"
    >
        <div class="container">
            <nav>
                <ul>                    
                    <li>
                        <a href="https://www.solabtechnologies.com/#about-us">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Contact us
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Terms & Condition
                        </a>
                    </li>
                </ul>
            </nav>

        <div class="copyright">
            &copy; {{ year }}, Designed by
            <a href="https://www.solabtechnologies.com" target="_blank" rel="noopener">Solabtechnologies</a>. 
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
