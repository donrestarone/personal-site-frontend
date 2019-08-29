import React from 'react';

const Footer = (props) => {

  const renderFooter = () => {
    if (props.isMobile) {
      return (
      <div className="pt-5 text-center">
        <div class="block block-inverse app-footer">
          <div class="container">
              <div class="row">
                <div class="col-md-5 mb-5">
                  <ul class="list-unstyled list-spaced">
                    <li class="mb-2"><h6 class="text-uppercase">lorem ipsum</h6></li>
                    <li class="text-muted">
                      lorem ipsum <a href="https://github.com/donrestarone">lorem ipsum</a>.
                    </li>
                    <li class="text-muted">
                      lorem ipsum
                    </li>
                  </ul>
                  <ul class="list-unstyled list-spaced">
                    <li class="mb-2"><h6 class="text-uppercase">lorem ipsum</h6></li>
                    <li class="text-muted">lorem ipsum</li>
                    <li class="text-muted">lorem ipsum</li>
                    <li class="text-muted">lorem ipsum</li>
                    <li class="text-muted">lorem ipsum</li>
                  </ul>
                  <ul class="list-unstyled list-spaced">
                    <li class="mb-2"><h6 class="text-uppercase">lorem ipsum</h6></li>
                    <li class="text-muted">lorem ipsum</li>
                    <li class="text-muted">lorem ipsum</li>
                    <li class="text-muted">lorem ipsum</li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
      )
    } else {
      return (
    <div className="p-4">
      <div class="block block-inverse app-footer">
        <div class="container">
            <div class="row">
              <div class="col mb-5">
                <ul class="list-unstyled list-spaced">
                  <li class="mb-2"><h6 class="text-uppercase">Lorem Ipsum</h6></li>
                  <li class="text-muted">
                  Lorem Ipsum <a href="https://github.com/donrestarone">Lorem Ipsum</a>.
                  </li>
                </ul>
                <ul class="list-unstyled list-spaced">
                  <li class="mb-2"><h6 class="text-uppercase">Lorem Ipsum</h6></li>
                  <li class="text-muted">Lorem Ipsum</li>
                  <li class="text-muted">Lorem Ipsum</li>
                  <li class="text-muted">Lorem Ipsum)</li>
                  <li class="text-muted">Lorem Ipsum</li>
                </ul>
                <ul class="list-unstyled list-spaced">
                  <li class="mb-2"><h6 class="text-uppercase">Lorem Ipsum</h6></li>
                  <li class="text-muted">Rails 5.2 API</li>
                  <li class="text-muted">React 16</li>
                  <li class="text-muted">PostgreSQL 10.5</li>
                </ul>
              </div>
              <div class="col mb-5">
                <ul class="list-unstyled list-spaced">
                  <li class="mb-2"><h6 class="text-uppercase">Lorem Ipsum</h6></li>
                  <li class="text-muted">Lorem Ipsum</li>
                  <li class="text-muted">Lorem Ipsum</li>
                  <li class="text-muted"><a href="https://www.linkedin.com/in/shashike-jayatunge/">Lorem Ipsum</a></li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
      )
    }
  }

  return (
    renderFooter()
  )
}

export default Footer;





