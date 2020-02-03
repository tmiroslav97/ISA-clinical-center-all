package clinic.centersystem.converter;

import clinic.centersystem.model.Clinic;
import clinic.centersystem.model.MedicalReport;
import clinic.centersystem.model.Medicine;
import clinic.centersystem.model.Prescription;

public class PrescriptionConverter {

    public static Prescription toCreatePrescriptionFromMedicine(Medicine medicine, Clinic clinic, MedicalReport medicalReport){
        return  Prescription.builder()
                .isValidate(false)
                .medicine(medicine)
                .medicalReport(medicalReport)
                .clinic(clinic)
                .build();
    }
}
