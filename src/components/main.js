import React from 'react'
import '../styles/main.css';
import i1 from '../assets/img/doctors/i1.png';
import i2 from '../assets/img/doctors/i2.jpg';
import i3 from '../assets/img/doctors/i3.jpg';
import i4 from '../assets/img/doctors/i4.jpg';

import '../styles/vendor/animate.css/animate.min.css';
import '../styles/vendor/bootstrap/css/bootstrap.min.css';
import '../styles/vendor/bootstrap-icons/bootstrap-icons.css';
import '../styles/vendor/boxicons/css/boxicons.min.css';
import '../styles/vendor/fontawesome-free/css/all.min.css';
import '../styles/vendor/glightbox/css/glightbox.min.css';
import '../styles/vendor/remixicon/remixicon.css';
import '../styles/vendor/swiper/swiper-bundle.min.css';

export default function main() {
    return (


        <main id="main">


            {/* <!-- ======= Featured Services Section ======= --> */}
            <section id="featured-services" class="featured-services">
                <div class="container" data-aos="fade-up">

                    <div class="row">
                        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div class="icon"><i class="fas fa-heartbeat"></i></div>
                                <h4 class="title"><a href=""> Normal checkup</a></h4>
                                <p class="description">Voluptatum deleniti atque corrupti 2 times per month quas molestias excepturi</p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                                <div class="icon"><i class="fas fa-dna"></i></div>
                                <h4 class="title"><a href="">Blood Test</a></h4>
                                <p class="description">At vero eos et accusamus et 1 week odio dignissimos ducimus qui blanditiis</p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                                <div class="icon"><i class="fas fa-temperature-high"></i></div>
                                <h4 class="title"><a href="">Body temperature</a></h4>
                                <p class="description">Excepteur sint occaecat 37.6 non proident, 98.6 sunt in culpa qui officia</p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                                <div class="icon"><i class="fas fa-hand-holding-medical"></i></div>
                                <h4 class="title"><a href="">Medicine use</a></h4>
                                <p class="description">Duis aute dolor 10-12 in reprehenderit in voluptate 8-12 velit esse cillum dolore</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            {/* <!-- End Featured Services Section --> */}

            {/* <!-- ======= About Section ======= --> */}
            <section id="about" class="about">
                <div class="container" data-aos="fade-up">
                    <div class="section-title">
                        <h2>About Us</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius
                            consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
                            Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                            Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            
                    </div>


                    <div class="row">
                        <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center
     align-items-stretch position-relative">
                            <a href="https://youtu.be/h39m-e8JHDc" class="glightbox play-btn mb-4"></a>
                        </div>

                        <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch
     justify-content-center py-5 px-lg-5">

                            <div class="icon-box">
                                <div class="icon"><i class="bx bx-heart"></i></div>
                                <h4 class="title"><a href="">HEALTH IS WEALTH</a></h4>
                                <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>

                            <div class="icon-box">
                                <div class="icon"><i class="bx bx-health"></i></div>
                                <h4 class="title"><a href="">EMERGENCY</a></h4>
                                <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div>

                            <div class="icon-box">
                                <div class="icon"><i class="bx bx-help-circle"></i></div>
                                <h4 class="title"><a href="">SERVICES </a></h4>
                                <p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End About Section --> */}

            {/* <!-- ======= Counts Section ======= --> */}
            <section id="counts" class="counts">
                <div class="container" data-aos="fade-up">

                    <div class="row no-gutters">

                        <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                            <div class="count-box">
                                <i class="fas fa-user-md"></i>
                                <span data-purecounter-start="0" data-purecounter-end="95" data-purecounter-duration="1" class="purecounter"></span>
                                <p><strong>Doctors</strong> consequuntur quae qui deca rode</p>
                                <a href="#">Find out more &raquo;</a>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                            <div class="count-box">
                                <i class="far fa-hospital"></i>
                                <span data-purecounter-start="0" data-purecounter-end="36" data-purecounter-duration="1" class="purecounter"></span>
                                <p><strong>Departments</strong> adipisci atque cum aut numquam delectus</p>
                                <a href="#">Find out more &raquo;</a>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                            <div class="count-box">
                                <i class="fas fa-flask"></i>
                                <span data-purecounter-start="0" data-purecounter-end="23" data-purecounter-duration="1" class="purecounter"></span>
                                <p><strong>Research Lab</strong> aut commodi quaerat. Aliquam ratione</p>
                                <a href="#">Find out more &raquo;</a>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                            <div class="count-box">
                                <i class="fas fa-award"></i>
                                <span data-purecounter-start="0" data-purecounter-end="250" data-purecounter-duration="1" class="purecounter"></span>
                                <p><strong>Awards</strong> rerum asperiores dolor molestiae doloribu</p>
                                <a href="#">Find out more &raquo;</a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            
            {/* <!-- End Counts Section --> */}

            {/* <!-- ======= Services Section ======= --> */}
            <section id="services" class="services">
                <div class="container">

                    <div class="section-title">
                        <h2>Services</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div class="icon-box">
                                <div class="icon"><i class="fas fa-heartbeat"></i></div>
                                <h4><a href="/checkup">Regular Checkup</a></h4>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div class="icon-box">
                                <div class="icon"><i class="fas fa-pills"></i></div>
                                <h4><a href="#medicines">Medicine</a></h4>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                            <div class="icon-box">
                                <div class="icon"><i class="fas fa-hospital-user"></i></div>
                                <h4><a href="">Pharmeologist</a></h4>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div class="icon-box">
                                <div class="icon"><i class="fas fa-dna"></i></div>
                                <h4><a href="">Blood Test</a></h4>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div class="icon-box">
                                <div class="icon"><i class="fas fa-wheelchair"></i></div>
                                <h4><a href="">Disabled Person</a></h4>
                                <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div class="icon-box">
                                <div class="icon"><i class="fas fa-notes-medical"></i></div>
                                <h4><a href="">Health Post</a></h4>
                                <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            {/* <!-- End Services Section --> */}

            {/* <!-- ======= Appointment Section ======= --> */}
            <section id="appointment" class="appointment section-bg">
                <div class="container">

                    <div class="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <form accept="" role="form" class="php-email-form">
                        <div class="row">
                            <div class="col-md-4 form-group">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" />
                            </div>
                            <div class="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" />

                            </div>
                            <div class="col-md-4 form-group mt-3 mt-md-0">
                                <input type="tel" class="form-control" name="phone" id="phone" placeholder="Your Phone" />

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 form-group mt-3">
                                <input type="datetime" name="date" class="form-control datepicker" id="date" placeholder="Appointment Date" />

                            </div>
                            <div class="col-md-4 form-group mt-3">
                                <select name="age" id="age" class="form-select">
                                    <option value="">Select Age</option>
                                    <option value="Department 1">Below 18</option>
                                    <option value="Department 2">18-40</option>
                                    <option value="Department 3">40 above</option>
                                </select>

                            </div>
                            <div class="col-md-4 form-group mt-3">
                                <select name="doctor" id="doctor" class="form-select">
                                    <option value="">Select Doctor</option>
                                    <option value="Doctor 1">Doctor 1</option>
                                    <option value="Doctor 2">Doctor 2</option>
                                    <option value="Doctor 3">Doctor 3</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group mt-3">
                            <textarea class="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>

                        </div>
                        <div class="text-center"><button type="submit">Make an Appointment</button></div>
                    </form>

                </div>
            </section>
            {/* <!-- End Appointment Section --> */}



            {/* <!-- ======= Doctors Section ======= --> */}
            <section id="doctors" class="doctors">
                <div class="container">

                    <div class="section-title">
                        <h2>Doctors</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row">

                        <div class="col-lg-6">
                            <div class="member d-flex align-items-start">
                                <div class="pic"><img src={i1} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Rozan Chitrakar</h4>
                                    <span>Chief Medical Officer</span>
                                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                    <div class="social">
                                        <a href=""><i class="ri-twitter-fill"></i></a>
                                        <a href=""><i class="ri-facebook-fill"></i></a>
                                        <a href=""><i class="ri-instagram-fill"></i></a>
                                        <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-4 mt-lg-0">
                            <div class="member d-flex align-items-start">
                                <div class="pic"><img src={i2} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Pratikshya Rai</h4>
                                    <span>Anesthesiologist</span>
                                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                    <div class="social">
                                        <a href=""><i class="ri-twitter-fill"></i></a>
                                        <a href=""><i class="ri-facebook-fill"></i></a>
                                        <a href=""><i class="ri-instagram-fill"></i></a>
                                        <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-4">
                            <div class="member d-flex align-items-start">
                                <div class="pic"><img src={i3} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Bratt Watson</h4>
                                    <span>Cardiology</span>
                                    <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                    <div class="social">
                                        <a href=""><i class="ri-twitter-fill"></i></a>
                                        <a href=""><i class="ri-facebook-fill"></i></a>
                                        <a href=""><i class="ri-instagram-fill"></i></a>
                                        <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-4">
                            <div class="member d-flex align-items-start">
                                <div class="pic"><img src={i4} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Lauren Jones</h4>
                                    <span>Neurosurgeon</span>
                                    <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                    <div class="social">
                                        <a href=""><i class="ri-twitter-fill"></i></a>
                                        <a href=""><i class="ri-facebook-fill"></i></a>
                                        <a href=""><i class="ri-instagram-fill"></i></a>
                                        <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            {/* <!-- End Doctors Section --> */}



            {/* <!-- ======= Contact Section ======= --> */}
            <section id="contact" class="contact">
                <div class="container">

                    <div class="section-title">
                        <h2>Contact</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                </div>

                {/* <!--Google map--> */}

                <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d11286.356278106172!2d75.698107283094!3d16.8282939770501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x3bc6ff9f96252025%3A0x2c8347293c90de79!2zR292ZXJubWVudCBIb3NwaXRhbCDgsrjgsrDgs43gspXgsr7gsrDgsr8g4LKG4LK44LON4LKq4LKk4LON4LKw4LOG!3m2!1d16.8285017!2d75.6924573!4m0!5e0!3m2!1sen!2sin!4v1718794835231!5m2!1sen!2sin" width="100%" height="450px" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div class="container">
                    <div class="row mt-5">

                        <div class="col-lg-4">
                            <div class="info">
                                <div class="address">
                                    <i class="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>KIST Hospital Road, 44700</p>
                                </div>

                                <div class="email">
                                    <i class="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>prcare@example.com</p>
                                </div>

                                <div class="phone">
                                    <i class="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+1 55234 5112 33s</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-8 mt-5 mt-lg-0">
                            <form action="" role="form" class="php-email-form">
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div class="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div class="form-group mt-3">
                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div class="form-group mt-3">
                                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div class="text-center"><button type="submit">Send Message</button></div>
                            </form>

                        </div>

                    </div>

                </div>
            </section>
            {/* <!-- End Contact Section --> */}
            {/* <!-- End #main --> */}
        </main>
        

    )
}
