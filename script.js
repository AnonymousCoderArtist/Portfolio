const letters1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const moreCharacters = letters1 + "漢字" + "你好";
const bracketedCharacters = moreCharacters + "{}[]()<>";
const letters = bracketedCharacters;
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav h7 a");
let interval = null;
const lenis = new Lenis();
const hoverDivs = document.querySelectorAll('.hover__div');
const menu = document.querySelector('.menu7');
const links = [...document.querySelectorAll('.row7 li')];
const randomLetters = 'QWERTYUIOPASDFG216564352@#123765HJKLZXCVBNM'.split('');


window.onscroll = () => {
  sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if(top >= offset && top < offset + height) {
          navLinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('.nav h7 a[href*=' + id + ']').classList.add('active');
          });
      };
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const counter = document.querySelector(".counter");
  const loader = document.querySelector(".loader");

  function shuffleText(finaltext, duration, callback) {
    let i = 0;
    const shuffleInterval = setInterval(() => {
      if (i < duration) {
        counter.innerHTML = Math.random().toString(36).substring(2, 8);
        i++;
      } else {
        clearInterval(shuffleInterval);
        counter.innerHTML = finaltext;
        if (callback) callback();
      }
    }, 100);
  }

  function removeLetters() {
    let text = counter.innerHTML;
    const removeInterval = setInterval(() => {
      if (text.length > 0) {
        text = text.substring(0, text.length - 1);
        counter.innerHTML = text;
      } else {
        clearInterval(removeInterval);
        fadeOutLoader();
      }
    }, 100);
  }

  gsap.to(".counter", {
    innerHTML: 100 + "%",
    duration: 3,
    snap: "innerHTML",
    ease: "none",
    onComplete: () => {
      setTimeout(() => {
        shuffleText("WLCM", 15, () => {
          setTimeout(removeLetters, 500);
        });
      });
    },
  });

  function fadeOutLoader() {
    gsap.to(".loader", {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        Animations();
      },
    });
  }
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

window.addEventListener("DOMContentLoaded", () => {
  const blockContainer = document.getElementById("blocks");
  const blockSize = 50;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const numCols = Math.ceil(screenWidth / blockSize);
  const numRows = Math.ceil(screenHeight / blockSize);
  const numBlocks = numCols * numRows;

  function createBlocks() {
    for (let i = 0; i < numBlocks; i++) {
      const block = document.createElement("div");
      block.classList.add("block");
      block.dataset.index = i;
      blockContainer.appendChild(block);
    }
  }

  function highlightRandomNeighbors(index) {
    const col = index % numCols;
    const row = Math.floor(index / numCols);

    const neighbors = [
      index - numCols,
      index + numCols,
      index - 1,
      index + 1,
      index - numCols - 1,
      index - numCols + 1,
      index + numCols - 1,
      index + numCols + 1,
    ].filter((i) => {
      return (
        i >= 0 &&
        i < numBlocks &&
        (Math.abs(i - index) === 1 || Math.abs(i - index) === numCols) &&
        Math.abs((i % numCols) - col) <= 1
      );
    });

    const block = blockContainer.children[index];
    block.classList.add("highlight");

    const randomNeighborIndex =
      neighbors[Math.floor(Math.random() * neighbors.length)];
    const randomNeighbor = blockContainer.children[randomNeighborIndex];

    if (randomNeighbor) {
      randomNeighbor.classList.add("highlight");

      setTimeout(() => {
        block.classList.remove("highlight");
        randomNeighbor.classList.remove("highlight");
      }, 500);
    }
  }

  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const col = Math.floor(x / blockSize);
    const row = Math.floor(y / blockSize);
    const index = row * numCols + col;

    if (index >= 0 && index < numBlocks) {
      highlightRandomNeighbors(index);
    }
  });

  createBlocks();
});

