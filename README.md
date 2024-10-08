
<div align="center">
  <img src="assets/logo.svg" alt="logo" width="128" height="128">
  <h1>Chatbot Exporter</h1>
  <blockquote>Share your favorite chat messages in 1 second. </blockquote>
</div>

## Usage

1. **download**: visit [Releases Page](https://github.com/cs-magic/exts_chrome_chatbot-exporter/releases) and download the latest / stable `chatbot-exporter_....zip` file
2. **install**: visit Chrome Extensions Page (chrome://extensions), enable the development mode, and load the unpacked extension
3. **run**: visit any chatbot website of the following:
    - [x] https://claude.ai
    - [x] https://chatgpt.com
    - [ ] https://poe.com
    - [ ] https://monica.im
    - [ ] https://doubao.com
    - [ ] ... (please issue if you have chatbot website to be supported)
4. **use**:
   1. you should be able to find the button just on the 1/3 right of page, like:

   ![img.png](docs/button-v3.png)

   2. you can drag the button vertically, and if you click the button, you would have a file downloaded into your default folder like `Downloads`.

   ![exported.png](docs/exported.png)

## Motivation

We always want to share our chat conservation to others.

But the official way is not user-friendly.

Many of us fallback to use the scroll technology.

Now, with **Chatbot Exporter**, you can natively have an export button just in the above of input area, 
providing you with a magic experience.

Enjoy it!

## Release

### v0.2.1_beta_2024-09-26

- 限制了程序运行的范围，避免了 github 上 `profile-generator` 的显示问题（可能是 observe 导致的）

### v0.2.0_beta_2024-09-24

- 修复了新建会话时下载按钮处于页面顶部导致下载失败的问题
- 提高了下载时默认的分辨率设置

### v0.1.0_beta.2_2024-09-19

- [x] fixed: theme switch

### v0.1.0_beta.1_2024-09-19

- [x] feat: download with history together
- [x] feat: added CICD for release
- [x] fixed: naming problem
- [x] fixed: image quality problem (scale)
- [x] fixed: claude image dirty transition (after adding backgroundColor)
- [x] improvement: png --> jpeg, for smaller file size

### v0.1.0_beta.0_2024-09-19

- [x] init

## Todo

- [ ] feat: Claude with graph
- [ ] feat: other chatbots, e.g. POE
- [ ] fix: ChatGPT UI deficit
- [ ] engineering: CICD with yarn build