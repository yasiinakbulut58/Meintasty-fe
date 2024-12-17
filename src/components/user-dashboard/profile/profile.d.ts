interface Detail {
  label: string;
  value: string;
  editable?: boolean;
  modalTarget?: string;
}

interface Section {
  title: string;
  details: Detail[];
}

interface EditProfileInterFace {
  open: boolean;
  toggle: () => void;
  user: IUser;
}
interface MultipleModalInterFace {
  open: boolean;
  toggle: (val: string) => void;
}
