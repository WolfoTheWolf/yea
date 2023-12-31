/// <reference types="react" />
export declare const Reorder: {
    Group: import("react").ForwardRefExoticComponent<import("./Group").Props<unknown> & {
        color?: string | undefined;
        translate?: "no" | "yes" | undefined;
        hidden?: boolean | undefined;
        onPlay?: import("react").ReactEventHandler<any> | undefined;
        className?: string | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        role?: import("react").AriaRole | undefined;
        tabIndex?: number | undefined;
        "aria-activedescendant"?: string | undefined;
        "aria-atomic"?: (boolean | "false" | "true") | undefined;
        "aria-autocomplete"?: "none" | "inline" | "both" | "list" | undefined;
        "aria-busy"?: (boolean | "false" | "true") | undefined;
        "aria-checked"?: boolean | "mixed" | "false" | "true" | undefined;
        "aria-colcount"?: number | undefined;
        "aria-colindex"?: number | undefined;
        "aria-colspan"?: number | undefined;
        "aria-controls"?: string | undefined;
        "aria-current"?: boolean | "page" | "false" | "true" | "step" | "location" | "date" | "time" | undefined;
        "aria-describedby"?: string | undefined;
        "aria-details"?: string | undefined;
        "aria-disabled"?: (boolean | "false" | "true") | undefined;
        "aria-dropeffect"?: "none" | "copy" | "move" | "link" | "execute" | "popup" | undefined;
        "aria-errormessage"?: string | undefined;
        "aria-expanded"?: (boolean | "false" | "true") | undefined;
        "aria-flowto"?: string | undefined;
        "aria-grabbed"?: (boolean | "false" | "true") | undefined;
        "aria-haspopup"?: boolean | "grid" | "listbox" | "menu" | "false" | "true" | "dialog" | "tree" | undefined;
        "aria-hidden"?: (boolean | "false" | "true") | undefined;
        "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
        "aria-keyshortcuts"?: string | undefined;
        "aria-label"?: string | undefined;
        "aria-labelledby"?: string | undefined;
        "aria-level"?: number | undefined;
        "aria-live"?: "off" | "assertive" | "polite" | undefined;
        "aria-modal"?: (boolean | "false" | "true") | undefined;
        "aria-multiline"?: (boolean | "false" | "true") | undefined;
        "aria-multiselectable"?: (boolean | "false" | "true") | undefined;
        "aria-orientation"?: "horizontal" | "vertical" | undefined;
        "aria-owns"?: string | undefined;
        "aria-placeholder"?: string | undefined;
        "aria-posinset"?: number | undefined;
        "aria-pressed"?: boolean | "mixed" | "false" | "true" | undefined;
        "aria-readonly"?: (boolean | "false" | "true") | undefined;
        "aria-relevant"?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
        "aria-required"?: (boolean | "false" | "true") | undefined;
        "aria-roledescription"?: string | undefined;
        "aria-rowcount"?: number | undefined;
        "aria-rowindex"?: number | undefined;
        "aria-rowspan"?: number | undefined;
        "aria-selected"?: (boolean | "false" | "true") | undefined;
        "aria-setsize"?: number | undefined;
        "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
        "aria-valuemax"?: number | undefined;
        "aria-valuemin"?: number | undefined;
        "aria-valuenow"?: number | undefined;
        "aria-valuetext"?: string | undefined;
        children?: import("react").ReactNode;
        dangerouslySetInnerHTML?: {
            __html: string;
        } | undefined;
        onCopy?: import("react").ClipboardEventHandler<any> | undefined;
        onCopyCapture?: import("react").ClipboardEventHandler<any> | undefined;
        onCut?: import("react").ClipboardEventHandler<any> | undefined;
        onCutCapture?: import("react").ClipboardEventHandler<any> | undefined;
        onPaste?: import("react").ClipboardEventHandler<any> | undefined;
        onPasteCapture?: import("react").ClipboardEventHandler<any> | undefined;
        onCompositionEnd?: import("react").CompositionEventHandler<any> | undefined;
        onCompositionEndCapture?: import("react").CompositionEventHandler<any> | undefined;
        onCompositionStart?: import("react").CompositionEventHandler<any> | undefined;
        onCompositionStartCapture?: import("react").CompositionEventHandler<any> | undefined;
        onCompositionUpdate?: import("react").CompositionEventHandler<any> | undefined;
        onCompositionUpdateCapture?: import("react").CompositionEventHandler<any> | undefined;
        onFocus?: import("react").FocusEventHandler<any> | undefined;
        onFocusCapture?: import("react").FocusEventHandler<any> | undefined;
        onBlur?: import("react").FocusEventHandler<any> | undefined;
        onBlurCapture?: import("react").FocusEventHandler<any> | undefined;
        onChange?: import("react").FormEventHandler<any> | undefined;
        onChangeCapture?: import("react").FormEventHandler<any> | undefined;
        onBeforeInput?: import("react").FormEventHandler<any> | undefined;
        onBeforeInputCapture?: import("react").FormEventHandler<any> | undefined;
        onInput?: import("react").FormEventHandler<any> | undefined;
        onInputCapture?: import("react").FormEventHandler<any> | undefined;
        onReset?: import("react").FormEventHandler<any> | undefined;
        onResetCapture?: import("react").FormEventHandler<any> | undefined;
        onSubmit?: import("react").FormEventHandler<any> | undefined;
        onSubmitCapture?: import("react").FormEventHandler<any> | undefined;
        onInvalid?: import("react").FormEventHandler<any> | undefined;
        onInvalidCapture?: import("react").FormEventHandler<any> | undefined;
        onLoad?: import("react").ReactEventHandler<any> | undefined;
        onLoadCapture?: import("react").ReactEventHandler<any> | undefined;
        onError?: import("react").ReactEventHandler<any> | undefined;
        onErrorCapture?: import("react").ReactEventHandler<any> | undefined;
        onKeyDown?: import("react").KeyboardEventHandler<any> | undefined;
        onKeyDownCapture?: import("react").KeyboardEventHandler<any> | undefined;
        onKeyPress?: import("react").KeyboardEventHandler<any> | undefined;
        onKeyPressCapture?: import("react").KeyboardEventHandler<any> | undefined;
        onKeyUp?: import("react").KeyboardEventHandler<any> | undefined;
        onKeyUpCapture?: import("react").KeyboardEventHandler<any> | undefined;
        onAbort?: import("react").ReactEventHandler<any> | undefined;
        onAbortCapture?: import("react").ReactEventHandler<any> | undefined;
        onCanPlay?: import("react").ReactEventHandler<any> | undefined;
        onCanPlayCapture?: import("react").ReactEventHandler<any> | undefined;
        onCanPlayThrough?: import("react").ReactEventHandler<any> | undefined;
        onCanPlayThroughCapture?: import("react").ReactEventHandler<any> | undefined;
        onDurationChange?: import("react").ReactEventHandler<any> | undefined;
        onDurationChangeCapture?: import("react").ReactEventHandler<any> | undefined;
        onEmptied?: import("react").ReactEventHandler<any> | undefined;
        onEmptiedCapture?: import("react").ReactEventHandler<any> | undefined;
        onEncrypted?: import("react").ReactEventHandler<any> | undefined;
        onEncryptedCapture?: import("react").ReactEventHandler<any> | undefined;
        onEnded?: import("react").ReactEventHandler<any> | undefined;
        onEndedCapture?: import("react").ReactEventHandler<any> | undefined;
        onLoadedData?: import("react").ReactEventHandler<any> | undefined;
        onLoadedDataCapture?: import("react").ReactEventHandler<any> | undefined;
        onLoadedMetadata?: import("react").ReactEventHandler<any> | undefined;
        onLoadedMetadataCapture?: import("react").ReactEventHandler<any> | undefined;
        onLoadStart?: import("react").ReactEventHandler<any> | undefined;
        onLoadStartCapture?: import("react").ReactEventHandler<any> | undefined;
        onPause?: import("react").ReactEventHandler<any> | undefined;
        onPauseCapture?: import("react").ReactEventHandler<any> | undefined;
        onPlayCapture?: import("react").ReactEventHandler<any> | undefined;
        onPlaying?: import("react").ReactEventHandler<any> | undefined;
        onPlayingCapture?: import("react").ReactEventHandler<any> | undefined;
        onProgress?: import("react").ReactEventHandler<any> | undefined;
        onProgressCapture?: import("react").ReactEventHandler<any> | undefined;
        onRateChange?: import("react").ReactEventHandler<any> | undefined;
        onRateChangeCapture?: import("react").ReactEventHandler<any> | undefined;
        onSeeked?: import("react").ReactEventHandler<any> | undefined;
        onSeekedCapture?: import("react").ReactEventHandler<any> | undefined;
        onSeeking?: import("react").ReactEventHandler<any> | undefined;
        onSeekingCapture?: import("react").ReactEventHandler<any> | undefined;
        onStalled?: import("react").ReactEventHandler<any> | undefined;
        onStalledCapture?: import("react").ReactEventHandler<any> | undefined;
        onSuspend?: import("react").ReactEventHandler<any> | undefined;
        onSuspendCapture?: import("react").ReactEventHandler<any> | undefined;
        onTimeUpdate?: import("react").ReactEventHandler<any> | undefined;
        onTimeUpdateCapture?: import("react").ReactEventHandler<any> | undefined;
        onVolumeChange?: import("react").ReactEventHandler<any> | undefined;
        onVolumeChangeCapture?: import("react").ReactEventHandler<any> | undefined;
        onWaiting?: import("react").ReactEventHandler<any> | undefined;
        onWaitingCapture?: import("react").ReactEventHandler<any> | undefined;
        onAuxClick?: import("react").MouseEventHandler<any> | undefined;
        onAuxClickCapture?: import("react").MouseEventHandler<any> | undefined;
        onClick?: import("react").MouseEventHandler<any> | undefined;
        onClickCapture?: import("react").MouseEventHandler<any> | undefined;
        onContextMenu?: import("react").MouseEventHandler<any> | undefined;
        onContextMenuCapture?: import("react").MouseEventHandler<any> | undefined;
        onDoubleClick?: import("react").MouseEventHandler<any> | undefined;
        onDoubleClickCapture?: import("react").MouseEventHandler<any> | undefined;
        onDragCapture?: import("react").DragEventHandler<any> | undefined;
        onDragEndCapture?: import("react").DragEventHandler<any> | undefined;
        onDragEnter?: import("react").DragEventHandler<any> | undefined;
        onDragEnterCapture?: import("react").DragEventHandler<any> | undefined;
        onDragExit?: import("react").DragEventHandler<any> | undefined;
        onDragExitCapture?: import("react").DragEventHandler<any> | undefined;
        onDragLeave?: import("react").DragEventHandler<any> | undefined;
        onDragLeaveCapture?: import("react").DragEventHandler<any> | undefined;
        onDragOver?: import("react").DragEventHandler<any> | undefined;
        onDragOverCapture?: import("react").DragEventHandler<any> | undefined;
        onDragStartCapture?: import("react").DragEventHandler<any> | undefined;
        onDrop?: import("react").DragEventHandler<any> | undefined;
        onDropCapture?: import("react").DragEventHandler<any> | undefined;
        onMouseDown?: import("react").MouseEventHandler<any> | undefined;
        onMouseDownCapture?: import("react").MouseEventHandler<any> | undefined;
        onMouseEnter?: import("react").MouseEventHandler<any> | undefined;
        onMouseLeave?: import("react").MouseEventHandler<any> | undefined;
        onMouseMove?: import("react").MouseEventHandler<any> | undefined;
        onMouseMoveCapture?: import("react").MouseEventHandler<any> | undefined;
        onMouseOut?: import("react").MouseEventHandler<any> | undefined;
        onMouseOutCapture?: import("react").MouseEventHandler<any> | undefined;
        onMouseOver?: import("react").MouseEventHandler<any> | undefined;
        onMouseOverCapture?: import("react").MouseEventHandler<any> | undefined;
        onMouseUp?: import("react").MouseEventHandler<any> | undefined;
        onMouseUpCapture?: import("react").MouseEventHandler<any> | undefined;
        onSelect?: import("react").ReactEventHandler<any> | undefined;
        onSelectCapture?: import("react").ReactEventHandler<any> | undefined;
        onTouchCancel?: import("react").TouchEventHandler<any> | undefined;
        onTouchCancelCapture?: import("react").TouchEventHandler<any> | undefined;
        onTouchEnd?: import("react").TouchEventHandler<any> | undefined;
        onTouchEndCapture?: import("react").TouchEventHandler<any> | undefined;
        onTouchMove?: import("react").TouchEventHandler<any> | undefined;
        onTouchMoveCapture?: import("react").TouchEventHandler<any> | undefined;
        onTouchStart?: import("react").TouchEventHandler<any> | undefined;
        onTouchStartCapture?: import("react").TouchEventHandler<any> | undefined;
        onPointerDown?: import("react").PointerEventHandler<any> | undefined;
        onPointerDownCapture?: import("react").PointerEventHandler<any> | undefined;
        onPointerMove?: import("react").PointerEventHandler<any> | undefined;
        onPointerMoveCapture?: import("react").PointerEventHandler<any> | undefined;
        onPointerUp?: import("react").PointerEventHandler<any> | undefined;
        onPointerUpCapture?: import("react").PointerEventHandler<any> | undefined;
        onPointerCancel?: import("react").PointerEventHandler<any> | undefined;
        onPointerCancelCapture?: import("react").PointerEventHandler<any> | undefined;
        onPointerEnter?: import("react").PointerEventHandler<any> | undefined;
        onPointerEnterCapture?: import("react").PointerEventHandler<any> | undefined;
        onPointerLeave?: import("react").PointerEventHandler<any> | undefined;
        onPointerLeaveCapture?: import("react").PointerEventHandler<any> | undefined;
        onPointerOver?: import("react").PointerEventHandler<any> | undefined;
        onPointerOverCapture?: import("react").PointerEventHandler<any> | undefined;
        onPointerOut?: import("react").PointerEventHandler<any> | undefined;
        onPointerOutCapture?: import("react").PointerEventHandler<any> | undefined;
        onGotPointerCapture?: import("react").PointerEventHandler<any> | undefined;
        onGotPointerCaptureCapture?: import("react").PointerEventHandler<any> | undefined;
        onLostPointerCapture?: import("react").PointerEventHandler<any> | undefined;
        onLostPointerCaptureCapture?: import("react").PointerEventHandler<any> | undefined;
        onScroll?: import("react").UIEventHandler<any> | undefined;
        onScrollCapture?: import("react").UIEventHandler<any> | undefined;
        onWheel?: import("react").WheelEventHandler<any> | undefined;
        onWheelCapture?: import("react").WheelEventHandler<any> | undefined;
        onAnimationStartCapture?: import("react").AnimationEventHandler<any> | undefined;
        onAnimationEnd?: import("react").AnimationEventHandler<any> | undefined;
        onAnimationEndCapture?: import("react").AnimationEventHandler<any> | undefined;
        onAnimationIteration?: import("react").AnimationEventHandler<any> | undefined;
        onAnimationIterationCapture?: import("react").AnimationEventHandler<any> | undefined;
        onTransitionEnd?: import("react").TransitionEventHandler<any> | undefined;
        onTransitionEndCapture?: import("react").TransitionEventHandler<any> | undefined;
        draggable?: (boolean | "false" | "true") | undefined;
        slot?: string | undefined;
        title?: string | undefined;
        defaultChecked?: boolean | undefined;
        defaultValue?: string | number | readonly string[] | undefined;
        suppressContentEditableWarning?: boolean | undefined;
        suppressHydrationWarning?: boolean | undefined;
        accessKey?: string | undefined;
        contentEditable?: "inherit" | (boolean | "false" | "true") | undefined;
        contextMenu?: string | undefined;
        dir?: string | undefined;
        placeholder?: string | undefined;
        spellCheck?: (boolean | "false" | "true") | undefined;
        radioGroup?: string | undefined;
        about?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        prefix?: string | undefined;
        property?: string | undefined;
        resource?: string | undefined;
        typeof?: string | undefined;
        vocab?: string | undefined;
        autoCapitalize?: string | undefined;
        autoCorrect?: string | undefined;
        autoSave?: string | undefined;
        itemProp?: string | undefined;
        itemScope?: boolean | undefined;
        itemType?: string | undefined;
        itemID?: string | undefined;
        itemRef?: string | undefined;
        results?: number | undefined;
        security?: string | undefined;
        unselectable?: "off" | "on" | undefined;
        inputMode?: "none" | "text" | "search" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
        is?: string | undefined;
    } & import("../..").MotionProps & import("react").RefAttributes<any>>;
    Item: import("react").ForwardRefExoticComponent<import("./Item").Props<unknown> & {
        color?: string | undefined;
        translate?: "no" | "yes" | undefined;
        hidden?: boolean | undefined;
        onPlay?: import("react").ReactEventHandler<any> | undefined;
        className?: string | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        role?: import("react").AriaRole | undefined;
        tabIndex?: number | undefined;
        "aria-activedescendant"?: string | undefined;
        "aria-atomic"?: (boolean | "false" | "true") | undefined;
        "aria-autocomplete"?: "none" | "inline" | "both" | "list" | undefined;
        "aria-busy"?: (boolean | "false" | "true") | undefined;
        "aria-checked"?: boolean | "mixed" | "false" | "true" | undefined;
        "aria-colcount"?: number | undefined;
        "aria-colindex"?: number | undefined;
        "aria-colspan"?: number | undefined;
        "aria-controls"?: string | undefined;
        "aria-current"?: boolean | "page" | "false" | "true" | "step" | "location" | "date" | "time" | undefined;
        "aria-describedby"?: string | undefined;
        "aria-details"?: string | undefined;
        "aria-disabled"?: (boolean | "false" | "true") | undefined;
        "aria-dropeffect"?: "none" | "copy" | "move" | "link" | "execute" | "popup" | undefined;
        "aria-errormessage"?: string | undefined;
        "aria-expanded"?: (boolean | "false" | "true") | undefined;
        "aria-flowto"?: string | undefined;
        "aria-grabbed"?: (boolean | "false" | "true") | undefined;
        "aria-haspopup"?: boolean | "grid" | "listbox" | "menu" | "false" | "true" | "dialog" | "tree" | undefined;
        "aria-hidden"?: (boolean | "false" | "true") | undefined;
        "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
        "aria-keyshortcuts"?: string | undefined;
        "aria-label"?: string | undefined;
        "aria-labelledby"?: string | undefined;
        "aria-level"?: number | undefined;
        "aria-live"?: "off" | "assertive" | "polite" | undefined;
        "aria-modal"?: (boolean | "false" | "true") | undefined;
        "aria-multiline"?: (boolean | "false" | "true") | undefined;
        "aria-multiselectable"?: (boolean | "false" | "true") | undefined;
        "aria-orientation"?: "horizontal" | "vertical" | undefined;
        "aria-owns"?: string | undefined;
        "aria-placeholder"?: string | undefined;
        "aria-posinset"?: number | undefined;
        "aria-pressed"?: boolean | "mixed" | "false" | "true" | undefined;
        "aria-readonly"?: (boolean | "false" | "true") | undefined;
        "aria-relevant"?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
        "aria-required"?: (boolean | "false" | "true") | undefined;
        "aria-roledescription"?: string | undefined;
        "aria-rowcount"?: number | undefined;
        "aria-rowindex"?: number | undefined;
        "aria-rowspan"?: number | undefined;
        "aria-selected"?: (boolean | "false" | "true") | undefined;
        "aria-setsize"?: number | undefined;
        "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
        "aria-valuemax"?: number | undefined;
        "aria-valuemin"?: number | undefined;
        "aria-valuenow"?: number | undefined;
        "aria-valuetext"?: string | undefined;
        children?: import("react").ReactNode;
        dangerouslySetInnerHTML?: {
            __html: string;
        } | undefined;
        onCopy?: import("react").ClipboardEventHandler<any> | undefined;
        onCopyCapture?: import("react").ClipboardEventHandler<any> | undefined;
        onCut?: import("react").ClipboardEventHandler<any> | undefined;
        onCutCapture?: import("react").ClipboardEventHandler<any> | undefined;
        onPaste?: import("react").ClipboardEventHandler<any> | undefined;
        onPasteCapture?: import("react").ClipboardEventHandler<any> | undefined;
        onCompositionEnd?: import("react").CompositionEventHandler<any> | undefined;
        onCompositionEndCapture?: import("react").CompositionEventHandler<any> | undefined;
        onCompositionStart?: import("react").CompositionEventHandler<any> | undefined;
        onCompositionStartCapture?: import("react").CompositionEventHandler<any> | undefined;
        onCompositionUpdate?: import("react").CompositionEventHandler<any> | undefined;
        onCompositionUpdateCapture?: import("react").CompositionEventHandler<any> | undefined;
        onFocus?: import("react").FocusEventHandler<any> | undefined;
        onFocusCapture?: import("react").FocusEventHandler<any> | undefined;
        onBlur?: import("react").FocusEventHandler<any> | undefined;
        onBlurCapture?: import("react").FocusEventHandler<any> | undefined;
        onChange?: import("react").FormEventHandler<any> | undefined;
        onChangeCapture?: import("react").FormEventHandler<any> | undefined;
        onBeforeInput?: import("react").FormEventHandler<any> | undefined;
        onBeforeInputCapture?: import("react").FormEventHandler<any> | undefined;
        onInput?: import("react").FormEventHandler<any> | undefined;
        onInputCapture?: import("react").FormEventHandler<any> | undefined;
        onReset?: import("react").FormEventHandler<any> | undefined;
        onResetCapture?: import("react").FormEventHandler<any> | undefined;
        onSubmit?: import("react").FormEventHandler<any> | undefined;
        onSubmitCapture?: import("react").FormEventHandler<any> | undefined;
        onInvalid?: import("react").FormEventHandler<any> | undefined;
        onInvalidCapture?: import("react").FormEventHandler<any> | undefined;
        onLoad?: import("react").ReactEventHandler<any> | undefined;
        onLoadCapture?: import("react").ReactEventHandler<any> | undefined;
        onError?: import("react").ReactEventHandler<any> | undefined;
        onErrorCapture?: import("react").ReactEventHandler<any> | undefined;
        onKeyDown?: import("react").KeyboardEventHandler<any> | undefined;
        onKeyDownCapture?: import("react").KeyboardEventHandler<any> | undefined;
        onKeyPress?: import("react").KeyboardEventHandler<any> | undefined;
        onKeyPressCapture?: import("react").KeyboardEventHandler<any> | undefined;
        onKeyUp?: import("react").KeyboardEventHandler<any> | undefined;
        onKeyUpCapture?: import("react").KeyboardEventHandler<any> | undefined;
        onAbort?: import("react").ReactEventHandler<any> | undefined;
        onAbortCapture?: import("react").ReactEventHandler<any> | undefined;
        onCanPlay?: import("react").ReactEventHandler<any> | undefined;
        onCanPlayCapture?: import("react").ReactEventHandler<any> | undefined;
        onCanPlayThrough?: import("react").ReactEventHandler<any> | undefined;
        onCanPlayThroughCapture?: import("react").ReactEventHandler<any> | undefined;
        onDurationChange?: import("react").ReactEventHandler<any> | undefined;
        onDurationChangeCapture?: import("react").ReactEventHandler<any> | undefined;
        onEmptied?: import("react").ReactEventHandler<any> | undefined;
        onEmptiedCapture?: import("react").ReactEventHandler<any> | undefined;
        onEncrypted?: import("react").ReactEventHandler<any> | undefined;
        onEncryptedCapture?: import("react").ReactEventHandler<any> | undefined;
        onEnded?: import("react").ReactEventHandler<any> | undefined;
        onEndedCapture?: import("react").ReactEventHandler<any> | undefined;
        onLoadedData?: import("react").ReactEventHandler<any> | undefined;
        onLoadedDataCapture?: import("react").ReactEventHandler<any> | undefined;
        onLoadedMetadata?: import("react").ReactEventHandler<any> | undefined;
        onLoadedMetadataCapture?: import("react").ReactEventHandler<any> | undefined;
        onLoadStart?: import("react").ReactEventHandler<any> | undefined;
        onLoadStartCapture?: import("react").ReactEventHandler<any> | undefined;
        onPause?: import("react").ReactEventHandler<any> | undefined;
        onPauseCapture?: import("react").ReactEventHandler<any> | undefined;
        onPlayCapture?: import("react").ReactEventHandler<any> | undefined;
        onPlaying?: import("react").ReactEventHandler<any> | undefined;
        onPlayingCapture?: import("react").ReactEventHandler<any> | undefined;
        onProgress?: import("react").ReactEventHandler<any> | undefined;
        onProgressCapture?: import("react").ReactEventHandler<any> | undefined;
        onRateChange?: import("react").ReactEventHandler<any> | undefined;
        onRateChangeCapture?: import("react").ReactEventHandler<any> | undefined;
        onSeeked?: import("react").ReactEventHandler<any> | undefined;
        onSeekedCapture?: import("react").ReactEventHandler<any> | undefined;
        onSeeking?: import("react").ReactEventHandler<any> | undefined;
        onSeekingCapture?: import("react").ReactEventHandler<any> | undefined;
        onStalled?: import("react").ReactEventHandler<any> | undefined;
        onStalledCapture?: import("react").ReactEventHandler<any> | undefined;
        onSuspend?: import("react").ReactEventHandler<any> | undefined;
        onSuspendCapture?: import("react").ReactEventHandler<any> | undefined;
        onTimeUpdate?: import("react").ReactEventHandler<any> | undefined;
        onTimeUpdateCapture?: import("react").ReactEventHandler<any> | undefined;
        onVolumeChange?: import("react").ReactEventHandler<any> | undefined;
        onVolumeChangeCapture?: import("react").ReactEventHandler<any> | undefined;
        onWaiting?: import("react").ReactEventHandler<any> | undefined;
        onWaitingCapture?: import("react").ReactEventHandler<any> | undefined;
        onAuxClick?: import("react").MouseEventHandler<any> | undefined;
        onAuxClickCapture?: import("react").MouseEventHandler<any> | undefined;
        onClick?: import("react").MouseEventHandler<any> | undefined;
        onClickCapture?: import("react").MouseEventHandler<any> | undefined;
        onContextMenu?: import("react").MouseEventHandler<any> | undefined;
        onContextMenuCapture?: import("react").MouseEventHandler<any> | undefined;
        onDoubleClick?: import("react").MouseEventHandler<any> | undefined;
        onDoubleClickCapture?: import("react").MouseEventHandler<any> | undefined;
        onDragCapture?: import("react").DragEventHandler<any> | undefined;
        onDragEndCapture?: import("react").DragEventHandler<any> | undefined;
        onDragEnter?: import("react").DragEventHandler<any> | undefined;
        onDragEnterCapture?: import("react").DragEventHandler<any> | undefined;
        onDragExit?: import("react").DragEventHandler<any> | undefined;
        onDragExitCapture?: import("react").DragEventHandler<any> | undefined;
        onDragLeave?: import("react").DragEventHandler<any> | undefined;
        onDragLeaveCapture?: import("react").DragEventHandler<any> | undefined;
        onDragOver?: import("react").DragEventHandler<any> | undefined;
        onDragOverCapture?: import("react").DragEventHandler<any> | undefined;
        onDragStartCapture?: import("react").DragEventHandler<any> | undefined;
        onDrop?: import("react").DragEventHandler<any> | undefined;
        onDropCapture?: import("react").DragEventHandler<any> | undefined;
        onMouseDown?: import("react").MouseEventHandler<any> | undefined;
        onMouseDownCapture?: import("react").MouseEventHandler<any> | undefined;
        onMouseEnter?: import("react").MouseEventHandler<any> | undefined;
        onMouseLeave?: import("react").MouseEventHandler<any> | undefined;
        onMouseMove?: import("react").MouseEventHandler<any> | undefined;
        onMouseMoveCapture?: import("react").MouseEventHandler<any> | undefined;
        onMouseOut?: import("react").MouseEventHandler<any> | undefined;
        onMouseOutCapture?: import("react").MouseEventHandler<any> | undefined;
        onMouseOver?: import("react").MouseEventHandler<any> | undefined;
        onMouseOverCapture?: import("react").MouseEventHandler<any> | undefined;
        onMouseUp?: import("react").MouseEventHandler<any> | undefined;
        onMouseUpCapture?: import("react").MouseEventHandler<any> | undefined;
        onSelect?: import("react").ReactEventHandler<any> | undefined;
        onSelectCapture?: import("react").ReactEventHandler<any> | undefined;
        onTouchCancel?: import("react").TouchEventHandler<any> | undefined;
        onTouchCancelCapture?: import("react").TouchEventHandler<any> | undefined;
        onTouchEnd?: import("react").TouchEventHandler<any> | undefined;
        onTouchEndCapture?: import("react").TouchEventHandler<any> | undefined;
        onTouchMove?: import("react").TouchEventHandler<any> | undefined;
        onTouchMoveCapture?: import("react").TouchEventHandler<any> | undefined;
        onTouchStart?: import("react").TouchEventHandler<any> | undefined;
        onTouchStartCapture?: import("react").TouchEventHandler<any> | undefined;
        onPointerDown?: import("react").PointerEventHandler<any> | undefined;
        onPointerDownCapture?: import("react").PointerEventHandler<any> | undefined;
        onPointerMove?: import("react").PointerEventHandler<any> | undefined;
        onPointerMoveCapture?: import("react").PointerEventHandler<any> | undefined;
        onPointerUp?: import("react").PointerEventHandler<any> | undefined;
        onPointerUpCapture?: import("react").PointerEventHandler<any> | undefined;
        onPointerCancel?: import("react").PointerEventHandler<any> | undefined;
        onPointerCancelCapture?: import("react").PointerEventHandler<any> | undefined;
        onPointerEnter?: import("react").PointerEventHandler<any> | undefined;
        onPointerEnterCapture?: import("react").PointerEventHandler<any> | undefined;
        onPointerLeave?: import("react").PointerEventHandler<any> | undefined;
        onPointerLeaveCapture?: import("react").PointerEventHandler<any> | undefined;
        onPointerOver?: import("react").PointerEventHandler<any> | undefined;
        onPointerOverCapture?: import("react").PointerEventHandler<any> | undefined;
        onPointerOut?: import("react").PointerEventHandler<any> | undefined;
        onPointerOutCapture?: import("react").PointerEventHandler<any> | undefined;
        onGotPointerCapture?: import("react").PointerEventHandler<any> | undefined;
        onGotPointerCaptureCapture?: import("react").PointerEventHandler<any> | undefined;
        onLostPointerCapture?: import("react").PointerEventHandler<any> | undefined;
        onLostPointerCaptureCapture?: import("react").PointerEventHandler<any> | undefined;
        onScroll?: import("react").UIEventHandler<any> | undefined;
        onScrollCapture?: import("react").UIEventHandler<any> | undefined;
        onWheel?: import("react").WheelEventHandler<any> | undefined;
        onWheelCapture?: import("react").WheelEventHandler<any> | undefined;
        onAnimationStartCapture?: import("react").AnimationEventHandler<any> | undefined;
        onAnimationEnd?: import("react").AnimationEventHandler<any> | undefined;
        onAnimationEndCapture?: import("react").AnimationEventHandler<any> | undefined;
        onAnimationIteration?: import("react").AnimationEventHandler<any> | undefined;
        onAnimationIterationCapture?: import("react").AnimationEventHandler<any> | undefined;
        onTransitionEnd?: import("react").TransitionEventHandler<any> | undefined;
        onTransitionEndCapture?: import("react").TransitionEventHandler<any> | undefined;
        draggable?: (boolean | "false" | "true") | undefined;
        slot?: string | undefined;
        title?: string | undefined;
        defaultChecked?: boolean | undefined;
        defaultValue?: string | number | readonly string[] | undefined;
        suppressContentEditableWarning?: boolean | undefined;
        suppressHydrationWarning?: boolean | undefined;
        accessKey?: string | undefined;
        contentEditable?: "inherit" | (boolean | "false" | "true") | undefined;
        contextMenu?: string | undefined;
        dir?: string | undefined;
        placeholder?: string | undefined;
        spellCheck?: (boolean | "false" | "true") | undefined;
        radioGroup?: string | undefined;
        about?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        prefix?: string | undefined;
        property?: string | undefined;
        resource?: string | undefined;
        typeof?: string | undefined;
        vocab?: string | undefined;
        autoCapitalize?: string | undefined;
        autoCorrect?: string | undefined;
        autoSave?: string | undefined;
        itemProp?: string | undefined;
        itemScope?: boolean | undefined;
        itemType?: string | undefined;
        itemID?: string | undefined;
        itemRef?: string | undefined;
        results?: number | undefined;
        security?: string | undefined;
        unselectable?: "off" | "on" | undefined;
        inputMode?: "none" | "text" | "search" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
        is?: string | undefined;
    } & import("../..").MotionProps & import("react").RefAttributes<any>>;
};
