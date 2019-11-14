<template>
    <footer
        class="footer"
        :class="{ [`footer-${type}`]: type }"
        :data-background-color="backgroundColor"
    >
        <div class="container">
            <!-- Footer start -->
            <div id="footer" class="footer-inner">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-12 footer-widget">
                            <h2 class="widget-title">SolabTechnologies</h2>
                            <div class="latest-post-items media">
                                <div class="latest-post-content media-body">
                                    <h4>We are a technology company committed to developing solutions solving problems facing organisations and communities in Africa.</h4>
                                </div>
                            </div>

                            <div class="latest-post-items media">
                                <div class="latest-post-content media-body">
                                    <h4>We build products to solve problems and create Value. We guarantee rapid, reliable, and robust technology solutions that works.</h4>
                                </div>
                            </div>

                            <li class="nav-item">
                                <a
                                class="nav-link"
                                rel="tooltip"
                                title="Follow us on Twitter"
                                data-placement="bottom"
                                href="#"
                                target="_blank"
                                >
                                    <i class="fab fa-twitter"></i>
                                    <p class="d-lg-none d-xl-none">Twitter</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                class="nav-link"
                                rel="tooltip"
                                title="Like us on Facebook"
                                data-placement="bottom"
                                href="#"
                                target="_blank"
                                >
                                    <i class="fab fa-facebook-square"></i>
                                    <p class="d-lg-none d-xl-none">Facebook</p>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a
                                class="nav-link"
                                rel="tooltip"
                                title="Follow us on Instagram"
                                data-placement="bottom"
                                href="#"
                                target="_blank"
                                >
                                    <i class="fab fa-instagram"></i>
                                    <p class="d-lg-none d-xl-none">Instagram</p>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a
                                class="nav-link"
                                rel="tooltip"
                                title="Subscribe to our Youtube Channel"
                                data-placement="bottom"
                                href="#"
                                target="_blank"
                                >
                                    <i class="fab fa-youtube-play"></i>
                                    <p class="d-lg-none d-xl-none">Youtube</p>
                                </a>
                            </li>
                        </div>
                        <!--/ End First Column-->

                        <div class="col-md-4 col-sm-12 footer-widget">
                            <h2 class="widget-title">Our Services</h2>
                            <div class="latest-post-items media">
                                <div class="latest-post-content media-body">
                                    <h4>Web Development</h4>
                                    <h4>Mobile App Development</h4>
                                    <h4>Computer Application</h4>
                                    <h4>I.T Development</h4>
                                </div>
                            </div>

                            <h3 class="widget-title">Contact Details</h3>
                            <div class="latest-post-items media">
                                <div class="latest-post-content media-body">
                                    <i></i><h4>hello@solabtechnologies.com</h4>
                                    <i></i><h4>+234 8183297338</h4>
                                    <h4>Address: No 15 Olajuwon street,</h4>
                                    <h4>Yaba, Lagos. Nigeria</h4>
                                </div>
                            </div>

                        </div>
                        <!--/ End Second Column-->

                        <div class="col-md-4 col-sm-12 footer-widget">
                            <h2 class="widget-title">Contact Form</h2>
                            <div class="form-msg">
                                <form action="#" role="form">
                                    <input type="text" placeholder="Name" required="">
                                    <input type="number" placeholder="Telephone" required="">
                                    <br>
                                    <textarea name="comment">Message</textarea>
                                    <br>
                                    <button type="submit"> Send Message</button>
                                </form>
                                
                            </div>
                        </div>
                        <!--/ End Third Column-->

                    </div><!-- Row end -->
                </div><!-- Container end -->
            </div><!-- Div end -->      
        </div>
    </footer>
</template>

<script>
export default {
  data() {
    return {

    };
  }
};
</script>
<style scoped>
form{
    border-radius: 10px;
    background-color: #f2f2f2;
    padding: 70px;
}
input{
    width: 120%;
    padding: 10px 10px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
textarea{
   width: 120%;
    padding: 10px 10px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box; 
}
button:hover {
  background-color: #f88f2c;
  display: inline-block;
}
</style>
