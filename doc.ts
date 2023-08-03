左边 
<smooth-dnd-container
      behaviour="copy"
      group-name="blocks"
      orientation="vertical"
      :get-child-payload="(index: number) => blocksBaseMetaList[index]"
      tag="div"
      class="blocks-list"
    >
      <smooth-dnd-draggable v-for="d in blocksBaseMetaList" :key="d.type">
        <div class="blocks-item">
          <div class="block-icon-wrapper">
            <component :is="d.icon" />
          </div>
          <span class="block-name">{{ d.name }}</span>
        </div>
      </smooth-dnd-draggable>
    </smooth-dnd-container>
中间
<smooth-dnd-container
    drag-handle-selector=".handle"
    group-name="blocks"
    orientation="vertical"
    tag="div"
    @drop="updateBlocks(applyDrag(toRaw(blocks), $event))"
  >
    <smooth-dnd-draggable v-for="(block, i) in blocks" :key="block.id">
      <BlockRenderer :block="block" :i="i" />
    </smooth-dnd-draggable>
  </smooth-dnd-container>