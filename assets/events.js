var step = 1;
var isNotified = false;
var arbox = document.querySelector('.arbox');

AFRAME.registerComponent('image-tracker-1', {
    init: function () {
        console.log("image-tracker-1 init");
        alert("已進入AR模式，請掃描封面辨識點");
    },
    tick: function() {
        if (this.el.object3D.visible && step === 1) {
            arbox.style.display = "block";
            if (!isNotified) {
                alert("辨識成功");
                isNotified = true;
            }
            step = 2;
        }
    }
});

AFRAME.registerComponent('image-tracker-2', {
    init: function () {
        console.log("image-tracker-2 init");
    },
    tick: function() {
        if (this.el.object3D.visible) {
            if (step !== 2 && !isNotified) {
                isNotified = true;
                alert("請先掃描封面辨識點");
            }
            if (step === 2) {
                // 这里可以添加第二个标记被识别后的逻辑
                console.log("第二个标记被识别");
            }
        } else {
            isNotified = false;
        }
    }
});
