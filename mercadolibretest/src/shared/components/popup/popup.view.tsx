import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { trapFocus } from "../../utils";
import * as Styled from "./popup.styled";
import { CrossIcon } from "../../../assets/icons";
import Typography from "../typography/typography.view";

interface PopupProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
	titleId?: string;
	descriptionId?: string;
}

export const Popup: React.FC<PopupProps> = ({
	isOpen,
	onClose,
	children,
	title,
	titleId = "popup-title",
	descriptionId = "popup-description",
}) => {
	const contentRef = useRef<HTMLDivElement>(null);

	// Lock scroll
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	// Close on ESC
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
			trapFocus(contentRef.current, e);
		};
		if (isOpen) {
			document.addEventListener("keydown", handleKeyDown);
		}
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	const portalRoot = document.getElementById("portal-root") || document.body;

	return ReactDOM.createPortal(
		<Styled.Overlay
			data-testid="popup-overlay"
			role="presentation"
			onClick={onClose}
			aria-hidden="true">
			<Styled.Content
				data-testid="popup-content"
				role="dialog"
				aria-modal="true"
				aria-labelledby={titleId}
				aria-describedby={descriptionId}
				onClick={(e) => e.stopPropagation()}
				ref={contentRef}>
				<div id={titleId} style={{ display: "none" }}>
					Popup Title
				</div>
				<div id={descriptionId} style={{ display: "none" }}>
					Popup description
				</div>

				<Styled.TopContainer>
					<Typography as="h3" pxFontSize={null}>
						{title}
					</Typography>
					<Styled.CloseWrapper onClick={onClose}>
						<CrossIcon ariaLabel="Fechar popup" />
					</Styled.CloseWrapper>
				</Styled.TopContainer>

				{children}
			</Styled.Content>
		</Styled.Overlay>,
		portalRoot
	);
};