document.querySelector(".hero-text").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};
document.querySelector(".hero-text2").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};
document.querySelector(".home").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};
document.querySelector(".about").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};
document.querySelector(".social").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};
document.querySelector(".contact").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const frames = {
  currentIndex: 0,
  maxIndex: 12,
};
const images = [];
let imagesLoaded = 0;

function preloadImages() {
  for (var i = 0; i <= frames.maxIndex; i++) {
    const imageUrl = `./${i}.png`;
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      imagesLoaded++;
      if (imagesLoaded === frames.maxIndex) {
        loadImage(frames.currentIndex);
      }
    };
    images.push(img);
  }
}

function loadImage(index) {
  if (index >= 0 && index <= frames.maxIndex) {
    const img = images[index];
    canvas.width = img.width;
    canvas.height = img.height;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.drawImage(img, 0, 0);
    frames.currentIndex = index;
  }
}

function startAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-page",
      start: "0% 90%",
      end: "50% 50%",
      scrub: 2,
    },
  });

  tl.to(frames, {
    currentIndex: frames.maxIndex,
    onUpdate: function () {
      loadImage(Math.floor(frames.currentIndex));
    },
  });

  tl.to(
    ".chracter-img",
    {
      top: "108%",
      left: "0%",
      bottom: "0",
      duration: 2,
      position: "absolute",
    },
    0
  );

  // tl.from(".item", {
  //   opacity: 0,
  //   y: -50,
  //   duration:2,
  //   stagger: 0.3,
  //   pin: true,
  // },0.5)
}

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    document.querySelectorAll(".card_data").forEach((cardData) => {
      if (cardData !== item.querySelector(".card_data")) {
        gsap.to(cardData, { opacity: 0, duration: 0.3, ease: "power2.out" });
      }
    });
    const cardData = item.querySelector(".card_data");
    if (cardData) {
      gsap.fromTo(
        cardData,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  });

  item.addEventListener("mouseleave", () => {
    document.querySelectorAll(".card_data").forEach((cardData) => {
      gsap.to(cardData, {
        opacity: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
});

function Animations() {
  var tl = gsap.timeline();
  tl.from("h7", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
  });
  tl.from(".right", {
    opacity: 0,
    x: 50,
    duration: 0.5,
    ease: "power2.out",
  });
  tl.from(".card", {
    opacity: 0,
    y: 100,
    duration: 0.4,
    ease: "power2.out",
  });
  tl.from(".card-svg", {
    scale: 2,
    opacity: 0,
  });
  tl.from(".hero-text", {
    opacity: 0,
    x: -100,
    duration: 0.2,
    ease: "power2.out",
  });
  tl.from(".hero-text2", {
    opacity: 0,
    x: -100,
    duration: 0.2,
    ease: "power2.out",
  });
  tl.from(".disclaimer", {
    opacity: 0,
    x: -100,
    duration: 0.2,
    ease: "power2.out",
  });
  tl.from(".chracter-img", {
    opacity: 0,
    y: 100,
    duration: 0.5,
    ease: "expo.out",
  });

  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".skills",
      start: "50% 50%",
      end: "200% 50%",
      pin: true,
      scrub: 2,
    },
  });

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".part2",
      start: "0% 90%",
      end: "140% 90%",
      scrub: true,
    },
  });

  tl2.to(
    ".strip-l",
    {
      marginLeft: "-70%",
    },
    "same"
  );
  tl2.to(
    ".strip-r",
    {
      marginLeft: "-70%",
    },
    "same"
  );

  tl3
    .to("#python", {
      opacity: 1,
      filter: "blur(0px)",
    })
    .to("#ml", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#html", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.2,
    })
    .to("#gsap", {
      opacity: 1,
      delay: -0.4,
      filter: "blur(0px)",
    })
    .to("#css", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#video", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#js", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#figma", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.5,
    })
    .to("#photoshop", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#lenis", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.4,
    })
    .to("#ai", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#react", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#node", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#mongo", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#NextJS", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    });

  var tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".projects",
      start: "50% 50%",
      end: "150% 50%",
      scrub: 2,
      pin: true,
    },
  });
  tl5
    .to(
      "#center",
      {
        height: "100vh",
      },
      "a"
    )
    .to(
      "#top",
      {
        top: "-50%",
      },
      "a"
    )
    .to(
      "#bottom",
      {
        bottom: "-50%",
      },
      "a"
    )
    .to(
      "#top-h",
      {
        top: "60%",
      },
      "a"
    )
    .to(
      "#bottom-h",
      {
        bottom: "-30%",
      },
      "a"
    )
    .to(".content", {
      delay: -0.2,
      marginTop: "0%",
    });

  var timel = gsap.timeline();
  timel
    .from(".row-2", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
      stagger: 0.5,
    })
    .from(".row-3", {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power2.out",
      stagger: 0.5,
    })
    .from(".row-1", {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power2.out",
      stagger: 0.5,
    });

  tl5.add(timel);
}

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      reverseDirection: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    slidesPerView: 1.7,
    spaceBetween: 20,
    slideToClickedSlide: true,
  });
});

