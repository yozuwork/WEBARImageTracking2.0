    var step = 1;
    var is_notified = false;
    var arbox = document.querySelector('.arbox');
    
    AFRAME.registerComponent('image-tracker-1', {
        init: function () {
            console.log("image-tracker-1 init");
            alert("已進入AR模式，請掃描封面辨識點");
        },
        tick: function() {
            if (this.el.object3D.visible == true) {
                // 掃描到辨識點
                arbox.style.display = "block";
                alert("辨識成功");
                step = 2;
            }
        }
    });
    AFRAME.registerComponent('image-tracker-2', {
        init: function () {
            console.log("image-tracker-2 init");
        },
        tick: function() {
            if (this.el.object3D.visible == true) {
                if (step != 2 && !is_notified) {
                    is_notified = true;
                    alert("請先掃描封面辨識點");
                }
            }
        }
    });