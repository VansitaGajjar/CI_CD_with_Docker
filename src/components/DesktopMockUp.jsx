const DesktopMockUp = () => {
  return (
    <>
      <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
        <div class="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
          <img
            src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png"
            class="dark:hidden h-[140px] md:h-[262px] w-full rounded-xl"
            alt=""
          />
          <img
            src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png"
            class="hidden dark:block h-[140px] md:h-[262px] w-full rounded-xl"
            alt=""
          />
        </div>
      </div>
      <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
      <div class="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
    </>
  );
};

export default DesktopMockUp;