const textContainer = document.getElementById("textContainer");
let easeFactor = 0.02;
let scene, camera, renderer, planeMesh;
let mousePosition = { x: 0.5, y: 0.5 };
let targetMousePosition = { x: 0.5, y: 0.5 };
let prevPosition = { x: 0.5, y: 0.5 };

const vertexShader = `
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D u_texture;
  uniform vec2 u_mouse;
  uniform vec2 u_prevMouse;

  void main() {
    vec2 gridUV = floor(vUv * vec2(40.0, 40.0)) / vec2(40.0, 40.0);
    vec2 centerOfPixel = gridUV + vec2(1.0/40.0, 1.0/40.0);

    vec2 mouseDirection = u_mouse - u_prevMouse;

    vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
    float pixelDistanceToMouse = length(pixelToMouseDirection);
    float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);

    vec2 uvOffset = strength * -mouseDirection * 0.3;
    vec2 uv = vUv - uvOffset;

    vec4 color = texture2D(u_texture, uv);
    gl_FragColor = color;
  }
`;

function createTextTexture(text, font, size, color, fontWeight = "100") {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const canvasWidth = window.innerWidth * 2;
  const canvasHeight = window.innerHeight * 2;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  ctx.fillStyle = color || "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const fontSize = size || Math.floor(canvas.width * 2);

  ctx.fillStyle = "#000000";
  ctx.font = `${fontWeight} ${fontSize}px "${font || "Electrolize"}"`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  const textMetrics = ctx.measureText(text);
  const textWidth = textMetrics.width;

  const scaleFactor = Math.min(1, (canvasWidth * 1) / textWidth);
  const aspectCorrection = canvasWidth / canvasHeight;

  ctx.setTransform(
    scaleFactor,
    0,
    0,
    scaleFactor / aspectCorrection,
    canvasWidth / 2,
    canvasHeight / 2
  );

  ctx.strokeStyle = "#ebb361";
  ctx.lineWidth = fontSize * 0.005;
  for (let i = 0; i < 3; i++) {
    ctx.strokeText(text, 0, 0);
  }

  ctx.fillText(text, 0, 0);

  return new THREE.CanvasTexture(canvas);
}

