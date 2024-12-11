// @ts-check

let blurTimeout = null;

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  const closeButton = document.getElementById("close");
  const closeModal = () => {
    overlay.style.display = "none";
    modal.style.display = "none";
  };
  closeButton.addEventListener("click", () => {
    closeModal();
  });

  const showModal = (source) => () => {
    console.log(
      `${source} triggered\n`,
      `document.visibilityState: ${document.visibilityState}\n`,
      `document.hidden: ${document.hidden}\n`,
      `window.closed: ${window.closed ? "window.closed" : "window.open"}\n`,
      `window.document.hidden: ${window.document.hidden}\n`
    );

    if (source === "blur") {
      setTimeout(() => {
        console.log(
          `SET TIMEOUT, 1ms later\n`,
          `${source} triggered\n`,
          `document.visibilityState: ${document.visibilityState}\n`,
          `document.hidden: ${document.hidden}\n`,
          `window.closed: ${window.closed ? "window.closed" : "window.open"}\n`,
          `window.document.hidden: ${window.document.hidden}\n`
        );
        if (document.visibilityState === "visible") {
          overlay.style.display = "block";
          modal.style.display = "block";
        }
      }, 1);
    }
  };

  window.addEventListener("blur", showModal("blur"));
  window.addEventListener("pagehide", showModal("pagehide"));
  document.addEventListener("visibilitychange", showModal("visibilitychange"));

  // window.addEventListener("blur", () => {
  //   console.log("BLUR", document.visibilityState);
  //   blurTimeout = setTimeout(() => {
  //     console.log("BLUR TIMEOUT");
  //     if (document.visibilityState === "visible") {
  //       console.log("SHOW MODAL");
  //       overlay.style.display = "block";
  //       modal.style.display = "block";
  //     }
  //   }, 100);
  // });
  // document.addEventListener("visibilitychange", () => {
  //   console.log("visibilitychange", document.visibilityState);
  //   if (document.visibilityState === "visible") {
  //     if (blurTimeout) {
  //       clearTimeout(blurTimeout);
  //     }
  //   }
  // });

  // window.addEventListener("blur", () => {
  //   console.log("BLUR");
  //   console.log("Active element:", document.activeElement);
  // });
  // window.addEventListener("pointerdown", (event) => {
  //   console.log("pointerdown");
  //   if (event.target instanceof Element) {
  //     if (!event.target.closest("body")) {
  //       console.log(
  //         "pointerdown - User clicked outside the page (possibly the URL bar)."
  //       );
  //     }
  //   }
  // });
  // window.addEventListener("click", (event) => {
  //   console.log("click");
  // });
  // window.addEventListener("touchstart", (event) => {
  //   console.log("touchstart");
  // });
  // document.addEventListener("visibilitychange", () => {
  //   if (document.visibilityState === "hidden") {
  //     console.log(
  //       "visibilitychange - Page is now hidden (possibly URL bar interaction)."
  //     );
  //   } else if (document.visibilityState === "visible") {
  //     console.log("visibilitychange - Page is now visible again.");
  //   }
  // });
  // document.addEventListener("focusout", () => {
  //   const activeElement = document.activeElement;
  //   console.log("focusout", activeElement);
  //   if (activeElement === null || activeElement.tagName === "BODY") {
  //     console.log(
  //       "focusout - Focus shifted outside the document (possibly the URL bar)."
  //     );
  //   }
  // });

  // document.addEventListener("mousemove", (event) => {
  //   const { clientX, clientY } = event;
  //   if (
  //     clientX < 0 ||
  //     clientY < 0 ||
  //     clientY > window.innerHeight ||
  //     clientX > window.innerWidth
  //   ) {
  //     console.log("Mouse moved outside the page boundaries.");
  //   }
  // });
  // document.addEventListener("mouseleave", () => {
  //   console.log(
  //     "Mouse left the document (possibly interacting with browser UI)."
  //   );
  // });
});