function initializeScene(texture) {
  scene = new THREE.Scene();

  const aspectRatio = window.innerWidth / window.innerHeight;
  camera = new THREE.OrthographicCamera(
    -1,
    1,
    1 / aspectRatio,
    -1 / aspectRatio,
    0.1,
    1000
  );
  camera.position.z = 1;

  let shaderUniforms = {
    u_mouse: { type: "v2", value: new THREE.Vector2() },
    u_prevMouse: { type: "v2", value: new THREE.Vector2() },
    u_texture: { type: "t", value: texture },
  };

  planeMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    new THREE.ShaderMaterial({
      uniforms: shaderUniforms,
      vertexShader,
      fragmentShader,
    })
  );

  scene.add(planeMesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor(0xffffff, 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  textContainer.appendChild(renderer.domElement);
}

function reloadTexture() {
  const newTexture = createTextTexture(
    "Socials",
    "Electrolize",
    null,
    "#ebb361",
    "100"
  );

  planeMesh.material.uniforms.u_texture.value = newTexture;
}

initializeScene(
  createTextTexture("Socials", "Electrolize", null, "#ebb361", "100")
);

function animateScene() {
  requestAnimationFrame(animateScene);

  mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor;
  mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor;

  planeMesh.material.uniforms.u_mouse.value.set(
    mousePosition.x,
    1.0 - mousePosition.y
  );

  planeMesh.material.uniforms.u_prevMouse.value.set(
    prevPosition.x,
    1.0 - prevPosition.y
  );

  renderer.render(scene, camera);
}

animateScene();

textContainer.addEventListener("mousemove", handleMouseMove);
textContainer.addEventListener("mouseenter", handleMouseEnter);
textContainer.addEventListener("mouseleave", handleMouseLeave);

function handleMouseMove() {
  easeFactor = 0.04;
  let rect = textContainer.getBoundingClientRect();
  prevPosition = { ...targetMousePosition };

  targetMousePosition.x = (event.clientX - rect.left) / rect.width;
  targetMousePosition.y = (event.clientY - rect.top) / rect.height;
}

function handleMouseEnter() {
  easeFactor = 0.02;
  let rect = textContainer.getBoundingClientRect();

  mousePosition.x = targetMousePosition.x =
    (event.clientX - rect.left) / rect.width;

  mousePosition.y = targetMousePosition.y =
    (event.clientY - rect.top) / rect.height;
}

function handleMouseLeave() {
  easeFactor = 0.02;
  targetMousePosition = { ...prevPosition };
}

window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
  const aspectRatio = window.innerWidth / window.innerHeight;
  camera.left = -1;
  camera.right = 1;
  camera.top = 1 / aspectRatio;
  camera.bottom = -1 / aspectRatio;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  reloadTexture();
}

menu.addEventListener('mouseenter', () => {
  hoverDivs.forEach(div => div.classList.add('active'));
});

menu.addEventListener('mouseleave', () => {
  hoverDivs.forEach(div => div.classList.remove('active'));
});

class Link {
  constructor(el, idx, row) {
    this.el = el;
    this.idx = idx;
    this.row = row;
    this.originalText = el.innerText;
    this.randomString = this.el.innerText.split('');
    this.frame = 0;
    this.addHoverEvent();
  }

  addHoverEvent() {
    this.el.addEventListener('mouseenter', () => {
      hoverDivs.forEach(div => div.style.opacity = 0);
      const hoverDiv = this.row.querySelector('.hover__div');
      hoverDiv.style.transform = `translateX(${this.idx * 100}%)`;
      hoverDiv.style.opacity = 1;
      this.animate();
    });

    this.el.addEventListener('mouseleave', () => {
      this.frame = 0;
      setTimeout(() => {
        this.frame = 0;
      }, 1000);
    });
  }

  animate() {
    if (this.frame < 30) {
      if (this.frame % 3 == 0) {
        for (let i = 0; i < this.randomString.length; i++) {
          this.randomString[i] = randomLetters[Math.floor(Math.random() * randomLetters.length)];
        }
        this.el.innerText = this.randomString.join('');
      }
      this.frame++;
      requestAnimationFrame(this.animate.bind(this));
    } else {
      this.el.innerText = this.originalText;
    }
  }
}

const rows = document.querySelectorAll('.row7');
rows.forEach((row, rowIndex) => {
  const rowLinks = [...row.querySelectorAll('li')];
  rowLinks.forEach((link, idx) => {
    new Link(link, idx, row);
  });
});

preloadImages();
startAnimation();
